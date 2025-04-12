import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiAngular,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPostman,
  SiFigma,
  SiVisualstudiocode,
} from "react-icons/si";

const skills = [
  {
    name: "HTML",
    category: "Frontend",
    icon: <FaHtml5 className="text-[#E34F26]" />,
  },
  {
    name: "CSS",
    category: "Frontend",
    icon: <FaCss3Alt className="text-[#1572B6]" />,
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: <FaJs className="text-[#F7DF1E]" />,
  },
  {
    name: "React",
    category: "Frontend",
    icon: <FaReact className="text-[#61DAFB]" />,
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: <SiNextdotjs className="text-white" />,
  },
  {
    name: "Angular",
    category: "Frontend",
    icon: <SiAngular className="text-[#DD0031]" />,
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: <SiTailwindcss className="text-[#38B2AC]" />,
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    icon: <FaBootstrap className="text-[#7952B3]" />,
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: <FaNodeJs className="text-[#339933]" />,
  },
  {
    name: "Express",
    category: "Backend",
    icon: <SiExpress className="text-white" />,
  },
  {
    name: "SQL",
    category: "Database",
    icon: <SiPostgresql className="text-[#4169E1]" />,
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: <SiMongodb className="text-[#47A248]" />,
  },
  {
    name: "Postman",
    category: "Tools",
    icon: <SiPostman className="text-[#FF6C37]" />,
  },
  {
    name: "Figma",
    category: "Tools",
    icon: <SiFigma className="text-[#F24E1E]" />,
  },
  {
    name: "GitHub",
    category: "Tools",
    icon: <FaGithub className="text-white" />,
  },
  {
    name: "VS Code",
    category: "Tools",
    icon: <SiVisualstudiocode className="text-[#007ACC]" />,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="My Skills" />
      <div className="w-full mt-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="w-full h-30 bg-[#112240] rounded-lg p-4 flex flex-col justify-center items-center gap-2 hover:bg-[#1d3a5c] transition-colors duration-300">
                <div className="text-3xl mb-1 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <span className="text-textGreen text-sm -mb-2 font-medium">
                  {skill.category}
                </span>
                <h3 className="text-lg font-semibold text-textLight group-hover:text-textGreen transition-colors duration-300">
                  {skill.name}
                </h3>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-textGreen/20 group-hover:bg-textGreen transition-colors duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
