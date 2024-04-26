/* eslint-disable @next/next/no-img-element */
import React from "react";

const Hero = () => {
  return (
    <div className="w-full lg:flex-row flex flex-col justify-center items-center lg:gap-0 gap-10 ">
      <img
        src="/hero.png"
        alt="hero"
        className="
        lg:absolute lg:top-0 lg:left-0 lg:translate-x-[20vw] translate-y-1/2 w-full lg:w-3/5"
      />
      <div className="pt-10 lg:mt-0 p-8 w-full lg:w-1/2 bg-[#1a1f2e] bg-opacity-95 backdrop-blur-xl rounded-xl">
        <h1 className="xl:text-5xl text-xl font-bold text-[#81bddb] xl:p-10 p-6 text-balance">
          THE FUTURE OF FINANCE. FRONGE.
        </h1>
      </div>
      <div className="lg:w-1/2 hidden md:block"></div>
      <div className="p-8 w-full lg:w-1/2 bg-[#1a1f2e] bg-opacity-95 backdrop-blur-xl rounded-xl">
        <h1 className="xl:text-5xl lg:text-xl font-bold font-logo text-[#81bddb] p-6 xl:p-10 xl:leading-[3.5rem] md:leading-8 ">
          Get your <span className="uppercase text-[#fdac19]">$fronge</span>{" "}
          today and join the best finance advisor in SOLANA !
        </h1>
      </div>
    </div>
  );
};

export default Hero;
