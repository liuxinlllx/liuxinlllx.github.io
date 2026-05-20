"use client";

import { useLanguage, useT } from "@/lib/i18n/context";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { workItems } from "@/lib/data/cv";
import styles from "./Section.module.css";
import cardStyles from "@/components/shared/Card.module.css";

export function WorkSection() {
  const t = useT();
  const { lang } = useLanguage();

  return (
    <section className={styles.section}>
      <SectionLabel>{t.sections.work}</SectionLabel>
      {workItems.map((item, i) => (
        <div className={cardStyles.card} key={i}>
          <div className={cardStyles.cardRow}>
            <h2>{item.org[lang]}</h2>
            <span className={cardStyles.cardDate}>
              {item.period} –{" "}
              {item.periodEnd === "present" ? t.common.present : item.periodEnd}
            </span>
          </div>
          <div className={cardStyles.cardSub}>{item.role[lang]}</div>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              marginTop: 4,
            }}
          >
            {item.bullets.map((bullet, j) => (
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
                {bullet[lang]}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
