"use client";
import React, { useState } from 'react';
import { nunito } from "@/lib/fontsCustom";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { Form } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import CustomFormField from '@/components/customFormComponents/CustomFormField';
import StackHorizontal from '@/components/ui/StackHorizontal';
import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Modal } from '@/components/Modal';
import RecommdationCard from '@/components/cards/RecommendationCard';

// Define the form schema with required validations
const formSchema = z.object({
    State: z.string(),
    District: z.string().min(1, "District is required."),
    Market: z.string().min(1, "Market is required."),
    Commodity: z.string().min(1, "Commodity is required."),
    Variety: z.string().min(1, "Variety is required."),
    Grade: z.string().min(1, "Grade is required."),
});

const Page = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
        defaultValues: {
            State: "Andhra Pradesh",
            District: "Amarawati",
            Market: "Atmakur",
            Commodity: "Bunch Beans",
            Variety: "Average",
            Grade: "Large"
        },
    });
    const [isOpen, setIsOpen] = useState(false);
    const { handleSubmit, formState: { isSubmitting,isValid } } = form;
    const session = useSession();
    const [data, setData] = useState(0);

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("Submitting values:", values); // Log submitted values
        try {
            const query = {
                State: values.State,
                District: values.District,
                Market: values.Market,
                Commodity: values.Commodity,
                Variety: values.Variety,
                Grade: values.Grade,
            };

            const response = await fetch('http://127.0.0.1:5000/api/price', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(query)
            });

            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }

            const responseData = await response.json(); // parse the JSON response
            console.log("Response Data:", responseData); // Log the response data

            // Ensure data is properly structured and contains the prediction
            if (responseData && responseData.prediction) {
                const num = parseInt(responseData.prediction);
                if (isNaN(num)) {
                    console.error("Parsed prediction is NaN:", responseData.prediction);
                } else {
                    console.log("Prediction number:", num);
                    setData(num);
                }
            } else {
                console.error('Prediction data is missing from the response:', responseData);
            }

            setIsOpen(true);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }

    return (
        <section className="flex flex-col justify-center mt-10 mb-5">
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} component={<RecommdationCard data={data} onClose={() => setIsOpen(false)} />} />
            <div className="flex justify-center">
                <Form {...form}>
                    <form onSubmit={handleSubmit(onSubmit)} className={cn("space-y-4", nunito.className)}>
                        <StackHorizontal className="space-x-5">
                            <CustomFormField
                                control={form.control}
                                name="State"
                                label="State"
                                description="Enter State name."
                                placeholder="State"
                                type="text"
                            />
                            <CustomFormField
                                control={form.control}
                                name="District"
                                label="District"
                                description="Enter District name."
                                placeholder="District"
                                type="text"
                            />
                            <CustomFormField
                                control={form.control}
                                name="Market"
                                label="Market"
                                description="Enter Market name."
                                placeholder="Market"
                                type="text"
                            />
                        </StackHorizontal>
                        <CustomFormField
                            control={form.control}
                            name="Commodity"
                            label="Commodity"
                            description="Enter Commodity name."
                            placeholder="Commodity"
                            type="text"
                        />
                        <CustomFormField
                            control={form.control}
                            name="Variety"
                            label="Variety"
                            description="Enter Variety name."
                            placeholder="Variety"
                            type="text"
                        />
                        <CustomFormField
                            control={form.control}
                            name="Grade"
                            label="Grade"
                            description="Enter Grade."
                            placeholder="Grade"
                            type="text"
                        />
                        <Button type="submit" disabled={isSubmitting}>
                            <p className="mr-2">Submit</p>
                            {isSubmitting && (
                                <svg
                                    aria-hidden="true"
                                    className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill"
                                    />
                                </svg>
                            )}
                        </Button>
                    </form>
                </Form>
            </div>
        </section>
    );
};

export default Page;
