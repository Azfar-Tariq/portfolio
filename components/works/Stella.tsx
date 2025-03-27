import { TiArrowForward } from 'react-icons/ti';
import { motion } from 'framer-motion';

const Stella = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Front End Web Developer
        <a href="https://www.stellatechnology.com/" target="_blank">
          <span className="text-textGreen tracking-wide">
            @StellaTechnology
          </span>
        </a>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jul 2023 - Sep 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed a responsive user interface design using React.js and Redux
          for a healthcare system.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Enhanced accessibility and usability across various devices and screen
          sizes. Improved customer engagement and overall user experience.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Implemented seamless integration of responsive design principles with
          React.js frameworks.
        </li>
      </ul>
    </motion.div>
  );
};

export default Stella;
