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
  const {language} = useLanguageContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            
            <Image
              src="/myphoto.webp"
              alt="Ricardo portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-36 w-36 mb-2 rounded-full object-cover border-[0.20rem] border-white shadow-xl"
            />
          </motion.div>

          {/* <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span> */}
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {language === 'EN' ? (
          <>
          <span className="font-bold" >Hello, I'm Ruky Sektiawan. </span>
          <span className="font-normal">I'm a Mobile Developer Expertise and Mobile Design Enthusiast </span>
          <span className="font-normal">based in Bekasi</span>
          </>
          ) : (
            <>
            <span className="font-bold">Halo, saya Ruky Sektiawan. </span>
            <span className="font-normal">Saya Seorang Mobile Developer Expert dan Mobile Design Antusias </span>
            <span className="font-normal">tinggal di Bekasi</span>
          </>
        )}
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="flex items-center gap-2 py-3 text-white transition bg-gray-900 rounded-full outline-none group px-7 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          {TYPHOGRAPHY[language].CONTACT_ME}{" "}
          <BsArrowRight className="transition opacity-70 group-hover:translate-x-1" />
        </Link>

        <a
          className="flex items-center gap-2 py-3 transition bg-white rounded-full outline-none cursor-pointer group px-7 focus:scale-110 hover:scale-110 active:scale-105 borderBlack dark:bg-white/10"
          href="/cv-ruky-sektiawan.pdf"
          download
          aria-label="download cv ruky sektiawan"
        >
          {language === 'EN' ? 'Download CV ' : 'Unduh CV '}
          <HiDownload className="transition opacity-60 group-hover:translate-y-1" />
        </a>
      </motion.div>
    </section>
  );
}
