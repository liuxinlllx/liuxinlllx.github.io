"use client";

import { useLanguage, useT } from "@/lib/i18n/context";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { researchSections } from "@/lib/data/cv";
import styles from "./Section.module.css";
import cardStyles from "@/components/shared/Card.module.css";

export function ResearchSection() {
  const t = useT();
  const { lang } = useLanguage();

  return (
    <section className={styles.section}>
      <SectionLabel>{t.sections.research}</SectionLabel>
      {researchSections.map((section, i) => (
        <div className={cardStyles.card} key={i}>
          <h3>{section.heading[lang]}</h3>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              marginTop: 4,
            }}
          >
            {section.items.map((item, j) => (
              <li
                key={j}
                style={{
                  position: "relative",
                  paddingLeft: 18,
                  fontSize: "0.94rem",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 10,
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "var(--accent)",
                    opacity: 0.5,
                    display: "inline-block",
                  }}
                />
                {item[lang]}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
