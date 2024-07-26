

import { auth } from '@/auth';
import Navbar from '@/components/NavBar';
import PredictorSideNavigationBar from '@/components/ui/PredictorSideNavigationBar';
import { redirect } from 'next/navigation';
import React from 'react';


export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth() 
  if (!session?.user) return redirect("/")
  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <div className='flex flex-1'>
        <div className=' top-16 left h-[calc(100vh-4rem)]  text-white '>
          <PredictorSideNavigationBar />
        </div>
        <div className='flex-1  pl-4'>
          <main className='overflow-y-auto h-full '>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
