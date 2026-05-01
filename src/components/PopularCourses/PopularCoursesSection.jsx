// src/components/PopularCoursesSection.jsx
import React, { Suspense } from 'react';
import PopularCourseList from './PopularCourseList'; // Import the new async component
import PopularCourseSpinner from '../ui/loader/PopularCourseSpinner';
 // Import your skeleton/loader

const PopularCoursesSection = () => {
  return (
    <div>
      <h1 className="mt-20 mb-4 text-3xl font-bold">Popular Courses</h1>

     
      <Suspense fallback={<PopularCourseSpinner count={3} />}>
        <PopularCourseList />
      </Suspense>
    </div>
  );
};

export default PopularCoursesSection;