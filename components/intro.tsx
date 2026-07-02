"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useLanguageContext } from "@/context/language-context";
import { TYPHOGRAPHY } from "@/lib/data";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { language } = useLanguageContext();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 14,
      },
    },
  };

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        <motion.div variants={itemVariants} className="flex items-center justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-25 blur transition duration-1000 group-hover:opacity-50 group-hover:duration-200"></div>
            <Image
              src="/myphoto.png"
              alt="Ruky Sektiawan portrait"
              width="200"
              height="200"
              quality="100"
              priority={true}
              className="relative h-56 w-56 mb-4 mt-2 rounded-full object-cover border-[0.20rem] border-white shadow-xl dark:border-gray-800 transition-transform duration-500 hover:scale-105"
              style={{ objectPosition: "75% 25%" }}
            />
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        >
          {language === "EN" ? (
            <>
              <span className="font-bold text-gradient">Hello, I'm Ruky Sektiawan. </span>
              <span className="font-normal">
                I'm a <span className="italic">Mobile Developer</span> &{" "}
                <span className="italic">Frontend Engineer</span>{" "}
              </span>
              <span className="font-normal">based in Bekasi</span>
            </>
          ) : (
            <>
              <span className="font-bold text-gradient">Halo, saya Ruky Sektiawan. </span>
              <span className="font-normal">
                Saya Seorang <span className="italic">Mobile Developer Expert</span>{" "}
              </span>
              <span className="font-normal">tinggal di Bekasi</span>
            </>
          )}
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        >
          <Link
            href="#contact"
            className="flex items-center gap-2 py-3 text-white transition-all bg-gray-900 rounded-full outline-none group px-7 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 shadow-lg hover:shadow-xl dark:bg-white/10 dark:hover:bg-white/20"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            {TYPHOGRAPHY[language].CONTACT_ME}{" "}
            <BsArrowRight className="transition opacity-70 group-hover:translate-x-1" />
          </Link>

          <a
            className="flex items-center gap-2 py-3 transition-all bg-white rounded-full outline-none cursor-pointer group px-7 focus:scale-110 hover:scale-110 active:scale-105 borderBlack shadow-md hover:shadow-lg dark:bg-white/10"
            href="/cv-ruky-sektiawan.pdf"
            download
            aria-label="download cv ruky sektiawan"
          >
            {language === "EN" ? "Download CV " : "Unduh CV "}
            <HiDownload className="transition opacity-60 group-hover:translate-y-1" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
