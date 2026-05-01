"use client";

import Image from "next/image";
import { Button } from "@heroui/react";
import { Star } from "@gravity-ui/icons";


const CourseCard = ({data}) => {
    const {image, rating, category,price,instructor,description,InstructorImage}=data;
  return (
    <div className="max-w-sm rounded-3xl overflow-hidden border border-orange-200 bg-[#fff7f2] shadow-sm">
      
      {/* Image Section */}
      <div className="relative">
        <Image
          src={image}
          alt="course"
          width={500}
          height={300}
          className="w-full h-[220px] object-cover"
        />

        {/* Rating Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow text-sm font-medium">
          <Star size={14} className="text-yellow-500 fill-yellow-500" />
        {rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        
        {/* Category */}
        <p className="text-xs font-bold text-orange-600 tracking-wide">
         {category}
        </p>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 leading-snug">
        {description}
        </h2>

        {/* Instructor */}
        <div className="flex items-center gap-3">
          <Image
            src={InstructorImage}
            alt="instructor"
            width={40}
            height={40}
            className="rounded-full"
          />
          <p className="text-gray-600 font-medium">{instructor}</p>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between pt-2">
          <h3 className="text-2xl font-bold text-gray-900">{price}</h3>

          <Button
            variant="bordered"
            className="border-orange-500 text-orange-600 rounded-full px-5 py-2 hover:bg-orange-50"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;