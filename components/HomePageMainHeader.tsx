import React from 'react';
import Image from 'next/image';
import img2 from "@/public/download_arrow.png";

const HomePageMainHeader = () => {
    return (
        <div className="text-4xl font-bold tracking-tight flex flex-col items-center justify-center sm:text-6xl md:text-[70px] p-6">
            <span className="block text-center">
                We are
                <span className="mx-1 text-transparent bg-clip-text bg-gradient-to-tr to-green-500 from-green-800">
                    AgriVision!
                </span>
                <br />
                <p className="sm:text-4xl text-2xl mt-2">Future of Agriculture</p>
            </span>
            <div className='text-sm sm:w-[80%] tracking-wide mt-6 leading-[2rem] text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className='mt-10'>
                <Image src={img2} height={50} width={50} alt="m" className="mix-blend-multiply animate-bounce" />
            </div>
        </div>
    );
}

export default HomePageMainHeader;
