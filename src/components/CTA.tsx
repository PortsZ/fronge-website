/* eslint-disable @next/next/no-img-element */
import { dextools } from '@/data/links'
import React from 'react'

const CTA = () => {
  return (
    <a 
    href={dextools}
    className="bg-[#81bddb] self-center flex flex-col justify-center items-center bg-opacity-35 backdrop-blur-xl rounded-xl 
    md:p-12 p-4 md:w-11/12 w-full
    
    before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-[-1] before:rounded-xl before:bg-[#041614] before:bg-opacity-35  before:transition-all before:duration-100 before:ease-in-out before:hover:bg-opacity-80 before:hover:backdrop-blur-[0px] before:hover:duration-300 before:hover:ease-in-out before:animate-pulse 
    ">
      <img src="/cta.png" alt=''/>
      <p className='w-full text-center font-logo text-xs'>click me!</p>
      
    </a>
  )
}

export default CTA