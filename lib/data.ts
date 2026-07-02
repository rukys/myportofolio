import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import memomoo from "@/public/images/image1.png";
import smartcourier from "@/public/images/image2.png";
import dnmmobile from "@/public/images/image3.png";
import movi from "@/public/images/image4.png";
import mydoctor from "@/public/images/image6.png";
import recipelyApp from "@/public/images/image7.png";
import project8 from "@/public/images/image8.png";
import project9 from "@/public/images/image9.png";
import project10 from "@/public/images/image10.png";

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
    titleEN: "Mobile Application Developer (PT. K-Link Indonesia)",
    titleID: "Developer Aplikasi Mobile (PT. K-Link Indonesia)",
    location: "South Jakarta, Jakarta",
    descriptionEN:
      "I worked as a Mobile Application Developer and developing the latest features of DNM Mobile application, an e-commerce app designed to sell various types of products from K-Link.",
    descriptionID:
      "Saya bekerja sebagai Developer Aplikasi Mobile dan mengembangkan fitur-fitur terbaru dari aplikasi DNM Mobile, sebuah aplikasi e-commerce yang dirancang untuk menjual berbagai jenis produk dari K-Link.",
    icon: React.createElement(CgWorkAlt),
    dateEN: "July 2022 - Present",
    dateID: "Juli 2022 - Sekarang",
  },
  {
    titleEN: "Mobile Developer (PT. Quadrant Synergy International)",
    titleID: "Developer Mobile (PT. Quadrant Synergy International)",
    location: "Central Jakarta, Jakarta",
    descriptionEN:
      "I worked as a Mobile Developer and developing Smart Courier, an application for delivering insurance policies, credit cards, and SIM cards. This latest version of the RDS Express courier app is developed to cater to the business needs of its customers.",
    descriptionID:
      "Saya bekerja sebagai Mobile Developer dan mengembangkan Smart Courier, sebuah aplikasi untuk pengiriman polis asuransi, kartu kredit, dan kartu SIM. Versi terbaru dari aplikasi kurir RDS Express ini dikembangkan untuk memenuhi kebutuhan bisnis pelanggannya.",
    icon: React.createElement(CgWorkAlt),
    dateEN: "April 2020 - July 2022",
    dateID: "April 2020 - Juli 2022",
  },
  {
    titleEN: "Android Developer (PT. Reycom Document Solusi)",
    titleID: "Developer Android (PT. Reycom Document Solusi)",
    location: "Central Jakarta, Jakarta",
    descriptionEN:
      "I worked as an Android Developer and developing Memomoo, an application to remind company members of each other's birthdays and providing them with the option to send greetings directly through picture cards or via short messages within the app.",
    descriptionID:
      "Saya bekerja sebagai Android Developer dan mengembangkan Memomoo, sebuah aplikasi untuk mengingatkan hari ulang tahun sesama anggota perusahaan dan memberi mereka pilihan untuk mengirim ucapan selamat secara langsung melalui kartu bergambar atau pesan singkat di dalam aplikasi.",
    icon: React.createElement(CgWorkAlt),
    dateEN: "December 2017 - April 2020",
    dateID: "Desember 2017 - April 2020",
  },
  {
    titleEN: "Graduated University Of Bhayangkara Jakarta Raya",
    titleID: "Lulus Dari Universitas Bhayangkara Jakarta Raya",
    location: "Bekasi, Jawa Barat",
    descriptionEN:
      "I have graduated with a Bachelor's degree in Computer Science after four years of study. After two months, I immediately got a job as an Android developer.",
    descriptionID:
      "Saya telah lulus dengan gelar Sarjana Ilmu Komputer setelah menempuh studi selama empat tahun. Setelah dua bulan, saya langsung mendapatkan pekerjaan pertama sebagai Android Developer.",
    icon: React.createElement(LuGraduationCap),
    dateEN: "October 2017",
    dateID: "Oktober 2017",
  },
] as const;

