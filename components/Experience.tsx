import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import Stella from "./works/Stella";
import Izoc from "./works/Izoc";
import Fiverr from "./works/Fiverr";

type WorkExperience = {
  id: string;
  label: string;
  component: React.ComponentType;
};

const workExperiences: WorkExperience[] = [
  { id: "stella", label: "Stella Technology", component: Stella },
  { id: "izoc", label: "Izoc Solutions", component: Izoc },
  { id: "fiverr", label: "Fiverr", component: Fiverr },
];

interface ExperienceButtonProps {
  id: string;
  label: string;
  activeWork: string;
  onClick: (id: string) => void;
}

const ExperienceButton: React.FC<ExperienceButtonProps> = ({
  id,
  label,
  activeWork,
  onClick,
}) => (
  <li
    onClick={() => onClick(id)}
    className={`
      border-l-2 bg-transparent hover:bg-[#112240] py-3 leading-normal cursor-pointer duration-300 px-8 font-medium
      ${
        activeWork === id
          ? "border-l-textGreen text-textGreen"
          : "border-l-hoverColor text-textDark"
      }
    `}
  >
    {label}
  </li>
);

const Experience: React.FC = () => {
  const [activeWork, setActiveWork] = useState<string>("stella");

  const ActiveWorkComponent = workExperiences.find(
    (work) => work.id === activeWork
  )?.component;

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          {workExperiences.map((work) => (
            <ExperienceButton
              key={work.id}
              id={work.id}
              label={work.label}
              activeWork={activeWork}
              onClick={setActiveWork}
            />
          ))}
        </ul>
        {ActiveWorkComponent && <ActiveWorkComponent />}
      </div>
    </section>
  );
};

export default Experience;
