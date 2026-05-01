"use client";

import { CircleInfo, PlayFill } from "@gravity-ui/icons";
import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { TfiStatsUp } from "react-icons/tfi";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const floatVariants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Banner = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 px-4 sm:px-6 lg:px-12  rounded-xl mt-5 bg-linear-to-r from-[#ff7a18] to-[#ff3d00]">
      {/* LEFT SIDE */}
      <motion.div
        className="space-y-4 max-w-xl text-center lg:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Chip className="text-[#a04100] font-semibold bg-[#ffdbcc] w-fit mx-auto lg:mx-0 text-sm">
            <CircleInfo width={14} />
            Illuminated Growth
          </Chip>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-white"
        >
          Start your journey to <br />
          <span className="font-bold">mastery</span>.
        </motion.h1>

        <motion.p variants={itemVariants} className="text-white/80 text-sm">
          Join 50,000+ professionals building their future with curated skill
          paths and industry-recognized certifications.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex gap-2 md:justify-center"
        >
          <Link href="/courses">
            <Button
              size="lg"
              className=" md:w-full sm:w-auto bg-linear-to-r from-[#ff8a00] to-[#ff3d00] text-white shadow-lg hover:scale-105 transition-transform"
            >
              Browse Course
            </Button>
          </Link>

          <Button
            size="lg"
            variant="outline"
            className="  mg:w-full sm:w-auto border border-white/70 text-white font-semibold hover:bg-white/10"
          >
            <PlayFill size={16} />
            Watch Demo
          </Button>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        className="relative w-full max-w-sm sm:max-w-md lg:max-w-md"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {/* IMAGE */}
        <Image
          src="/study-abroad.png"
          alt="banner Img"
          width={450}
          height={450}
          className="w-full h-auto object-contain"
          priority
        />

        {/* TOP BADGE */}
        <motion.div
          className="absolute top-1 right-1 sm:top-2 sm:right-2"
          variants={floatVariants}
          animate="animate"
        >
          <div className="bg-white flex items-center gap-2 shadow-xl p-1.5 sm:p-2 rounded-md border border-orange-100">
            <TfiStatsUp className="text-base sm:text-xl text-orange-500" />
            <div className="text-xs">
              <p className="font-semibold text-gray-800">92% Success Rate</p>
              <p className="text-[#8e7164] text-[10px] sm:text-xs">
                Salary Increase
              </p>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM BADGE */}
        <motion.div
          className="absolute bottom-1 left-1 sm:bottom-3 sm:left-3"
          variants={floatVariants}
          animate="animate"
          transition={{ delay: 1 }}
        >
          <div className="bg-white flex items-center gap-2 shadow-xl p-1.5 sm:p-2 rounded-md border border-orange-100">
            <CircleInfo width={16} className="text-orange-500" />
            <div className="text-xs">
              <p className="font-semibold text-gray-800">50K+ Active</p>
              <p className="text-[#8e7164] text-[10px] sm:text-xs">
                Happy Learners
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;
