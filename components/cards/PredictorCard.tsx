import Image from 'next/image';
import React from 'react';
import priceImage from "@/public/cropPricePred.jpeg";
import { nunito } from '@/lib/fontsCustom';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import Link from 'next/link';
const PredictorCard = () => {
    return (
        <Link href={`predictors/${"crop-recommendation"}`}>
            <div
                className={cn(
                    "max-w-[290px] rounded overflow-hidden shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105",
                    nunito.className
                )}
            >
                <Image className="w-full  object-cover" src={priceImage} alt="Sunset in the mountains" />
                <div className="px-4 py-3">
                    <div className="font-bold text-lg mb-2">Predict your crop price</div>
                    <p className="text-gray-700 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div className="px-4 pt-3 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1 mb-1">#winter</span>
                </div>
            </div>
        </Link>
    );
};

export default PredictorCard;
