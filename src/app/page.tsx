"use client";
import { motion } from "framer-motion";
import { NextPage } from "next";
import { useMemo } from "react";
import AppBar from "@/components/AppBar";
import PingButton from "@/components/PingButton";
import * as web3 from "@solana/web3.js";
import WalletContextProvider from "@/components/WalletContextProvider";
import Frog from "@/components/Frog";
import About from "@/components/About";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import CTA from "@/components/CTA";

const Home: NextPage = (props) => {
  const endpoint = web3.clusterApiUrl("devnet");
  const wallets = useMemo(() => [], []);

  return (
    <div className="w-full flex flex-col justify-start items-center px-16 py-4 gap-6">
      <WalletContextProvider>
        <section className="fixed z-10 w-full h-full px-4">
          <nav className="relative">
            <AppBar />
          </nav>
        </section>
        
        <section className="p-10 justify-between items-center flex h-[80vh]">
          Hero
        </section>
        <section className="p-10 justify-between items-center flex h-[80vh]">
          <Frog className="relative w-56 h-96 object-contain overflow-hidden" />
          <About />
        </section>
        <section className="p-10 justify-between items-center flex h-[80vh]">
          <Tokenomics/>
        </section>
        <section className="p-10 justify-between items-center flex h-[80vh]">
          <Frog className="relative w-56 h-96 object-contain overflow-hidden" />
          <Roadmap/>
        </section>
        <section className="p-10 justify-center items-center flex h-[50vh]">
        <CTA/>
        </section>
        <section className="p-10 justify-center items-center flex">
          Footer
        </section>
      </WalletContextProvider>
    </div>
  );
};

export default Home;
