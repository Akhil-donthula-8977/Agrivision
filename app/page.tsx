import { cn } from "@/lib/utils";
import { nunito } from "@/lib/fontsCustom";
import { Reveal } from "@/components/Framer/Reveal";
import img from "@/public/front_page_photo.jpg";
import img2 from "@/public/download_arrow.png";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import HomePageCounter from "@/components/HomePageCounter";
import HomePageMainHeader from "@/components/HomePageMainHeader";
import HomeCardComponent from "@/components/HomeCardComponent";
import Footer from "@/components/Footer";
import LeadershipSection from "@/components/HomePage/Leader/LeadershipSection";
import { RevealFromBottom } from "@/components/Framer/RevealFromBottom";
import AuthForm from "@/components/AuthForm";
import {  auth } from "@/auth";
import { redirect } from "next/navigation";
export default async function Home() {
  const session = await auth()
  console.log(session);
  if (session) return redirect("/predictors");
  return (
    <main className={cn('flex flex-col h-screen max-h-screen', nunito.className)}>
      <div className="bg-green-800 text-white p-2 w-full">
        <Marquee className="text-xl">
          <p>Lets Make Farm methodologies cool</p>
        </Marquee>
      </div>
      <div className="flex flex-1 items-center min-h-dvh bg-green-50">
        <div className="flex flex-1 items-center justify-center sm:justify-center sm:max-w-[50%]">
          <Reveal CustomClass="flex-1 flex items-center justify-center sm:justify-center rounded-r-[30px]">
            <HomePageMainHeader></HomePageMainHeader>
          </Reveal>
        </div> 

        <div className="flex-1 hidden sm:flex items-center justify-center sm:w-[500px] sm:h-[300px]">
          <Image width={550} priority height={350} src={img} alt="paper" className="sm:block hidden rounded-[10px]" />
        </div>
      </div>
      <div className="flex sm:flex-row m-10 space-y-10 sm:space-y-0 flex-col space-x-3 justify-evenly items-center sm:items-normal">
        <HomePageCounter target={150} title="Customer" duration={1} />
        <HomePageCounter target={4} title="ML predictive Analysis Systems" duration={1} />
        <HomePageCounter target={99} title="Accuracy" duration={1} />
      </div>
      <div className="flex justify-center space-x-2 ">
        <HomeCardComponent></HomeCardComponent>
      </div>
      <div className="relative top-10">
        <LeadershipSection></LeadershipSection>
      </div>
      <div className="relative top-20">
        <Footer></Footer>
      </div>
    </main>
  );
}
