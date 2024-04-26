"use client";
import React from 'react'

const Frog = ({className}:any) => {
  return (
    <div className={className}>
        <img className="md:absolute w-full -z-10 object-cover" alt='frogo' src='/frog.png'/>
    </div>
  )
}

export default Frog