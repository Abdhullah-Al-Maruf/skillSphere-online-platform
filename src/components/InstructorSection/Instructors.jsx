import { getInstructorData } from "@/utils/Getdata";
import InstructorCard from "../ui/InstructorCard";



const Instructors = async() => {
    const instructors =await getInstructorData()
    console.log(instructors);
  return (
 <div>
    <h1 className="text-3xl font-bold">Top Instructors</h1>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
{
    instructors.map(instructor=><InstructorCard key={instructor.id} instructor={instructor}/>)
}
    </div>

 </div>
  );
};

export default Instructors;