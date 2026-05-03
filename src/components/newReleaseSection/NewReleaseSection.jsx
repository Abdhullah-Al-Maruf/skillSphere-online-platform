import React, { Suspense } from 'react';
import NewReleaseList from './NewReleaseList';

import Skeleton from '../ui/loader/Skeleton';
const NewReleaseSection = () => {
  
    return (
        <div>
            <h1 className='text-3xl mt-10 mb-5 font-bold text-gray-600'>New Released Courses</h1>
            <div>
            <Suspense fallback={<Skeleton count={3}/>}>
                <NewReleaseList></NewReleaseList>
            </Suspense>

            </div>
        </div>
    );
};

export default NewReleaseSection;