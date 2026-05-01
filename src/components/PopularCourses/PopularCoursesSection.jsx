import { getData } from '@/utils/Getdata';
import React from 'react';
import CourseCard from '../ui/CourseCard';

const PopularCoursesSection =async () => {
    const data =await getData()
    const firstThree=data.slice(0,4)
    console.log(firstThree);
    return (
        <div>
      
             <h1 className='text-3xl font-bold '>Popular Courses</h1>
      {firstThree.map(data=> <CourseCard key={data.id} data={data}/>)}
        </div>
    );
};

export default PopularCoursesSection;