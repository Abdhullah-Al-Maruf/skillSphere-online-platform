"use client";

import { use, useEffect, useState } from "react";
import { getData } from "@/utils/Getdata";

import CoursePage from "@/components/ui/CoursePage";

const DetailsPage = ({ params }) => {
  const { id } = use(params);
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await getData();
      const found = data.find((i) => i.id == Number(id));
      setCourse(found);
    };

    loadData();
  }, [id]);

  return (
    <div>
      <CoursePage course={course} />
    </div>
  );
};

export default DetailsPage;
