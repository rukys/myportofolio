"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import Link from "next/link";




export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">        
         <TimelineContent/>
      </VerticalTimeline>
    </section>
  );
}

const TimelineContent = () =>{
  const {theme} = useTheme();
  return (
    <React.Fragment>
      {experiencesData.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          contentStyle={{
            background:
              theme === "light" ? "rgba(255, 255, 255, 0.7)" : "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
            border: theme === "light" ? "1px solid rgba(0, 0, 0, 0.05)" : "1px solid rgba(255, 255, 255, 0.1)",
            textAlign: "left",
            padding: "1.3rem 2rem",
            borderRadius: "1rem",
          }}
          contentArrowStyle={{
            borderRight:
              theme === "light"
                ? "0.4rem solid rgba(255, 255, 255, 0.7)"
                : "0.4rem solid rgba(255, 255, 255, 0.05)",
          }}
          date={item.date}
          icon={item.icon}
          iconStyle={{
            background:
              theme === "light" ? "white" : "#1d2432",
            boxShadow: "0 0 0 4px #fff, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
            fontSize: "1.5rem",
          }}
        >
          <h3 className="font-bold text-xl">{item.title}</h3>
          <p className="font-medium !mt-0 text-blue-600 dark:text-blue-400">{item.location}</p>
          <p className="!mt-2 !font-light leading-relaxed text-gray-700 dark:text-white/75">
            {item.description}
          </p>
        </VerticalTimelineElement>
      ))}
    </React.Fragment>
  );
}