export const projectsData = [
  {
    title: "MemoMoo",
    descriptionEN:
      "A reminder application for fellow employees in a company place, you can also see other holidays and you can also make notes in it.",
    descriptionID:
      "Aplikasi pengingat untuk sesama karyawan di lingkungan perusahaan, Anda juga dapat melihat hari libur lainnya dan membuat catatan di dalamnya.",
    tags: ["Android", "Material Design", "Java", "Firebase", "Facebook Auth", "Google Auth"],
    imageUrl: memomoo,
    url: "https://play.google.com/store/apps/details?id=com.memomoo.mobile_prog2.apps",
  },
  {
    title: "Smart Courier",
    descriptionEN:
      "An application for courier needs in delivering packages and supports the courier's work to save signatures and photos of package recipients.",
    descriptionID:
      "Aplikasi untuk kebutuhan kurir dalam mengirimkan paket dan mendukung pekerjaan kurir untuk menyimpan tanda tangan serta foto penerima paket.",
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
    descriptionEN:
      "Is an online shopping application for K-Link customers and members and makes it easy for members to buy all K-Link products.",
    descriptionID:
      "Merupakan aplikasi belanja online untuk pelanggan dan anggota K-Link serta memudahkan anggota untuk membeli seluruh produk K-Link.",
    tags: [
      "React Native",
      "Tailwind",
      "Zustand",
      "React Query",
      "Firebase",
      "Sentry",
    ],
    imageUrl: dnmmobile,
    url: "https://play.google.com/store/apps/details?id=com.klink.kmart",
  },
  {
    title: "Movi App",
    descriptionEN:
      "An application to find out what films shows are the latest and most popular, we can also see trailers, teasers and all the cast.",
    descriptionID:
      "Aplikasi untuk mengetahui film apa saja yang terbaru dan terpopuler, kita juga dapat melihat trailer, teaser, dan semua pemerannya.",
    tags: ["React Native", "Firebase", "TMBD API", "Tailwind", "Zustand", "React Query"],
    imageUrl: movi,
    url: "https://play.google.com/store/apps/details?id=com.moviesdaily",
  },
  {
    title: "Cinemagz",
    descriptionEN:
      "Cinemagz is a lightweight Android app for discovering movies. Browse what’s Popular, Top Rated, and Upcoming; open rich detail pages with synopsis, ratings, and full cast; search by title, genre, or actor; and save favorites to your personal watchlist—all in a clean, easy-to-use interface.",
    descriptionID:
      "Cinemagz adalah aplikasi Android ringan untuk menjelajahi film. Cari film Populer, Terpopuler, dan Mendatang; buka halaman detail lengkap dengan sinopsis, rating, dan seluruh pemeran; cari berdasarkan judul, genre, atau aktor; serta simpan favorit ke daftar tontonan pribadi Anda.",
    tags: ["React Native", "Firebase", "Zustand", "React Query", "Tailwind"],
    imageUrl: mydoctor,
    url: "https://play.google.com/store/apps/details?id=com.cinemaxapp&hl=id",
  },
  {
    title: "Recipely",
    descriptionEN:
      "Recipely is a daily cooking app that will become your kitchen assistant! With Recipely, you can explore various recipes from around the world, find inspiration for daily meals, and learn how to cook with ease.",
    descriptionID:
      "Recipely adalah aplikasi memasak harian yang akan menjadi asisten dapur Anda! Dengan Recipely, Anda dapat menjelajahi berbagai resep dari seluruh dunia, menemukan inspirasi menu harian, dan belajar memasak dengan mudah.",
    tags: [
      "React Native",
      "React Query",
      "Zustand",
      "Firebase",
      "Node JS",
      "Express",
    ],
    imageUrl: recipelyApp,
    url: "https://play.google.com/store/apps/details?id=com.recipely",
  },
  {
    title: "Kukami",
    descriptionEN:
      "Food delivery and courier platform built for speed and reliability. It features real-time tracking using Google Maps SDK, instant push notifications for order updates, and a seamless interface for an optimal delivery experience.",
    descriptionID:
      "Platform pengiriman makanan dan kurir yang dibuat untuk kecepatan dan keandalan. Dilengkapi fitur pelacakan real-time menggunakan Google Maps SDK, notifikasi push instan untuk pembaruan pesanan, dan antarmuka yang mulus.",
    tags: ["React Native", "Firebase", "Zustand", "Google Map SDK", "Tailwind", "React Hook Form"],
    imageUrl: project8,
    url: "#",
  },
  {
    title: "Chateo",
    descriptionEN:
      "Chateo is a real-time messaging application built with React Native, featuring end-to-end encryption, instant notifications, and a seamless user interface for secure communication.",
    descriptionID:
      "Chateo adalah aplikasi perpesanan real-time yang dibuat dengan React Native, menampilkan enkripsi end-to-end, notifikasi instan, dan antarmuka pengguna yang mulus untuk komunikasi aman.",
    tags: ["React Native", "Tailwind", "Zustand", "React Query", "Firebase"],
    imageUrl: project9,
    url: "https://play.google.com/store/apps/details?id=com.chateoapp",
  },
  {
    title: "MotoLog",
    descriptionEN:
      "A smart service and maintenance tracker for motorcycle enthusiasts. It helps users manage their garage, track service history, and set precise maintenance reminders to keep their bikes in top condition.",
    descriptionID:
      "Pelacak servis dan pemeliharaan pintar untuk penggemar sepeda motor. Membantu pengguna mengelola garasi mereka, melacak riwayat servis, dan menyetel pengingat pemeliharaan yang tepat agar motor tetap prima.",
    tags: ["React Native", "Zustand", "Tailwind", "Realm", "Local Notifications"],
    imageUrl: project10,
    url: "#",
  },
] as const;

