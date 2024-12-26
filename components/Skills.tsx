"use client";
import { useSectionInView } from "@/hooks/hooks";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const Skills = () => {
  const { ref } = useSectionInView("Skills");

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 scroll-mt-28 max-w-[53rem] text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-4 text-lg text-gray-800">
        {skillsData?.map((skill, index) => (
          <motion.li
            key={index}
            className="bg-white border-black/[0.1] rounded-xl px-5 py-3"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
