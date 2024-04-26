"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaRegCopy } from "react-icons/fa6";
import { contract } from "@/data/links";


const Contract = () => {
  
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
    <div className="rounded-xl bg-[#1a1f2e] p-4 py-8 flex flex-col items-center justify-center ">
      <motion.div
        whileHover={{ scale: 1.02, color: "#2cff79" }}
        onClick={handleCopyContract}
        className="flex items-center justify-center px-4 w-full"
      >
        <span className="truncate flex-1 font-logo text-white">CA: {contract}</span>
        <FaRegCopy className="ml-2 mb-1" />
      </motion.div>
      {copied && (
        <p className="absolute mt-12 text-xs text-green-500">
          Copied to clipboard! 🚀
        </p>
      )}
    </div>
  );
};

export default Contract;
