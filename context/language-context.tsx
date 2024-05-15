"use client";


import { createContext, useContext, useState, useEffect } from "react";

export type Language = "ID" | "EN";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguageContext must be used within a LanguageProvider"
    );
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}
export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>("EN");

  const value: LanguageContextType = {
    language,
    setLanguage,
  };

  useEffect(() => {
    // const getLang : any = localStorage.getItem('language'); 
    // setLanguage(getLang ? getLang : 'EN')
  }, [])
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
