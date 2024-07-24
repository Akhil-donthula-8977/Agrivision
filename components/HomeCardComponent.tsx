import Image from 'next/image';
import img2 from "@/public/image2.jpeg";
import { Reveal } from './Framer/Reveal';
import { RevealFromLeft } from './Framer/RevealFromLeft';
import { RevealFromRight } from './Framer/RevealFromRight';
const HomeCardComponent = () => {
    return (
        <section>
            <div className="flex flex-col sm:flex-row items-center justify-center p-6 w-[90%] mx-auto ">
                <RevealFromLeft>
                    <div className="flex-none  sm:block rounded-[10px] overflow-hidden">
                        <Image width={450} height={400} src={img2} alt="paper" className="rounded-[10px]" priority />
                    </div>
                </RevealFromLeft>
                <Reveal CustomClass="flex-1 flex items-center justify-center rounded-r-[30px] p-6">
                    <div className="text-center flex flex-col items-center">
                        <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl mb-4">
                            We work for the betterment of
                            <span className="mx-1 text-transparent bg-clip-text bg-gradient-to-tr to-green-500 from-green-800">
                                Future of Farming!
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl mt-2 mb-4">
                            Future of Agriculture
                        </p>
                        <div className='text-sm sm:w-[80%] tracking-wide leading-relaxed'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                </Reveal>
            </div>


            <div className="flex flex-col sm:flex-row items-center justify-center p-6 w-[90%] mx-auto relative top-20 ">
                <Reveal CustomClass="flex-1 flex items-center justify-center rounded-r-[30px] p-6 ">
                    <div className="text-center flex flex-col items-center">
                        <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl mb-4">
                            We work for the betterment of
                            <span className="mx-1 text-transparent bg-clip-text bg-gradient-to-tr to-green-500 from-green-800">
                                Future of Farming!
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl mt-2 mb-4">
                            Future of Agriculture
                        </p>
                        <div className='text-sm sm:w-[80%] tracking-wide leading-relaxed'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>

                </Reveal>
                <RevealFromRight>
                    <div className="flex-none  sm:block rounded-[10px] overflow-hidden">
                        <Image width={450} height={400} src={img2} alt="paper" className="rounded-[10px]" priority />
                    </div>
                </RevealFromRight>

            </div>
        </section>
    );
}

export default HomeCardComponent;
