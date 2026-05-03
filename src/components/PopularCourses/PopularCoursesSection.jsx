// src/components/PopularCoursesSection.jsx
import React, { Suspense } from 'react';
import PopularCourseList from './PopularCourseList'; // Import the new async component

import Link from 'next/link';
import { Button } from '@heroui/react';
import { ArrowChevronRight } from '@gravity-ui/icons';
import Skeleton from '../ui/loader/Skeleton';
 // Import your skeleton/loader

const PopularCoursesSection = () => {
  return (
    <div>
      <div className='flex justify-between mt-20 mb-4  '>
      <h1 className="text-3xl font-bold text-gray-600">Popular Courses</h1>
       <Link href="/courses">
            <Button
              size="small"
              variant='outline'
              className=" md:w-full sm:w-auto border-2 border-amber-400   text-amber-700 shadow-lg hover:scale-105 transition-transform"
            >
              View All <ArrowChevronRight/>
            </Button>
          </Link>
      </div>

     
      <Suspense fallback={<Skeleton count={3} />}>
        <PopularCourseList />
      </Suspense>
    </div>
  );
};

export default PopularCoursesSection;