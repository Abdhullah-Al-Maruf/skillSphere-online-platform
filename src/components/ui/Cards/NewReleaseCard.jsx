"use client";

import Image from "next/image";
import { Chip } from "@heroui/react";

import { motion } from "framer-motion";
import { Star } from "@gravity-ui/icons";
import { FaFire } from "react-icons/fa";
import { MdOutlineWorkspacePremium } from "react-icons/md";

const NewReleaseCard = ({ data }) => {
  const {
    image,
    rating,
    category,
    addedDate,
    title,
    level,
    enrollments,
    instructor,
    instructorImage,
  } = data;

  // Format date: "2025-04-28" → "Apr 28"
  const formattedDate = addedDate
    ? new Date(addedDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })
    : "";

  // Format enrollments: 12500 → "12.5k"
  const formattedEnrollments =
    enrollments >= 1000 ? `${(enrollments / 1000).toFixed(1)}k` : enrollments;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="group relative rounded-2xl overflow-hidden bg-white border border-orange-100 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-300"
    >
    
      <div className="absolute top-0 left-0 z-10">
        <div className="bg-linear-to-r flex  items-center  from-orange-500 to-orange-600 text-white text-sm font-bold px-3 py-1.5 rounded-br-lg shadow-sm">
          < MdOutlineWorkspacePremium /> NEW
        </div>
      </div>

      {/* Image Section */}
      <div className="relative aspect-video overflow-hidden bg-orange-50">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full h-full"
        >
          <Image
            src={image}
            alt={title}
          width={500}
          height={500}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority={false}
          />
        </motion.div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-md text-xs font-semibold">
          <Star size={12} className="text-amber-500 fill-amber-500" />
          <span className="text-gray-800">{rating}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 space-y-4">
        {/* Category + Level Tags */}
        <div className="flex items-center gap-2">
          <Chip
            size="sm"
            variant="flat"
            className="bg-orange-50 text-orange-700 font-medium text-[11px] px-2 py-0.5"
          >
            {category}
          </Chip>
          <Chip
            size="sm"
            variant="bordered"
            className="border-orange-200 text-orange-600 font-medium text-[11px] px-2 py-0.5"
          >
            {level}
          </Chip>
        </div>

        {/* Title */}
        <h3 className="font-bold text-gray-900 text-base leading-snug line-clamp-2 group-hover:text-orange-600 transition-colors">
          {title}
        </h3>

        {/* Instructor */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Image
              src={instructorImage}
              alt={`${instructor} avatar`}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
            />
            {/* Verified Badge */}
            <div className="absolute -bottom-0.5 -right-0.5 bg-orange-500 text-white p-0.5 rounded-full border-2 border-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3 h-3"
              >
                <path
                  fillRule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.498 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <span className="text-sm font-medium text-gray-700 truncate max-w-[140px]">
            {instructor}
          </span>
        </div>

        {/* Stats + CTA */}
        <div className="flex items-center justify-between pt-2 border-t border-orange-100">
          <div className="flex items-center gap-1.5 text-sm">
            <FaFire size={14} className="text-orange-500" />
            <span className="font-semibold text-gray-900">
              {formattedEnrollments}
            </span>
            <span className="text-gray-500 text-xs">enrolled</span>
          </div>

          <motion.div whileTap={{ scale: 0.98 }}>
            <Chip
              size="sm"
              className="bg-orange-100 text-orange-700 font-semibold text-xs cursor-pointer hover:bg-orange-200 transition-colors"
            >
              {formattedDate}
            </Chip>
          </motion.div>
        </div>

        {/* View Details Button (Hidden by default, shows on hover) */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="pt-1"
        >
          <button className="w-full py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2">
            View Details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </div>

      {/* Subtle Orange Bottom Border Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-orange-400 via-orange-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.article>
  );
};

export default NewReleaseCard;