import AllCourseList from "@/components/AllCourses/AllCourseList";
import Skeleton from "@/components/ui/loader/Skeleton";
import { Suspense } from "react";

const Courses = () => {
  return (
    <div>
      <h1 className="mt-5 font-bold text-3xl">All Courses</h1>
      <Suspense fallback={<Skeleton count={6} />}>
        <AllCourseList />
      </Suspense>
    </div>
  );
};

export default Courses;
