import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { motion } from "framer-motion";

interface SubmitBtnProps {
  isSuccess?: boolean;
}

export default function SubmitBtn({ isSuccess = false }: SubmitBtnProps) {
  const { pending } = useFormStatus();

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", stiffness: 120, damping: 15 },
        opacity: { duration: 0.15 },
      },
    },
  };

  return (
    <button
      type="submit"
      className={`group flex items-center justify-center gap-2 h-[3rem] w-[8rem] rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 text-white ${
        isSuccess
          ? "bg-emerald-600 dark:bg-emerald-500"
          : "bg-gray-900 hover:bg-gray-950 dark:bg-white dark:bg-opacity-10 dark:hover:bg-opacity-20"
      }`}
      disabled={pending || isSuccess}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : isSuccess ? (
        <motion.svg
          className="w-5 h-5 text-white"
          viewBox="0 0 20 20"
          fill="none"
          initial="hidden"
          animate="visible"
        >
          <motion.path
            d="M5 10 L8 13 L15 6"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={draw}
          />
        </motion.svg>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}
