/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Socials from "./Socials";
import Contract from "./Contract";

const Footer = () => {
  return (
    <div>
      <footer className="flex flex-1 rounded-xl backdrop-blur-xl bg-opacity-70 bg-[#512da8] text-white p-4">
        <div className="flex gap-6 flex-col lg:flex-row w-full justify-between items-center">
          <div className="flex gap-8 justify-center lg:justify-start">
            <img src="/solanaLogo.png" alt="logo" className="w-36" />
          </div>
          <div className="w-full md:w-1/2 ">
            <Contract />
          </div>
          <div>
            <Socials />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
