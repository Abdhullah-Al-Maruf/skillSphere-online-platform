import { Chip } from "@heroui/react";
import { div } from "framer-motion/client";
import Image from "next/image";
import React from "react";
import { FaFire } from "react-icons/fa";
import Spinner from "../loader/Spinner";

const CourseDetailsCard = ({ course }) => {
  if (!course)
    return (
      <div className="flex justify-center items-center h-48">
        <Spinner />
      </div>
    );
  const { title, image,badges,level } = course;
  return (
    <div>
      <div className="relative w-full h-[300px] mt-10">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-xl"
          priority
        />
       <Chip className="absolute bottom-2 left-2 flex items-center bg-amber-600 text-white"><FaFire/> {badges}</Chip>
       <Chip color="warning"  className="absolute left-36 bottom-2">{level}</Chip>

      </div>

      <p>Title: {title}</p>
    </div>
  );
};

export default CourseDetailsCard;
