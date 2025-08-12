import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ruky Sektiawan",
  jobTitle: "Mobile Developer",
  url: "https://rukysektiawan.vercel.app",
  sameAs: ["https://github.com/rukys", "https://www.linkedin.com/in/rukys/"],
};
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
/>;
