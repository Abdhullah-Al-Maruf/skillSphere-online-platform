"use client"
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
    transition: {
      staggerChildren: 0.1,
    },
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
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-5 py-5">
      {/* LEFT SIDE */}
      <motion.div
        className="space-y-6 max-w-xl text-center lg:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Chip className="text-[#a04100] font-semibold bg-[#ffdbcc] w-fit mx-auto lg:mx-0">
            <CircleInfo width={14} />
            Illuminated Growth
          </Chip>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl lg:text-5xl font-semibold leading-tight"
        >
          Start your journey to <br />
          <span className="font-bold bg-linear-to-r from-[#ff6b00] to-[#a04100] bg-clip-text text-transparent">
            mastery
          </span>
          .
        </motion.h1>

        <motion.p variants={itemVariants} className="text-gray-600">
          Join 50,000+ professionals building their future with curated skill
          paths and industry-recognized certifications.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center lg:justify-start"
        >
          <Link href="/courses">
            <Button className="bg-linear-to-b from-[#ff6b00] to-[#a04100] text-white shadow-lg shadow-orange-500/40">
              Browse Course
            </Button>
          </Link>

          <Button
            variant="outline"
            className="border border-amber-800 text-amber-800 font-semibold"
          >
            <PlayFill />
            Watch Demo
          </Button>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        className="relative inline-block group"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      >
        {/* IMAGE */}
        <div className="transition-transform duration-500 ease-in-out group-hover:rotate-6">
          <Image
            src="/learning-illustration.png"
            alt="banner Img"
            width={700}
            height={700}
            className="object-contain block"
          />
        </div>

        {/* TOP RIGHT FLOAT BADGE */}
        <motion.div
          className="absolute top-1 right-2 z-20 md:top-4 md:right-4 lg:top-6 lg:right-6"
          variants={floatVariants}
          animate="animate"
        >
          <div className="bg-white flex items-center gap-3 shadow-xl p-3 rounded-md border border-orange-100">
            <TfiStatsUp className="text-2xl text-orange-500" />
            <div>
              <p className="font-semibold text-gray-800">92% Success Rate</p>
              <p className="text-sm text-[#8e7164]">Salary Increase</p>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM LEFT FLOAT BADGE */}
        <motion.div
          className="absolute bottom-4 left-2 z-20 md:bottom-20 md:left-4 lg:bottom-22 lg:left-6"
          variants={floatVariants}
          animate="animate"
          transition={{ delay: 1 }} // Offset for natural feel
        >
          <div className="bg-white flex items-center gap-3 shadow-xl p-3 rounded-md border border-orange-100">
            <TfiStatsUp className="text-2xl text-orange-500" />
            <div>
              <p className="font-semibold text-gray-800">92% Success Rate</p>
              <p className="text-sm text-[#8e7164]">Salary Increase</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;