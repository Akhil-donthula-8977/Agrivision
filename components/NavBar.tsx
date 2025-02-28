"use client"
import { cn } from '@/lib/utils';
import { nunito } from '@/lib/fontsCustom';
import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Image from 'next/image';
import logo from "@/public/AgriVisionLogojpg.jpg"
import { signOut } from "next-auth/react"
import { Button } from './ui/button';
const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home',url:"/predictors" },
   
  ];

  return (
    <div className={cn('bg-green-900 z-50 sticky top-0 w-full flex justify-between items-center h-[65px]  max-w-full mx-auto px-4 text-white',nunito.className)}>
     <Link href="/">
      <Image src={logo} width={60} height={60} alt='logo' className={cn('relative left-10 ')}></Image>
      </Link>
      {/* Desktop Navigation */}
      <ul className='hidden md:flex items-center'>
        {navItems.map(item => (
          <Link
            key={item.id}
            className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
            href={item.url}
          >
            {item.text}
          </Link>
        ))}
        <Button onClick={() => signOut()}>Signout</Button>
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Agrivision</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className={cn('p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600',nunito.className)}
          >
            {item.text}
          </li>
        ))}
        
      </ul>
    </div>
  );
};

export default Navbar;