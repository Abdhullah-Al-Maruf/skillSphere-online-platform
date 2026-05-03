import { Card } from "@heroui/react";
import Image from "next/image";
const InstructorCard = ({ instructor }) => {
  return (
    <div>
      <Card
        className=" bg-white border-1 border-default-200 shadow-sm hover:shadow-lg transition-all duration-300 py-8 items-center justify-center rounded-xl"
        radius="lg"
      >
        <Card.Content className="items-center justify-center gap-4 overflow-visible">
          {/* Avatar Section - Centered with a subtle glow/border */}
          <div className="relative group">
            <Image
              src={instructor?.image}
              alt={instructor?.name}
              width={100}
              height={100}
              sizes="(max-width: 768px) 96px, 100px"
              className="w-24 h-24 rounded-full object-cover border-3 border-orange-100 shadow-xl"
              priority={false}
            />

            {/* Optional: Verified Badge overlapping the avatar */}
            <div className="absolute bottom-0 right-0 bg-orange-500 text-white p-1 rounded-full border-2 border-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.498 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center space-y-1">
            <h3 className="font-bold text-xl text-default-900 font-manrope tracking-tight">
              {instructor.name}
            </h3>

            <p className="text-xs font-extrabold text-orange-600 uppercase tracking-widest font-manrope">
              {instructor.role}
            </p>

            <p className="text-sm text-default-500 font-normal leading-relaxed max-w-[260px] mx-auto mt-2 font-manrope">
              {instructor.description}
            </p>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default InstructorCard;
