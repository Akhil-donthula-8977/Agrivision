import { type ClassValue, clsx } from "clsx"
import { FaHome } from "react-icons/fa";
import { twMerge } from "tailwind-merge"
import { PiPlantFill } from "react-icons/pi";
import { FaDisease } from "react-icons/fa6";
import { StaticImageData } from "next/image";
import img  from "@/public/Akhil.png"
import { AiOutlineRise } from "react-icons/ai";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
//<FaDisease />

export interface PredictorNavListItem{
  url:string,
  name:string,
  icon?:React.ReactNode,
  image?:StaticImageData,
  description?:string
}

// url , name , icon
export const PredictorNavList:PredictorNavListItem[]=[
  {
    name:"Crop Recommendation",
    url:"/predictors/crop-recommendation",
    icon: <PiPlantFill className="text-md "/>
  },
  {
    name:"Predict plant disease",
    url:"/predictors/crop-disease-predction",
    icon: <FaDisease className="text-md "/>
  },
  {
    name:"Predict Yield",
    url:"/predictors/yield-predction",
    icon: <AiOutlineRise className="text-md " />
  },

]
