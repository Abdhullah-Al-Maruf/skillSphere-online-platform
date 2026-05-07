"use client";

import { motion } from "framer-motion";

export default function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <div className="relative w-16 h-16">
        {/* Outer ring */}
        <motion.div
          className="absolute inset-0 border-4 border-amber-200 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        {/* Inner animated ring */}
        <motion.div
          className="absolute inset-0 border-4 border-t-amber-600 border-r-transparent border-b-transparent border-l-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        {/* Center dot */}
        <div className="absolute inset-[40%] bg-amber-800 rounded-full shadow-[0_0_10px_rgba(120,53,15,0.3)]"></div>
      </div>
      <p className="mt-4 text-amber-900/60 font-bold text-sm tracking-widest uppercase animate-pulse">
        Loading...
      </p>
    </div>
  );
}
