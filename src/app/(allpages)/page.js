import Banner from "@/components/ui/Banner/Banner";
import Instructors from "@/components/InstructorSection/Instructors";
import LearningTips from "@/components/LearningTipsSection/LearningTips";
import PopularCoursesSection from "@/components/PopularCourses/PopularCoursesSection";
import ReadytoTransform from "@/components/ReadytoTransformSection/ReadytoTransform";
import { Button } from "@heroui/react";
import Image from "next/image";
import NewReleaseSection from "@/components/newReleaseSection/NewReleaseSection";
import NewReleaseList from "@/components/newReleaseSection/NewReleaseList";

export default function Home() {
  return (
    <div>
      <Banner/>
      <PopularCoursesSection/>
      <NewReleaseSection/>
   
      <LearningTips/>
      <Instructors/>
      <ReadytoTransform/>
    </div>
  );
}
