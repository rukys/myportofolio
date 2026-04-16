"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, 
  SiHtml5, SiCss3, SiGit, SiTailwindcss, SiRedux, SiFirebase, 
  SiSupabase, SiPhp, SiLaravel, SiMysql, SiGraphql, SiFlutter, SiKotlin, SiSwift, SiDart
} from "react-icons/si";
import { TbBrandReactNative, TbCircles } from "react-icons/tb";
import { LuBrainCircuit } from "react-icons/lu";
import { MdOutlineRocketLaunch, MdSpeed } from "react-icons/md";
import { FaJava } from "react-icons/fa";
import { DiSqllite } from "react-icons/di";

const iconsMap: Record<string, React.ReactNode> = {
  JavaScript: <SiJavascript className="text-yellow-400" />,
  TypeScript: <SiTypescript className="text-blue-500" />,
  "React Native": <TbBrandReactNative className="text-cyan-400" />,
  "React.js": <SiReact className="text-cyan-400" />,
  "Next.js": <SiNextdotjs />,
  "Node.js": <SiNodedotjs className="text-green-500" />,
  HTML: <SiHtml5 className="text-orange-500" />,
  CSS: <SiCss3 className="text-blue-500" />,
  Git: <SiGit className="text-orange-600" />,
  "React Query": <SiReact className="text-red-500 rotate-180" />, // Fallback icon
  Tailwind: <SiTailwindcss className="text-cyan-400" />,
  Redux: <SiRedux className="text-purple-600" />,
  Zustand: <TbCircles className="text-orange-400" />, // Fallback
  Java: <FaJava className="text-red-500" />,
  Kotlin: <SiKotlin className="text-purple-500" />,
  Swift: <SiSwift className="text-orange-600" />,
  Dart: <SiDart className="text-cyan-600" />,
  Flutter: <SiFlutter className="text-cyan-500" />,
  Bloc: <TbCircles className="text-blue-500" />,
  Provider: <LuBrainCircuit className="text-blue-400" />,
  Firebase: <SiFirebase className="text-yellow-500" />,
  Supabase: <SiSupabase className="text-emerald-500" />,
  PHP: <SiPhp className="text-indigo-500" />,
  Laravel: <SiLaravel className="text-red-500" />,
  MySQL: <SiMysql className="text-blue-600" />,
  SQLite: <DiSqllite className="text-blue-400" />,
  GraphQL: <SiGraphql className="text-pink-600" />,
  Stallion: <MdOutlineRocketLaunch className="text-gray-400" />,
  Fastlane: <MdSpeed className="text-red-500" />,
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-3 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="flex items-center gap-2 px-5 py-3 glass-container rounded-xl dark:text-white/80 hover:scale-110 transition-transform cursor-default"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <span className="text-xl">{iconsMap[skill]}</span>
            <span>{skill}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
