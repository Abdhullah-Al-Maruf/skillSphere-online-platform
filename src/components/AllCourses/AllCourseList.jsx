
import { getData } from "@/utils/Getdata";
import CourseCard from "../ui/Cards/CourseCard";

const AllCourseList = async () => {
  const data = await getData();
  return (
    <div>
      <div className="grid mt-4 mb-20 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((data) => (
          <CourseCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default AllCourseList;
