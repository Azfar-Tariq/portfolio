import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Fiverr = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Freelancer
        <a href="https://www.fiverr.com/">
          <span className="text-textGreen tracking-wide">@Fiverr</span>
        </a>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2023 - present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed responsive and dynamic web applications using React.js and
          Tailwind CSS for various clients, ensuring cross-device compatibility
          and optimal performance.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborated with clients to understand project requirements and
          deliver custom solutions, enhancing user experience and engagement
          through modern front-end technologies.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Implemented state management using Redux and integrated third-party
          APIs, delivering seamless functionality and scalability for client
          projects.
        </li>
      </ul>
    </motion.div>
  );
};

export default Fiverr;
