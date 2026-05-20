"use client";

import { useLanguage, useT } from "@/lib/i18n/context";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Card } from "@/components/shared/Card";
import { mediaItems } from "@/lib/data/cv";
import styles from "./Section.module.css";

export function MediaSection() {
  const t = useT();
  const { lang } = useLanguage();

  return (
    <section className={styles.section}>
      <SectionLabel>{t.sections.media}</SectionLabel>
      <Card>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            marginTop: 4,
          }}
        >
          {mediaItems.map((item, i) => (
            <li
              key={i}
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
              {item.text[lang]}
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
}
