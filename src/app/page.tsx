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
import Contract from "@/components/Contract";

const Home: NextPage = (props) => {
  const endpoint = web3.clusterApiUrl("devnet");
  const wallets = useMemo(() => [], []);

  return (
    <WalletContextProvider>
      <div className=" flex flex-col justify-center items-center p-2 md:px-16 py-4 gap-6">
        <section className="p-4 lg:p-8 justify-center items-center flex flex-col lg:h-[80vh]">
          <Hero />
        </section>
        <section className="w-full p-4 md:p-8 md:px-16 ">
          <Contract />
        </section>
        <section className="p-4 lg:p-10 md:justify-between items-center flex flex-col md:flex-row">
          <Frog
            className="
          w-48 
          md:relative md:w-1/3 md:h-96 lg:w-[20rem] lg:h-[34rem] lg:left-20 
          
          object-contain overflow-hidden"
          />
          <About />
        </section>
        <section className="p-4 md:p-10 justify-center items-center flex">
          <Tokenomics />
        </section>
        <section className="p-4 lg:p-10 justify-between items-center flex ">
          <Roadmap />
          <Frog
            className="
            hidden md:block scale-x-[-1] w-48
            md:relative md:w-[12rem] md:h-[20rem] lg:w-[20rem] lg:h-[34rem] lg:left-20 
            object-contain overflow-hidden"
          />
        </section>
        <section className="p-4 md:p-10 justify-center items-center flex ">
          <CTA />
        </section>
        <section className="w-full">
          <Footer />
        </section>
      </div>
    </WalletContextProvider>
  );
};

export default Home;
