"use client"
import React, { Suspense } from 'react'
import { ICardsDisplay } from './cards/PredictorCard'
import iam from "@/public/crop_price_prediction.jpeg" 
const Card = React.lazy(() => import('./cards/PredictorCard'))
const data: ICardsDisplay[] = [
    {
        title: "crop yield",
        description: "Get the best yield prediction for your crop",
        imageUrl: "https://www.shutterstock.com/image-photo/money-bag-hand-farmer-on-600nw-1906248070.jpg",
        predictorUrl: "yield-predction"
    },
    {
        title: "crop recommendation",
        description: "get the most accurate result about which crop to cultivate next",
        imageUrl: "https://miro.medium.com/v2/resize:fit:1400/0*k-lYNf3gZ1M2u6AN",
        predictorUrl: "crop-recommendation"
    },
    {
        title:"plant disease detection",
        description:"know the disease based on images",
        imageUrl:"https://www.planetnatural.com/wp-content/uploads/2012/12/anthracnose-1.jpg",
        predictorUrl:"crop-disease-predction"
    },
    {
        title:"crop price prediction",
        description:"know the crop price based on demographics, crop adn more!",
        imageUrl:iam,
        predictorUrl:"price-prediction"
    },

]
const CardsDisplay = () => {
    return (
        <div className='flex flex-wrap gap-5'>
            {
                data.map((e, index) => <Suspense key={index} fallback={
                    <div className="max-w-[290px] rounded overflow-hidden shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 bg-slate-400" ></div>}> <Card data={e}></Card> </Suspense>)
            }
        </div>
    )
}

export default CardsDisplay