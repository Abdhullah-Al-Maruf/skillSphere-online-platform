import { getData } from '@/Data/Getdata';
import React from 'react';

const PopularCoursesSection =async () => {
    const data =await getData()
    const firstThree=data.slice(0,4)
    console.log(firstThree);
    return (
        <div>
      
             <h1 className='text-3xl font-bold '>Popular Courses</h1>
      {firstThree.map(p=> <li key={p.id}> {p.title}</li>)}
        </div>
    );
};

export default PopularCoursesSection;