"use client";

import { useEffect } from "react";

export default function CallYuk() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href =
        "https://7f70-2001-448a-10c1-3fe5-40bb-677a-7ac-cb55.ngrok-free.app";
    }, 3000);
  }, []);
  return (
    <div className="w-full flex z-[999] flex-col items-center justify-center fixed top-0 left-0 min-h-screen bg-white">
      <h1 className="text-[36px] text-[#0060FF] font-bold">CallYuk</h1>
      <p className="text-gray-400 mb-5">
        Anda akan diredirect ke dalam aplikasi dalam beberapa saat
      </p>
      <span className="loader"></span>
    </div>
  );
}
