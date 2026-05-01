import CourseCard from '@/components/ui/CourseCard';
import { getData } from '@/utils/Getdata';
import React from 'react';

const Courses =async () => {
const data= await getData()

    return (
        <div>
       <h1 className='mt-5 font-bold text-3xl'>All Courses</h1>
       <div className='grid mt-4 mb-20 md:grid-cols-2 lg:grid-cols-3 gap-5'>

       {data.map(data=> <CourseCard key={data.id } data={data}/>)}
       </div>
        </div>
    );
};

export default Courses;