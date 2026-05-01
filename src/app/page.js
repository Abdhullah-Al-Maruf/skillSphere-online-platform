import Banner from "@/components/Banner";
import Instructors from "@/components/InstructorSection/Instructors";
import LearningTips from "@/components/LearningTipsSection/LearningTips";
import PopularCoursesSection from "@/components/PopularCoursesSection";
import { Button } from "@heroui/react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <PopularCoursesSection/>
      <LearningTips/>
      <Instructors/>
    </div>
  );
}
