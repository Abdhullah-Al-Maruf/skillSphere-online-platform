// this is server component
import AllCourseList from "@/components/AllCourses/AllCourseList";
import Courses from "@/components/AllCourses/Courses";
import Skeleton from "@/components/ui/loader/Skeleton";
import { Suspense } from "react";

import RevealWrapper from "@/components/common/RevealWrapper";

const allCourseSection = () => {
  return (
    <RevealWrapper>
      <div className="text-center mt-10 mb-15">
        <h1 className=" text-3xl font-bold">Illuminate Your Future</h1>
        <p className="font-semibold text-amber-800">
          Access premium courses designed for ambitious professionals and
          lifelong learners.
        </p>
      </div>
      {/* <h1 className="mt-5 font-bold text-2xl text-gray-600">All Courses</h1> */}
      <Suspense fallback={<Skeleton count={6} />}>
        <AllCourseList></AllCourseList>
      </Suspense>
    </RevealWrapper>
  );
};

export default allCourseSection;
