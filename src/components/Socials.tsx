/* eslint-disable @next/next/no-img-element */
"use client";
import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import Image from 'next/image'
import { dextools, telegram, twitter } from '@/data/links';


const Socials = () => {
  return (
    <div className='z-10 flex  gap-2'>
        <a href={twitter} target='_blank'><FaXTwitter className='text-3xl text-slate-900'/></a>
        <a href={telegram} target='_blank'><FaTelegram className='text-3xl text-slate-900'/></a>
        <a href={dextools} target='_blank'><img src='/dextools.svg' alt='dextools' className='w-20 drop-shadow-2xl bg-slate-900 rounded-xl p-1' /></a>
    </div>
  )
}

export default Socials