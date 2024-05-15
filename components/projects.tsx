"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { TYPHOGRAPHY, projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { useLanguageContext } from "@/context/language-context";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const {language} = useLanguageContext();

  return (
    <section ref={ref} id="projects" className="scroll-mt-24 max-w-[1900px] mb-28">
      <SectionHeading>{TYPHOGRAPHY[language].MY_PROJECT}</SectionHeading>
      <div className="grid grid-cols-1 gap-10 xl:grid-cols-3 md:gap-25 md:grid-cols-2">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />            
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
