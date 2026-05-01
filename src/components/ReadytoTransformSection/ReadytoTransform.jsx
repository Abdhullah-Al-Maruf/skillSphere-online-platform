"use client";

import { ArrowChevronDown, ArrowChevronUp } from '@gravity-ui/icons';
import Link from 'next/link';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const ReadytoTransform = () => {
  return (
    <section className="w-full py-12 md:px-8">
      <motion.div 
        className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#a04100] via-[#d95c00] to-[#ff6b00] shadow-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        
        <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-16 md:py-20 text-center">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center w-full"
          >
            {/* Heading */}
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 font-manrope"
            >
              Ready to transform your career?
            </motion.h2>
            
            {/* Subheading */}
            <motion.p 
              variants={itemVariants}
              className="text-white/90 text-lg md:text-xl max-w-2xl mb-10 font-normal leading-relaxed"
            >
              Join 50,000+ professionals who are already mastering new skills on SkillSphere.
            </motion.p>

            {/* Button Group */}
            <motion.div 
              variants={itemVariants}
              className="flex gap-4 flex-col md:flex-row"
            >
              
              {/* Primary Action: Get Started Now -> Redirects to Register */}
              <Link href="/signup">
                <motion.button 
                  className="group relative flex items-center justify-center px-8 py-3.5 text-base font-bold text-[#a04100] bg-white rounded-full shadow-lg transition-all duration-300 hover:shadow-orange-500/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#a04100]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Now
                  {/* Simple arrow icon that moves on hover */}
                  <ArrowChevronUp className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"/>
                </motion.button>
              </Link>

              {/* Secondary Action: Corporate Training */}
              <motion.button 
                className="flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white border border-white/30 bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-white/20 hover:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Corporate Training
              </motion.button>
   
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ReadytoTransform;