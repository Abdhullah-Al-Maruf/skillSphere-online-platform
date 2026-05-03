



import { getData } from "@/utils/Getdata";
import Courses from "./Courses";


const AllCourseList =async () => {
    const data = await getData();
  
  return <Courses courses={data}/>;
};


export default AllCourseList;