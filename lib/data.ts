import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import memomoo from "@/public/images/image1.png";
import smartcourier from "@/public/images/image2.png";
import dnmmobile from "@/public/images/image3.png";
import movi from "@/public/images/image4.png";
import maca from "@/public/images/image5.png";
import mydoctor from "@/public/images/image6.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Mobile Application Developer (PT. K-Link Indonesia)",
    location: "South Jakarta, Jakarta",
    description:
      "I worked as a Mobile Application Developer and developing the latest features of DNM Mobile application, an e-commerce app designed to sell various types of products from K-Link.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2022 - Now",
  },
  
  {
    title: "Mobile Developer (PT. Quadrant Synergy International)",
    location: "Central Jakarta, Jakarta",
    description:
      "I worked as a Mobile Developer and developing Smart Courier, an application for delivering insurance policies, credit cards, and SIM cards. This latest version of the RDS Express courier app is developed to cater to the business needs of its customers.",
    icon: React.createElement(CgWorkAlt),
    date: "April 2020 - July 2022",
  },
  {
    title: "Android Developer (PT. Reycom Document Solusi)",
    location: "Central Jakarta, Jakarta",
    description:
      "I worked as a Android Developer and developing Memomoo, an application to remind company members of each other's birthdays and providing them with the option to send greetings directly through picture cards or via short messages within the app",
    icon: React.createElement(CgWorkAlt),
    date: "December 2017 - April 2020",
  },
  {
    title: "Graduated University Of Bhayangkara Jakarta Raya",
    location: "Bekasi, Jawa Barat",
    description:
      "I have graduated with a Bachelor's degree in Computer Science after four years of study. After two months, I immediately got a job as a Android developer.",
    icon: React.createElement(LuGraduationCap),
    date: "Oktober 2017",
  },
] as const;

export const projectsData = [
  {
    title: "MemoMoo",
    description:
      "A reminder application for fellow employees in a company place, you can also see other holidays and you can also make notes in it.",
    tags: ["Android", "Material Design", "Java", "Firebase", "Facebook Auth", "Google Auth"],
    imageUrl: memomoo,
    url: "https://play.google.com/store/apps/details?id=com.memomoo.mobile_prog2.apps",
  },
  {
    title: "Smart Courier",
    description:
      "A application for courier needs in delivering packages and supports the courier's work to save signatures and photos of package recipients.",
    tags: [
      "React Native",
      "Native Base UI",
      "SQLite",
      "Redux",
      "Google Map API",
    ],
    imageUrl: smartcourier,
    url: "https://play.google.com/store/apps/details?id=com.smartcourier",
  },
 
  {
    title: "DNM Mobile",
    description:
      "Is an online shopping application for K-Link customers and members and makes it easy for members to buy all K-Link products.",
    tags: [
      "React Native",
      "Tailwind",
      "Zustand",
      "React Query",
      "React Hook Form",
      "Sentry",
    ],
    imageUrl: dnmmobile,
    url: "https://play.google.com/store/apps/details?id=com.klink.kmart",
  },
  {
    title: "Movi App",
    description:
      "A application to find out what films and TV shows are the latest and most popular, we can also see trailers, teasers and all the cast.",
    tags: ["React Native", "Material Design", "Redux", "Firebase", "TMDB API"],
    imageUrl: movi,
    url: "https://play.google.com/store/apps/details?id=com.moviesdaily",
  },
 
  {
    title: "Maca App",
    description:
      "Maca is an application to read the latest news from various trusted sources and various news categories such as sports, politics, science, and others.",
    tags: [
      "React Native",
      "React Native Paper",
      "Zustand",
      "Firebase",
      "NewsData API"
    ],
    imageUrl: maca,
    url: "https://play.google.com/store/apps/details?id=com.rukysektiawan.appnews",
  },
  {
    title: "My Doctor",
    description:
      "Application to consult your favorite doctor easily. this is a course app from BuildwithAngga with Fullstack React Native Developer course.",
    tags: ["React Native", "Material Design", "Firebase", "Redux"],
    imageUrl: mydoctor,
    url: "https://play.google.com/store/apps/details?id=com.mydoctor.rukysektiawan",
  },
] as const;

export const skillsData = [
  "Java",
  "Kotlin",
  "Swift",
  "JavaScript",
  "TypeScript",
  "React Native",
  "React.js",
  "Next.js",
  "Node.js",
  "HTML",
  "CSS",
  "Git",
  "React Query",
  "Tailwind",
  "Redux",
  "Zustand",
  "Dart",
  "Flutter",
  "Bloc",
  "Provider",
  "Firebase",
  "PHP",
  "Laravel",
  "MySQL",
] as const;

const ID = {
  CONTACT_ME: "Hubungi saya",
  ABOUT_ME: "Tentang Saya",
  ABOUT_ME_DESC:
    "Sebagai seorang Frontend developer dengan pengalaman lebih dari 2 tahun, saya ahli dalam beberapa teknologi modern, termasuk React.js, Next.js, Vue.js, dan GraphQL. Saya juga mahir dalam TypeScript dan memiliki pengalaman dengan Jest untuk pengujian unit dan cypress untuk pengujian E2E. Saya bersemangat untuk menciptakan antarmuka yang ramah pengguna dan intuitif yang meningkatkan pengalaman pengguna. Saya selalu ingin mempelajari teknologi baru. Saat ini saya sedang mencari posisi penuh waktu sebagai Frontend Developer.",
  MY_PROJECT: 'Project Saya',
  PROJECT: {
    COURSE_DESC: 'Sebuah website kursus online menawarkan akses mudah ke berbagai kursus. Pengguna dapat belajar melalui video, bacaan, dan ujian tentang berbagai topik mulai dari keterampilan teknis hingga soft skill.'
  },
  MY_EXPERIENCE: 'Pengalaman Saya',
  
};
const EN = {
  CONTACT_ME: "Contact me here",
  ABOUT_ME: "About me",
  ABOUT_ME_DESC:
  "As a mobile developer with 5 years of experience, I am skilled in several modern technologies, including Java, Kotlin, Swift, JavaScript, React and React Native. I am also proficient in Dart and have experience with Flutter for other language in developing mobile. I am passionate about creating user-friendly and intuitive interfaces that enhance the user experience. I am always looking to learn new technologies. I am currently looking for a full-time position as a Mobile Developer.",
  MY_PROJECT: 'My Projects',
  PROJECT: {
    COURSE_DESC: 'Online course website offers easy access to a variety of courses. Users can learn through videos, readings, and exams on topics ranging from technical skills to soft skills.'
  },
  MY_EXPERIENCE: 'My Experience',
};

export const TYPHOGRAPHY = {
  ID: { ...ID },
  EN: { ...EN },
};
