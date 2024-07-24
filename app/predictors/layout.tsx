

import Navbar from '@/components/NavBar';
import PredictorSideNavigationBar from '@/components/ui/PredictorSideNavigationBar';
import React from 'react';


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const headerList = headers();
  // const pathname = headerList.get("x-current-path");

  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <div className='flex flex-1'>
        <div className='fixed top-16 left h-[calc(100vh-4rem)]  text-white '>
          <PredictorSideNavigationBar />
        </div>
        <div className='flex-1 ml-64 pl-4'>
          <main className='overflow-y-auto h-full'>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
