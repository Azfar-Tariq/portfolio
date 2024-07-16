import { TbBrandGithub } from "react-icons/tb";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        <a href="https://github.com/noorjsdivs" target="_blank">
          <span className="w-10 h-10 text-xl font-bold bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-white hover:bg-black cursor-pointer transition-all duration-300">
            <TbBrandGithub />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/noor-mohammad-ab2245193/"
          target="_blank"
        >
          <span className="w-10 h-10 text-xl font-bold bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-white hover:bg-blue-700 cursor-pointer transition-all duration-300">
            <SlSocialLinkedin />
          </span>
        </a>
        <a href="https://www.facebook.com/Noorlalu143/" target="_blank">
          <span className="w-10 h-10 text-xl font-bold bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-white hover:bg-blue-500 cursor-pointer transition-all duration-300">
            <SlSocialFacebook />
          </span>
        </a>
        <a href="https://www.instagram.com/simplenoor143/" target="_blank">
          <span className="w-10 h-10 text-xl font-bold bg-hoverColor rounded-full inline-flex items-center justify-center transition-all duration-300 hover:text-white hover:bg-gradient-to-tr hover:from-purple-600 hover:via-red-600 hover:to-yellow-300 cursor-pointer">
            <SlSocialInstagram />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  );
};

export default LeftSide;
