// components/YieldResultCard.tsx
import React from 'react';
import { IoMdClose } from "react-icons/io";
interface YieldResultCardProps {
    onClose: () => void;
    data:string|number
}

const RecommdationCard: React.FC<YieldResultCardProps> = ({ onClose,data }) => {
    return (
        <div className="flex items-center justify-center bg-gray-200">
            <div className="max-w-md p-6 bg-white rounded-lg shadow-lg">
                <div className='flex justify-between gap-5'>
                <h2 className="mb-4 text-2xl font-bold">Result</h2>
                <button
                        className=" p-1 h-7 font-semibold text-white bg-green-500 rounded-md hover:bg-green-600"
                        onClick={onClose}
                    >
                        <IoMdClose />
                    </button>
                    </div>
                <p className="mb-4 text-gray-700">
                    {data}
                </p>
                <div className="flex justify-end">
                  
                </div>
            </div>
        </div>
    );
};

export default RecommdationCard;
