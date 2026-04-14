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
    <section ref={ref} id="projects" className="scroll-mt-24 w-full px-2 md:px-8 mb-28">
      <SectionHeading>{TYPHOGRAPHY[language].MY_PROJECT}</SectionHeading>
      <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3 lg:gap-10">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />            
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
