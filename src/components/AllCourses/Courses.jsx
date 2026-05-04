"use client";

import { useState } from "react";
import CourseCard from "../ui/Cards/CourseCard";
import { Button } from "@heroui/react";

export default function Courses({ courses }) {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter courses based on search query
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="">
      {/* Search Input */}
      <div className="w-full max-w-4xl mx-auto  relative flex items-center bg-white rounded-full border border-gray-200 shadow-sm">
        <svg
          className="w-5 h-5 text-gray-400 ml-6 mr-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="search by course title"
          className="flex-1 py-4 px-2 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
        />

        <Button size="lg" className=" hidden sm:block sm:mx-2 py-2 px-2 md:mx-2 md:px-8 md:py-2.5 bg-linear-to-r from-[#ff8a00] to-[#ff3d00] transition-color cursor-pointer text-white font-medium rounded-full">
          Find Course
        </Button>
      </div>

      {/* Render Filtered Results */}
      {filteredCourses.length === 0 ? (
        <p className="text-gray-500 text-center mt-4">No courses found</p>
      ) : (
        <div className="grid mt-4 mb-20 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCourses.map((data) => (
            <CourseCard key={data.id} data={data} />
          ))}
        </div>
      )}
    </div>
  );
}
