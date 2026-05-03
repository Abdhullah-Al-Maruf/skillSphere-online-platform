// this is for all courses
export const getData=async()=>{
    const res= await fetch("https://skill-sphere-online-platform.vercel.app/data.json")
    const data= await res.json();
    return data
 
}
// instructor data fetch
export const getInstructorData=async()=>{
    const res= await fetch("https://skill-sphere-online-platform.vercel.app/instructor.json")
    const data= await res.json();
    return data
 
}
export const getNewReleaseData=async()=>{
    const res= await fetch("https://skill-sphere-online-platform.vercel.app/newrelase.json")
    const data= await res.json();
    return data
 
}
