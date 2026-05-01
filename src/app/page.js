import Banner from "@/components/Banner";
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
    </div>
  );
}
