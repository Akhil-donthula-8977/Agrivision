import Image from 'next/image';
import React from 'react';
import { nunito } from '@/lib/fontsCustom';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '../ui/button';
import { StaticImageData } from 'next/image';
export interface ICardsDisplay {
    title: string;
    description: string;
    imageUrl: string|StaticImageData;
    predictorUrl: string;
}

const PredictorCard = ({ data }: { data: ICardsDisplay }) => {
    return (
        <Link href={`predictors/${data.predictorUrl}`}>
            <div
                className={cn(
                    "max-w-[290px]  h-[350px] sm:h-[420px] rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 ease-in-out m-2 hover:scale-105",
                    nunito.className
                )}
            >
                <div className="relative h-[240px] w-full">
                    <Image 
                        className="object-cover" 
                       
                        alt="Predictor Image" 
                        src={data.imageUrl} 
                        layout="fill" 
                        objectFit="cover"
                    />
                </div>
                <div className="px-4 py-3 h-[110px]">
                    <div className="font-bold text-lg mb-2">{data.title}</div>
                    <p className="text-gray-700 text-sm line-clamp-2">
                        {data.description}
                    </p>
                </div>
                <div className="px-4 pt-3 pb-2">
                    <Button className="h-10 py-2 w-full">Explore</Button>
                </div>
            </div>
        </Link>
    );
};

export default PredictorCard;
