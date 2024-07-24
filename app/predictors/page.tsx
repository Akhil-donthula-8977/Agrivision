import React from 'react';
import PredictorCard from '@/components/cards/PredictorCard';

const Page = () => {
    return (
        <section className='relative p-4 sm:p-8'>
            <div className='flex flex-col sm:flex-row gap-6 sm:gap-10 flex-wrap justify-center'>
                <PredictorCard />
                <PredictorCard />
                <PredictorCard />
                <PredictorCard />
                <PredictorCard />
                <PredictorCard />
            </div>
        </section>
    );
};

export default Page;
