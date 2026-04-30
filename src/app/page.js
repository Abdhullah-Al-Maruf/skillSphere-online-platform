import Banner from "@/components/Banner";
import PopularCoursesSection from "@/components/PopularCoursesSection";
import { Button } from "@heroui/react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <PopularCoursesSection/>
    </div>
  );
}
