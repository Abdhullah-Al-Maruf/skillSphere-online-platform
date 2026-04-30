import { getData } from '@/Data/Getdata';
import React from 'react';

const Courses =async () => {
const data= await getData()

    return (
        <div>
       all Courses
       {data.map(d=><li key={d.id}> {d.category}</li>)}
        </div>
    );
};

export default Courses;