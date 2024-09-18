"use client";
import React, { useState } from 'react';
import { nunito } from '@/lib/fontsCustom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import { z } from "zod";
import StackHorizontal from "@/components/ui/StackHorizontal";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import CustomFormField from "@/components/customFormComponents/CustomFormField";
import CustomDropDown from '@/components/customFormComponents/CustomDropDown';
import { crop_labels, state_labels, season_labels } from '@/constants/predictorConstants';
import { Modal } from '@/components/Modal';
import YieldResultCard from '@/components/cards/YieldResultCard';
const formSchema = z.object({
  Crop: z.string(),
  Season: z.string(),
  State: z.string(),
  Area: z.number().min(0, "Area must be a positive number"),
  Production: z.number().min(0, "Production must be a positive number"),
  Fertilizer: z.number().min(0, "Fertilizer must be a positive number"),
  Pesticide: z.number().min(0, "Pesticide must be a positive number"),
  
});
interface results{
  prediction:Array<number>
}
const Page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange"
  });
  const [data,setData]=useState([]);
  const { handleSubmit, formState: { isSubmitting, isValid, errors } } = form;
  const [isOpen,setIsOpen]=useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
    
        const response = await fetch('http://127.0.0.1:5000/api/yield/', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(values)
        });
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json(); 
       
        if (data && data.prediction) {
            console.log(data.prediction);
            setData(data.prediction);
        } else {
            console.error('Prediction data is missing from the response:', data);
        }
        
        setIsOpen(true);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error); 
    }
}
  return (
    <section className="flex mt-10 mb-5">
      <div className="flex justify-center flex-1">
      <Modal  isOpen={isOpen} onClose={() => setIsOpen(false)} component={<YieldResultCard data={data} onClose={() => setIsOpen(false)}></YieldResultCard>}></Modal>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className={cn("space-y-4 ", nunito.className)}>
            <CustomDropDown
              control={form.control}
              name="Crop"
              label="Name of Crop"
              description="Select the crop you want to harvest"
              placeholder="Paddy, Millets"
              options={crop_labels}
              errors={errors}
            />
            <CustomDropDown
              control={form.control}
              name="Season"
              label="Season"
              description="Select the season to harvest your crop"
              placeholder="Season"
              options={season_labels}
              errors={errors}
            />
            <CustomDropDown
              control={form.control}
              name="State"
              label="State"
              description="Select your state"
              placeholder="State"
              options={state_labels}
              errors={errors}
            />
            <StackHorizontal className="space-x-5">
              <CustomFormField
                control={form.control}
                name="Area"
                label="Area"
                description="Enter the area in hectares"
                placeholder="Area"
                type="number"
              />
              <CustomFormField
                control={form.control}
                name="Production"
                label="Production"
                description="Enter the production quantity in tonnes"
                placeholder="Production"
                type="number"
              />
            </StackHorizontal>
            <StackHorizontal className="space-x-5">
              <CustomFormField
                control={form.control}
                name="Fertilizer"
                label="Fertilizer"
                description="Enter the amount of fertilizer used"
                placeholder="Fertilizer"
                type="number"
              />
              <CustomFormField
                control={form.control}
                name="Pesticide"
                label="Pesticide"
                description="Enter the amount of pesticide used"
                placeholder="Pesticide"
                type="number"
              />
            </StackHorizontal>
            
           
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
