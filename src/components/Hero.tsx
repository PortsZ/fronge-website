import React from "react";

const Hero = () => {
  return (
    <div className="w-full flex justify-center items-center">
        <img src="/hero.png" className="absolute top-0 left-0 translate-x-[20vw] translate-y-1/2  w-3/5"/>
      <div className="p-8 w-1/2 bg-[#1a1f2e] bg-opacity-95 backdrop-blur-xl rounded-xl">
        <h1 className="text-5xl font-bold text-[#81bddb] p-10 text-balance">
          THE FUTURE OF FINANCE. FRONGE.
        </h1>

      </div>
      <div className=" w-1/2">
      </div>
      <div className="p-8 w-1/2 bg-[#1a1f2e] bg-opacity-95 backdrop-blur-xl rounded-xl">
        <h1 className="text-5xl font-bold font-logo text-[#81bddb] p-10 leading-[3.5rem] ">
          Get your <span className="uppercase text-[#fdac19]">$fronge</span> today and join the best finance advisor in SOLANA !
        </h1>

      </div>
    </div>
  );
};

export default Hero;
