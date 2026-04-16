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
  const [showGif, setShowGif] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-3 group sm:mb-8 last:mb-0 h-full"
    >
      <Link
        href={url}
        rel="noreferrer"
        target="_blank"
        className="relative block h-full transition-all duration-300 glass-container rounded-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 group"
      >
        <div className="flex flex-col h-full px-5 pt-4 pb-7 sm:px-8 sm:pt-10">
          <div className="overflow-hidden rounded-lg mb-6 shadow-md shadow-black/5">
            <Image
              src={imageUrl}
              alt="Project I worked on"
              quality={100}
              className="w-full h-[300px] object-fill transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          
          <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="leading-relaxed h-[120px] overflow-y-auto pr-2 mb-6 text-gray-800/80 dark:text-white/70 font-light scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
            {description}
          </p>
          
          <ul className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-gray-900/[0.05] dark:bg-white/[0.1] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-gray-800 dark:text-white/70 rounded-md border border-black/5 dark:border-white/5"
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
