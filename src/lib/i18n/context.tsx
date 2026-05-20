"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import { zh } from "./zh";
import { en } from "./en";
import type { Dictionary } from "./zh";

type Lang = "zh" | "en";

const dicts: Record<Lang, Dictionary> = { zh, en };

interface LanguageCtx {
  lang: Lang;
  t: Dictionary;
  setLang: (l: Lang) => void;
}

const Ctx = createContext<LanguageCtx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("zh");

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    document.documentElement.lang = l === "zh" ? "zh-CN" : "en";
    if (typeof window !== "undefined") {
      localStorage.setItem("site-lang", l);
    }
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("site-lang");
    if (saved === "en" || saved === "zh") {
      setLangState(saved as Lang);
      document.documentElement.lang =
        saved === "zh" ? "zh-CN" : "en";
    }
  }, []);

  return (
    <Ctx.Provider value={{ lang, t: dicts[lang], setLang }}>
      {children}
    </Ctx.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLanguage must be inside LanguageProvider");
  return ctx;
}

export function useT() {
  return useLanguage().t;
}
