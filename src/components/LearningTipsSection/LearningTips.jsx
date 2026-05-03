"use client";


import TipsCard from "../ui/Cards/TipsCard";
import { Clock } from "@gravity-ui/icons";
import { LuBrain } from "react-icons/lu";
import { TfiTarget } from "react-icons/tfi";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Stagger delay between children
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const LearningTips = () => {
  return (
    <div className="mt-30 px-4 md:px-0">
      <motion.div
        className="text-center space-y-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Trigger when 30% visible
      >
        {/* Header Section */}
        <motion.div variants={itemVariants}>
          <h1 className="font-bold text-3xl text-gray-600">Learning Tips</h1>
        </motion.div>
        
        <motion.p
          variants={itemVariants}
          className="mb-15 text-[#5a4136] font-semibold max-w-2xl mx-auto"
        >
          Master the art of effective learning with these proven techniques.
        </motion.p>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          className="grid mb-10 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          <motion.div variants={itemVariants}>
            <TipsCard
              icon={<Clock />}
              title={"Time Management"}
              paragraph={
                "Learn how to block your calendar for deep work and manage energy levels throughout the day."
              }
              href={"https://www.coursera.org/articles/time-management?"}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <TipsCard
              icon={<LuBrain />}
              title={"Study Techniques "}
              paragraph={
                "Utilize active recall and spaced repetition to ensure long-term retention of complex concepts."
              }
              href={
                "https://www.ask-maeve.com/blog/most-effective-study-techniques/"
              }
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <TipsCard
              icon={<TfiTarget />}
              title={"Focus Skills"}
              paragraph={
                "Eliminate digital distractions and enter the Flow State faster with our environmental design tips.."
              }
              href={"https://blog.calm.com/blog/how-to-focus"}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LearningTips;