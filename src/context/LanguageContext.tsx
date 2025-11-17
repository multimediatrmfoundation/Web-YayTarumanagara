"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  PropsWithChildren,
} from "react";
import en from "@/lang/en.json";
import id from "@/lang/id.json";

type Language = "id" | "en";

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

const DICTIONARIES = {
  en,
  id,
} as const;

export const LanguageProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("id");
  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = window.localStorage.getItem("language");
    if (saved === "en" || saved === "id") {
      setLanguage(saved);
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next: Language = prev === "id" ? "en" : "id";
      if (typeof window !== "undefined") {
        window.localStorage.setItem("language", next);
      }
      return next;
    });
  };

  const t = (key: string): string => {
    const segments = key.split(".");
    let current: unknown = DICTIONARIES[language];

    for (const seg of segments) {
      if (
        typeof current === "object" &&
        current !== null &&
        seg in (current as Record<string, unknown>)
      ) {
        current = (current as Record<string, unknown>)[seg];
      } else {
        return key;
      }
    }

    return typeof current === "string" ? current : key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, toggleLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
};
