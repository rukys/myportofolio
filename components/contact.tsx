"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { useLanguageContext } from "@/context/language-context";
import { FaTiktok, FaWhatsappSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { TYPHOGRAPHY } from "@/lib/data";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  const {language} = useLanguageContext();

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>{TYPHOGRAPHY[language].CONTACT_ME}</SectionHeading>
     
     {language === 'EN' ? (
      <p className="-mt-6 text-gray-700 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:sektyawan33@gmail.com">
          sektyawan33@gmail.com
        </a>{" "}
        or through this form.
      </p>

     ) : (
      <p className="-mt-6 text-gray-700 dark:text-white/80">
        Silakan hubungi saya langsung di{" "}
        <a className="underline" href="mailto:sektyawan33@gmail.com">
        sektyawan33@gmail.com
        </a>{" "}
        atau melalui formulir ini.
      </p>
     )}

      <form
        className="flex flex-col mt-10 dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="px-4 transition-all rounded-lg h-14 borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="p-4 my-3 transition-all rounded-lg h-52 borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        
        <motion.div
          className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
          >
            <SubmitBtn />
            <span className="ml-2 mr-2 font-normal text-white">or</span> 
            <a
              className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href="https://www.linkedin.com/in/rukys/"
              target="_blank"
              aria-label="Linkedin Ruky Sektiawan"
            >
              <BsLinkedin />
            </a>

            <a
              className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href="https://www.tiktok.com/@rukysektiawan"
              target="_blank"
              aria-label="Gihtub Ruky Sektiawan"

            >
              <FaTiktok />
            </a>
            <a
              className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href="https://wa.me/6289603153944?text=Hello Ruky Sektiawan"
              target="_blank"
              aria-label="Whatsapp Ruky Sektiawan"

            >
              <FaWhatsappSquare />
            </a>
          </motion.div>
      </form>
    </motion.section>
  );
}
