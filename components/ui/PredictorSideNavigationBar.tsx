"use client";
import { nunito } from '@/lib/fontsCustom';
import React, { useState } from 'react';
import { FaHome, FaUser, FaCog, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { PredictorNavList } from '@/lib/utils';
import { PredictorNavListItem } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const PredictorSideNavigationBar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => setIsOpen(!isOpen);
    const pathname = usePathname();
    console.log(pathname);

    if (pathname === "/predictors") return null;

    return (
        <div

            className={`  bg-green-800 text-white  h-dvh top-10 mr-65  ${isOpen ? 'w-64' : 'w-16'} transition-all duration-300 bg-black text-white ${nunito.className}`}>
         
            <div className="flex flex-col justify-between h-full">
                <div className='flex justify-end'>
                    <button
                        className='m-3 z-10 bg-green-800 p-2 rounded-xl border'
                        onClick={handleToggle}
                    >
                        {isOpen ? <FaArrowLeft /> : <FaArrowRight />}
                    </button>
                </div>

                {/* Logo / Title */}
                <div className="flex items-center justify-center p-4">
                    {isOpen && <h1 className="text-xl font-bold relative right-2">Predictors</h1>}
                </div>

                {/* Navigation Items */}
                <nav className="flex flex-col flex-grow">
                    {
                        PredictorNavList.map((data: PredictorNavListItem, index) => (
                            <Link
                                key={index}
                                href={data.url}
                                className={`flex items-center p-4 ${isOpen ? 'justify-start' : 'justify-center'} hover:bg-green-600`}
                            >
                                {data.icon}
                                {isOpen && <span className='ml-1'>{data.name}</span>}
                            </Link>
                        ))
                    }
                </nav>

                {/* Footer or Additional Content */}
                <div className="p-4 text-center">
                    {isOpen && <span>Footer Content</span>}
                </div>
            </div>
        </div>
    );
};

export default PredictorSideNavigationBar;
