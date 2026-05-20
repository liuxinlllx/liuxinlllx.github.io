"use client";

import { useLanguage } from "@/lib/i18n/context";
import styles from "./LanguageToggle.module.css";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className={styles.bar}>
      <button
        className={`${styles.btn} ${lang === "zh" ? styles.active : ""}`}
        onClick={() => setLang("zh")}
        aria-pressed={lang === "zh"}
      >
        中
      </button>
      <button
        className={`${styles.btn} ${lang === "en" ? styles.active : ""}`}
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}
