"use client";

import { useLanguage, useT } from "@/lib/i18n/context";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { TagBadge } from "@/components/shared/TagBadge";
import { educationItems } from "@/lib/data/cv";
import styles from "./Section.module.css";
import cardStyles from "@/components/shared/Card.module.css";

export function EducationSection() {
  const t = useT();
  const { lang } = useLanguage();

  return (
    <section className={styles.section}>
      <SectionLabel>{t.sections.education}</SectionLabel>
      {educationItems.map((item, i) => (
        <div className={cardStyles.card} key={i}>
          <div className={cardStyles.cardRow}>
            <h2>{item.school[lang]}</h2>
            <span className={cardStyles.cardDate}>
              {item.period} –{" "}
              {item.periodEnd === "present" ? t.common.present : item.periodEnd}
            </span>
          </div>
          <div className={cardStyles.cardSub}>{item.degree[lang]}</div>
          {item.details && (
            <p className={cardStyles.cardDesc}>{item.details[lang]}</p>
          )}
          {item.tags.length > 0 && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginTop: 10,
              }}
            >
              {item.tags.map((tag) => (
                <TagBadge key={tag.zh} label={tag[lang]} />
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
