import { getData } from '@/utils/Getdata';
import React from 'react';
import CourseCard from '../ui/CourseCard';

const PopularCourseList =async () => {
    const data =await getData()
    const firstThree=data.slice(0,3)
    console.log(firstThree);
    return (
        <div >
             <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>

      {firstThree.map(data=> <CourseCard key={data.id} data={data}/>)}
             </div>
        </div>
    );
};

export default PopularCourseList;