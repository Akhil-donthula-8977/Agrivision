"use client"
import React from 'react'

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className="border-gray-300 h-12 w-12 animate-spin rounded-full border-8 border-t-blue-600" />
    </div>
  )
}

export default Loading