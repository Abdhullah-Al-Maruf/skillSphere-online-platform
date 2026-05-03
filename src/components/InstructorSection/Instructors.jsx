import { getInstructorData } from "@/utils/Getdata";
import InstructorCard from "../ui/Cards/InstructorCard";
import { Button } from "@heroui/react";



const Instructors = async() => {
    const instructors =await getInstructorData()
    console.log(instructors);
  return (
 <div className="mt-30">
    <div className="flex justify-between ">
    <h1 className=" mb-5 text-3xl font-bold text-gray-600">Top Instructors</h1>
          <Button
                variant="outline"
                className="border-2 border-amber-800 text-amber-800 font-bold"
              >
               
              Become an Instructor 
              </Button>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
{
    instructors.map(instructor=><InstructorCard key={instructor.id} instructor={instructor}/>)
}
    </div>

 </div>
  );
};

export default Instructors;