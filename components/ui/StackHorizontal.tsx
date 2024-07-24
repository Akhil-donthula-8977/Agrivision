"use client"
import { cn } from '@/lib/utils'
import clsx from 'clsx'
import React from 'react'
interface StackHorizontalProps{
    children:React.ReactNode,
    className?:string
}
const StackHorizontal = ({children,className}:StackHorizontalProps) => {
  return (
    <div className={cn("w-full flex ",className)}>
        {children}
    </div>
  )
}

export default StackHorizontal;