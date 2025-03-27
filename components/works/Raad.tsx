import { TiArrowForward } from 'react-icons/ti';
import { motion } from 'framer-motion';

const RaadTech = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Front End Web Developer
        <a href="http://www.raad.com.pk/index.html">
          <span className="text-textGreen tracking-wide">
            @RaadTechnologies
          </span>
        </a>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2025 - Current
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed and maintained enterprise resource planning (ERP) systems
          using Angular, ensuring scalability and performance.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Upgraded existing ERP applications from older Angular versions to the
          latest, enhancing security, performance, and maintainability.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Optimized ERP UI for responsiveness, accessibility, and seamless
          backend integration.
        </li>
      </ul>
    </motion.div>
  );
};

export default RaadTech;
