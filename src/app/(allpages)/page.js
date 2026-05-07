import Banner from "@/components/ui/Banner/Banner";
import Instructors from "@/components/InstructorSection/Instructors";
import LearningTips from "@/components/LearningTipsSection/LearningTips";
import PopularCoursesSection from "@/components/PopularCourses/PopularCoursesSection";
import ReadytoTransform from "@/components/ui/ReadytoTransformSection/ReadytoTransform";
import NewReleaseSection from "@/components/newReleaseSection/NewReleaseSection";
import RevealWrapper from "@/components/common/RevealWrapper";
import Loader from "@/components/common/Loader";

export default function Home() {
  return (
    <main>
      <Loader />
      <RevealWrapper>
        <Banner />
      </RevealWrapper>
      
      <RevealWrapper>
        <PopularCoursesSection />
      </RevealWrapper>
      
      <RevealWrapper>
        <NewReleaseSection />
      </RevealWrapper>
      
      <RevealWrapper>
        <LearningTips />
      </RevealWrapper>
      
      <RevealWrapper>
        <Instructors />
      </RevealWrapper>
      
      <RevealWrapper>
        <ReadytoTransform />
      </RevealWrapper>
    </main>
  );
}
