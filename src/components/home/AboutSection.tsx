"use client";

import { useLanguage, useT } from "@/lib/i18n/context";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Card } from "@/components/shared/Card";
import { aboutText } from "@/lib/data/cv";
import styles from "./Section.module.css";

export function AboutSection() {
  const t = useT();
  const { lang } = useLanguage();

  return (
    <section className={styles.section}>
      <SectionLabel>{t.sections.about}</SectionLabel>
      <Card>
        <p
          style={{
            fontSize: "0.93rem",
            lineHeight: "1.85",
            color: "var(--text)",
          }}
        >
          {aboutText[lang]}
        </p>
      </Card>
    </section>
  );
}
