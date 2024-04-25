import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="w-full rounded-xl backdrop-blur-xl bg-opacity-70 bg-[#512da8] text-white p-4">
        <div className="flex justify-between items-center">
          <div className='flex gap-8'>
            <img src="/solanaLogo.png" alt="logo" className="w-36" />
            
          </div>
          <div>
            <p>CA:SALDJFKNASDIUFNFJDISFOJSI</p>
          </div>
          <div>
            <p>socials</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer