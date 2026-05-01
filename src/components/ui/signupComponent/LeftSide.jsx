"use client";

import { Thunderbolt } from "@gravity-ui/icons";
import { motion } from "framer-motion";
import { BiBadgeCheck } from "react-icons/bi";

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const LeftSide = () => {
  return (
    <motion.div
      className="max-w-xl space-y-6 md:mt-5 mb-8 lg:m-0"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Heading */}
      <motion.h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight" variants={item}>
        Start your journey to{" "}
        <span className="text-[#ff6b00]">mastery</span>.
      </motion.h1>

      {/* Description */}
      <motion.p className="text-orange-900" variants={item}>
        Join 50,000+ professionals building their future with curated skill
        paths and industry-recognized certifications.
      </motion.p>

      {/* Feature 1 */}
      <motion.div className="flex items-start gap-4" variants={item}>
        <div className="p-3 rounded-lg bg-orange-100 text-orange-600">
          <Thunderbolt className="w-5 h-5" />
        </div>
        <div>
          <p className="font-semibold text-gray-900">Personalized Learning</p>
          <p className="text-sm text-gray-600">
            AI-driven paths tailored to your goals.
          </p>
        </div>
      </motion.div>

      {/* Feature 2 */}
      <motion.div className="flex items-start gap-4" variants={item}>
        <div className="p-3 rounded-lg bg-yellow-100 text-yellow-600">
          <BiBadgeCheck className="w-5 h-5" />
        </div>
        <div>
          <p className="font-semibold text-gray-900">Verified Certificates</p>
          <p className="text-sm text-gray-600">
            Share your achievements globally.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LeftSide;