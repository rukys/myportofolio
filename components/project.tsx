"use client";

import { useRef, useState } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const [showGif, setShowGif] = useState(false);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="mb-3 group sm:mb-8 last:mb-0"
    >
      <Link
        href={url}
        rel="noreferrer"
        target="_blank"
        className="relative block h-auto transition bg-gray-100 border rounded-lg border-black/5 hover:bg-gray-200 dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
      >
        <div className="flex flex-col h-full px-5 pt-4 pb-7 sm:pt-10">
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={100}
            objectFit="cover"
            className="w-full h-[300px] mb-5 rounded-lg shadow-2xl transition"
          />
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed h-[125px] overflow-hidden mb-5 text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </motion.div>
  );
}
