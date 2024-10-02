// import {
//   fypImage,
//   gftImage,
//   chirpifyImage,
//   airNewsImage,
// } from "@/public/assets";
import Image from "next/image";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" />
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        {/* ============ project main start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/Azfar-Tariq/fyp"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src="/public/assets/images/fypImage.png"
                alt="fypImage"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">
                IoT Based Electricity Conservation System
              </h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
              For my final year project, I developed an IoT-based Electricity
              Conservation System, designed to optimize energy usage and promote
              efficient electricity management.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>React JS</li>
              <li>SQL</li>
              <li>OpenCV</li>
              <li>Yolov5</li>
              <li>Raspberry Pi</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Azfar-Tariq/fyp"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project main end here ================ */}
        {/* ============ project One Start here ================ */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://goat-trading-arena.vercel.app"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src="/public/assets/images/gft_main.png"
                alt="gftImage"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Goat Funded Trader</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              Recreated a website similar to goatfundedtrader.com for a client,
              using{" "}
              <span className="text-textGreen">React and Tailwind CSS</span> to
              deliver a responsive and user-friendly trading platform.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>React JS</li>
              <li>Tailwind CSS</li>
              <li>Vercel Deployment</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Azfar-Tariq/goat-trading-arena"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://goat-trading-arena.vercel.app"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://social-media-app-omega-sandy.vercel.app/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src="/public/assets/images/chirpifyImage.png"
                alt="chirpifyImage"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Chirpify</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
              Developed a basic social media app using{" "}
              <span className="text-textGreen">
                Next.js, TypeScript, NextAuth, and MongoDB,
              </span>{" "}
              allowing users to post, like, comment, and follow each other.{" "}
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Next</li>
              <li>Typescript</li>
              <li>Next Auth</li>
              <li>MongoDB</li>
              <li>Vercel Deployment</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Azfar-Tariq/social-media-app"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://social-media-app-omega-sandy.vercel.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://air-news-swart.vercel.app/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src="/public/assets/images/airnewsImage.png"
                alt="airNewsImage"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Air News</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
              built a website using React and Tailwind, featuring various
              categories for users to explore, with news articles linked for
              further reading.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>React JS</li>
              <li>Tailwind CSS</li>
              <li>Vercel Deployment</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Azfar-Tariq/Air-News"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://air-news-swart.vercel.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Three End here ================== */}
      </div>
    </section>
  );
};

export default Projects;
