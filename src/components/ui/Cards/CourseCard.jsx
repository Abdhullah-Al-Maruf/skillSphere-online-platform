"use client";

import Image from "next/image";
import { Button } from "@heroui/react";
import { Star } from "@gravity-ui/icons";
import { motion } from "framer-motion";
import Link from "next/link";

const CourseCard = ({ data }) => {
  const {
    image,
    rating,
    category,
    title,
    price,
    instructor,
    description,
    InstructorImage,
  } = data;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="rounded-3xl overflow-hidden border border-orange-200 bg-[#fff7f2] shadow-sm cursor-pointer"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.4 }}>
          <Image
            src={image}
            alt="course"
            width={500}
            height={300}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
            className="w-full h-[220px] object-cover"
          />
        </motion.div>

        {/* Rating Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow text-sm font-medium">
          <Star size={14} className="text-yellow-500 fill-yellow-500" />
          {rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <p className="text-xs font-bold text-orange-600 tracking-wide">
          {category}
        </p>

        <h2 className="text-2xl font-bold text-gray-800 leading-snug">
          {title}
        </h2>

        <h2 className="text-small font-bold text-gray-800 leading-snug">
          {description}
        </h2>

        {/* Instructor */}
        <div className="relative group">
          <div className="flex items-center gap-3 font-semibold text-gray-600">
            <Image
              src={InstructorImage}
              alt="instructor image"
              width={50}
              height={50}
              className="w-12 h-12 rounded-full object-cover border-2 border-orange-100 shadow-md"
            />
            <p>{instructor}</p>
          </div>

          {/* Verified Badge */}
          <div className="absolute bottom-0 left-8 bg-orange-500 text-white p-1 rounded-full border-2 border-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.498 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between pt-2">
          <h3 className="text-2xl font-bold text-gray-900">{price}</h3>

          <motion.div whileTap={{ scale: 0.95 }}>
            <Link href={`/courses/${data.id}`}>
            <Button
              variant="bordered"
              className="border border-orange-500 text-orange-600 rounded-full px-5 py-2 hover:bg-orange-50"
            >
              View Details
            </Button>
            </Link>
            
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;