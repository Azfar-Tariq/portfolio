import { TiArrowForward } from 'react-icons/ti';
import { motion } from 'framer-motion';

const Izoc = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Web Developer
        <a href="https://izocsolutions.com/" target="_blank">
          <span className="text-textGreen tracking-wide">@IzocSolutions</span>
        </a>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        July 2024 - Sep 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Gained insights into user preferences and needs, enhancing website
          design and content to improve user engagement.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Added new products to the company&apos;s website, optimizing content
          for a streamlined browsing experience.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Improved website performance by optimizing images, resulting in a 20%
          reduction in load times across pages.
        </li>
      </ul>
    </motion.div>
  );
};

export default Izoc;
