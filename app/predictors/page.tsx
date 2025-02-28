import React from 'react';
import PredictorCard from '@/components/cards/PredictorCard';
import CardsDisplay from '@/components/CardsDisplay';
import { nunito } from '@/lib/fontsCustom';
const Page = () => {
    return (
        <section className='relative p-4 sm:p-8'>
                <div className='flex items-center flex-col gap-6 sm:gap-10 flex-wrap justify-center'>
                <h1 className={`text-2xl text-left font-bold ${nunito.className}`}>services:</h1>
                <div className='sm:flex-row'>
                    <CardsDisplay></CardsDisplay>
                </div>
            </div>
        </section>
    );
};

export default Page;
