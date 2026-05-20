"use client";

import { useT } from "@/lib/i18n/context";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  const t = useT();

  return (
    <header className={styles.hero}>
      <div className={styles.avatar} aria-hidden="true">
        刘
      </div>
      <h1 className={styles.name}>{t.hero.name}</h1>
      <p className={styles.subtitle}>{t.hero.subtitle1}</p>
      <p className={styles.subtitle}>{t.hero.subtitle2}</p>
      <span className={styles.tag}>{t.hero.researchTag}</span>
    </header>
  );
}