export const skillsData = [
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
  "Java",
  "Kotlin",
  "Swift",
  "Dart",
  "Flutter",
  "Bloc",
  "Provider",
  "Firebase",
  "Supabase",
  "PHP",
  "Laravel",
  "MySQL",
  "SQLite",
  "GraphQL",
  "Stallion",
  "Fastlane",
] as const;

const ID = {
  CONTACT_ME: "Hubungi saya",
  ABOUT_ME: "Tentang Saya",
  ABOUT_ME_DESC:
    "Saya adalah seorang Mobile Developer dengan pengalaman lebih dari 5 tahun dalam merancang dan mengembangkan aplikasi modern yang scalable, khususnya menggunakan React Native. Fokus utama saya adalah membangun aplikasi yang bersih, responsif, dan memiliki performa tinggi. Aplikasi tersebut didukung oleh teknologi solid seperti Zustand, Redux, Tailwind CSS, Firebase, Supabase, dan MySQL. Semasa karier saya, saya telah menangani berbagai jenis proyek. Beberapa di antaranya meliputi aplikasi logistik untuk kurir, sistem member e-commerce, hingga platform direktori film dan resep masakan. Semuanya bermuara pada satu tujuan, yaitu menciptakan fungsionalitas dan pengalaman pengguna yang luar biasa. Selain mobile development, saya juga handal sebagai full-stack developer memanfaatkan ekosistem React.js, Next.js, dan Laravel. Saya selalu menantang diri untuk belajar hal baru dan berkolaborasi di dalam proyek yang berdampak nyata. Mari berkolaborasi dan ciptakan sesuatu yang luar biasa bersama!",
  MY_PROJECT: 'Proyek Saya',
  PROJECT: {
    COURSE_DESC: 'Sebuah website kursus online menawarkan akses mudah ke berbagai kursus. Pengguna dapat belajar melalui video, bacaan, dan ujian tentang berbagai topik mulai dari keterampilan teknis hingga soft skill.'
  },
  MY_EXPERIENCE: 'Pengalaman Kerja',
  MY_SKILLS: 'Keahlian Saya',
  NAV: {
    Home: "Beranda",
    About: "Tentang Saya",
    Projects: "Proyek",
    Skills: "Keahlian",
    Experience: "Pengalaman",
    Contact: "Hubungi Saya",
  }
};

const EN = {
  CONTACT_ME: "Contact me here",
  ABOUT_ME: "About me",
  ABOUT_ME_DESC:
    "I am a passionate Mobile Developer with over 5 years of experience crafting modern, scalable applications primarily using React Native. My core focus lies in building clean, responsive, and high-performance apps backed by robust tools like Zustand, Redux, Tailwind CSS, Firebase, Supabase, and MySQL. Throughout my career, I've successfully delivered a diverse range of projects. These include complex logistics applications, membership systems, and consumer-facing movie and recipe platforms. I always prioritize a seamless user experience in every app I build. Beyond mobile development, I am also highly comfortable working across the full stack leveraging React.js, Next.js, and Laravel. I'm constantly driven to learn new technologies and collaborate on meaningful projects. Let’s build something awesome together!",
  MY_PROJECT: 'My Projects',
  PROJECT: {
    COURSE_DESC: 'Online course website offers easy access to a variety of courses. Users can learn through videos, readings, and exams on topics ranging from technical skills to soft skills.'
  },
  MY_EXPERIENCE: 'My Experience',
  MY_SKILLS: 'My Skills',
  NAV: {
    Home: "Home",
    About: "About",
    Projects: "Projects",
    Skills: "Skills",
    Experience: "Experience",
    Contact: "Contact",
  }
};

export const TYPHOGRAPHY = {
  ID: { ...ID },
  EN: { ...EN },
};
