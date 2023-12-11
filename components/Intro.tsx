"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import Link from "next/link";
import AvatarImg from "@/public/Noman_Avatar.jpeg";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

const Intro = () => {
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  const { setActiveSection } = useActiveSectionContext();
  useEffect(() => {
    if (inView) {
      setActiveSection("Home");
    }
  }, [inView]);
  const [useFallback, setUseFallback] = React.useState(false);

  const handleImageError = () => {
    setUseFallback(true);
  };
  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              // src={"https://avatars.githubusercontent.com/u/74728455?v=4"}
              src={
                useFallback
                  ? AvatarImg
                  : "https://avatars.githubusercontent.com/u/74728455?v=4"
              }
              alt="avatar_logo"
              width={"192"}
              height={"192"}
              quality={"95"}
              priority={true}
              className="h-24 w-24 rounded-full border-white border-[0.35rem] object-cover shadow-xl"
              onError={handleImageError}
            />
          </motion.div>
          <motion.span
            className="absolute text-2xl bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              delay: 0.2,
              duration: 0.7,
              stiffness: 125,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Shaikh Noman.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">2 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">MERN stack and (Next.js)</span>.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href={"#contact"}
          className="group px-7 py-3 bg-gray-900 text-white flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-80 group-hover:translate-x-1 transition" />{" "}
        </Link>
        <a
          className="group px-7 py-3 bg-white flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border-black/10"
          href="/CV.pdf"
          download
        >
          Downlaod CV{" "}
          <HiDownload className="group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/shaikh-mohd-noman-769917215/"
          target="_blank"
          className="p-4 bg-white flex items-center gap-2 rounded-full text-gray-700 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border-black/10"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/noman318"
          target="_blank"
          className="p-4 bg-white flex items-center gap-2 rounded-full text-gray-700 text-[1.35rem] cursor-pointer focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border-black/10"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
