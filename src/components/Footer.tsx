"use client";
import { motion } from "framer-motion";
import React, {useEffect, useState} from "react";
import Socials from "./Socials";

const Footer = () => {
  const contract = "SALDJFKNASDIUFNFJDISFOJSI";
  const [copied, setCopied] = useState(false);

  const handleCopyContract = () => {
    navigator.clipboard.writeText(contract);
    
    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [copied]);

  return (
    <div>
      <footer className="w-full rounded-xl backdrop-blur-xl bg-opacity-70 bg-[#512da8] text-white p-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-8 ">
            <img src="/solanaLogo.png" alt="logo" className="w-36" />
          </div>
          <div>
            <motion.p
              whileHover={{ scale: 1.1, color: "#060b17" }}
              onClick={handleCopyContract}
            >
              <span className="pointer-events-none">CA : {contract}</span>
              
                
            </motion.p>
            {copied && (
              <span className="absolute font-logo text-xs text-green-500">
                Copied to clipboard! 🚀
              </span>
            )}
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
