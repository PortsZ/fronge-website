"use client";
import React from "react";
import PingButton from "./PingButton";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Socials from "./Socials";

const AppBar = () => {
  return (
    <div className="z-20 w-full flex flex-col md:flex-row justify-between items-center py-2 backdrop-blur-xl md:p-4 bg-slate-300 bg-opacity-25 rounded-xl drop-shadow-xl gap-10">
      <h1 className=" font-bold text-black lg:text-5xl text-2xl font-logo">Fronge</h1>
      <div className="flex gap-6">
      {/* <PingButton />
      <WalletMultiButton /> */}
      <Socials />
      </div>
    </div>
  );
};

export default AppBar;
