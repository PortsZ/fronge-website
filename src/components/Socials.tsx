"use client";
import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import Image from 'next/image'


const Socials = () => {
  return (
    <div className='z-30 flex gap-2'>
        <a href='https://twitter.com'><FaXTwitter className='text-3xl text-slate-900'/></a>
        <a><FaTelegram className='text-3xl text-slate-900'/></a>
        <a><img src='/dextools.svg' alt='dextools' className='w-20 drop-shadow-2xl bg-slate-900 rounded-xl p-1' /></a>
    </div>
  )
}

export default Socials