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
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Home: NextPage = (props) => {
  const endpoint = web3.clusterApiUrl("devnet");
  const wallets = useMemo(() => [], []);


  return (
    <div className="w-full flex flex-col justify-start items-center px-16 py-4 gap-6">
      <WalletContextProvider>
        <nav className="fixed z-10 w-full px-4">
          
            <AppBar />
          
        </nav>
        
        <section className="p-8 justify-between items-center flex h-[100vh]">
          <Hero/>
        </section>
        <section className="p-10 justify-between items-center flex h-[80vh]">
          <Frog className="relative w-[20rem] h-[34rem] left-20 object-contain overflow-hidden" />
          <About />
        </section>
        <section className="p-10 justify-between items-center flex h-[80vh]">
          <Tokenomics/>
        </section>
        <section className="p-10 justify-between items-center flex h-[80vh]">
          <Roadmap/>
          <Frog className="relative scale-x-[-1] w-[20rem] h-[34rem] object-contain overflow-hidden" />
        </section>
        <section className="p-10 justify-center items-center flex h-[50vh]">
        <CTA/>
        </section>
        <section className="w-full">
          <Footer/>
        </section>
      </WalletContextProvider>
    </div>
  );
};

export default Home;
