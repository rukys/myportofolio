"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links, TYPHOGRAPHY } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useLanguageContext } from "@/context/language-context";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const { language, setLanguage } = useLanguageContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="z-[999] relative">
      {/* Desktop Navigation */}
      <nav className="hidden sm:flex items-center fixed top-0 left-1/2 -translate-x-1/2 py-2 sm:top-6 sm:h-[3.25rem] sm:py-0 z-[1000]">
        <motion.div
          className="flex items-center justify-center h-[3.25rem] rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 px-6"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        >
          <ul className="flex flex-nowrap items-center justify-center gap-5 text-[0.9rem] font-medium text-gray-500">
            {links.map((link) => (
              <motion.li
                className="relative flex items-center justify-center h-3/4"
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={clsx(
                    "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300 whitespace-nowrap",
                    {
                      "text-gray-950 dark:text-gray-200":
                        activeSection === link.name,
                    }
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {TYPHOGRAPHY[language].NAV[link.name]}

                  {link.name === activeSection && (
                    <motion.span
                      className="absolute inset-0 bg-gray-100 rounded-full -z-10 dark:bg-gray-800"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </nav>

      {/* Language Switcher Toggle */}
      <div className="fixed top-[0.7rem] right-14 sm:top-7 sm:right-12 z-[1001] flex bg-white/70 dark:bg-gray-950/70 backdrop-blur-md p-0.5 rounded-full border border-black/5 dark:border-white/10 shadow-sm">
        {(["EN", "ID"] as const).map((lang) => (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            className={clsx(
              "relative px-2 py-0.5 text-[10px] font-bold rounded-full transition-colors uppercase tracking-wider",
              language === lang ? "text-gray-950 dark:text-white" : "text-gray-400 dark:text-gray-500"
            )}
            aria-label={`Switch to ${lang}`}
          >
            {lang === language && (
              <motion.span
                layoutId="activeLanguage"
                className="absolute inset-0 bg-white dark:bg-gray-800 rounded-full -z-10 shadow-sm border border-black/5 dark:border-white/5"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
              />
            )}
            {lang}
          </button>
        ))}
      </div>

      {/* Mobile Top Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3.5rem] flex items-center justify-between px-6 sm:hidden z-[1000] border-b border-black/5 dark:border-white/5 bg-white bg-opacity-80 dark:bg-gray-950 dark:bg-opacity-75 backdrop-blur-[0.5rem]">
        <span className="font-semibold text-gray-950 dark:text-white">Ruky Sektiawan</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-gray-700 dark:text-gray-200 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-[3.5rem] left-0 right-0 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-b border-black/5 dark:border-white/10 py-6 px-8 z-[998] sm:hidden shadow-lg"
          >
            <ul className="flex flex-col gap-4 text-lg font-medium text-gray-500 dark:text-gray-400">
              {links.map((link) => (
                <motion.li
                  key={link.hash}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <Link
                    className={clsx(
                      "block w-full py-2 hover:text-gray-950 dark:hover:text-white transition-colors",
                      {
                        "text-gray-950 dark:text-white font-semibold": activeSection === link.name,
                      }
                    )}
                    href={link.hash}
                    onClick={() => {
                      setIsOpen(false);
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {TYPHOGRAPHY[language].NAV[link.name]}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
