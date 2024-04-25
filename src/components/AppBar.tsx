"use client";
import React from "react";
import PingButton from "./PingButton";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Socials from "./Socials";

const AppBar = () => {
  return (
    <div className="z-20 w-full flex justify-between items-center py-2 backdrop-blur-xl p-4 bg-slate-300 bg-opacity-25 rounded-xl drop-shadow-xl">
      <h1 className=" font-bold text-black text-5xl font-logo">Fronge</h1>
      <div className="flex gap-6">
      {/* <PingButton />
      <WalletMultiButton /> */}
      <Socials />
      </div>
    </div>
  );
};

export default AppBar;
