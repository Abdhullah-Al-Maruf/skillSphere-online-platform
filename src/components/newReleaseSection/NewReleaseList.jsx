import { getNewReleaseData } from "@/utils/Getdata";
import NewReleaseSection from "./NewReleaseSection";
import CourseCard from "../ui/Cards/CourseCard";
import NewReleaseCard from "../ui/Cards/NewReleaseCard";



const NewReleaseList =async () => {
    const releaseData =await getNewReleaseData()
    console.log("release data",releaseData);
    const allReleaseCourses=[...releaseData]
    console.log(allReleaseCourses);
  const sortedData=  allReleaseCourses.sort((a,b)=> new Date(a.addedDate)-new Date(b.addedDate))
    
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
           {sortedData.map(data=><NewReleaseCard key={data.id} data={data} />)} 
        </div>
    );
};

export default NewReleaseList;