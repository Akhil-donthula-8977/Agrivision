"use client"
import React from 'react'
import FileDropUpload from '@/components/customFormComponents/FileDropUpload'
import { useSession, SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/navigation';
const page = async () => {
  const { data: session, status } = useSession()
  const router=useRouter();
  if (status === "unauthenticated") {
    router.replace("/")
  }
 
  console.log(session)
  return (
    <div>
        <FileDropUpload></FileDropUpload>
    </div>
  )
}

export default page