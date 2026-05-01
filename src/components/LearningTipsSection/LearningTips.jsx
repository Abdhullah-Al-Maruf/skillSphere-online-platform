import { GiBrainTentacle } from "react-icons/gi";
import TipsCard from "../ui/TipsCard";
import { Clock } from "@gravity-ui/icons";
import { LuBrain } from "react-icons/lu";
import { TfiTarget } from "react-icons/tfi";

const LearningTips = () => {
  return (
    <div className="mt-30">
      <div className="text-center space-y-4 ">
        <h1 className="font-bold text-3xl">Learning Tips</h1>
        <p className="mb-15 text-[#5a4136]  font-semibold">
          Master the art of effective learning with these proven techniques.
        </p>

        <div className="grid mb-10 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 ">
          <TipsCard
            icon={<Clock />}
            title={"Time Management"}
            paragraph={
              "Learn how to block your calendar for deep work and manage energy levels throughout the day."
            }
            href={"https://www.coursera.org/articles/time-management?"}
          />
          <TipsCard
            icon={<LuBrain />}
            title={"Study Techniques "}
            paragraph={
              "Utilize active recall and spaced repetition to ensure long-term retention of complex concepts."
            }
            href={
              "https://www.ask-maeve.com/blog/most-effective-study-techniques/"
            }
          />
          <TipsCard
            icon={<TfiTarget />}
            title={"Focus Skills"}
            paragraph={
              "Eliminate digital distractions and enter the Flow State faster with our environmental design tips.."
            }
            href={"https://blog.calm.com/blog/how-to-focus"}
          />
        </div>
      </div>
    </div>
  );
};

export default LearningTips;
