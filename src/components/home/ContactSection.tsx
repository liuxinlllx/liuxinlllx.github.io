"use client";

import { useLanguage, useT } from "@/lib/i18n/context";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Card } from "@/components/shared/Card";
import { contactItems } from "@/lib/data/cv";
import styles from "./Section.module.css";

export function ContactSection() {
  const t = useT();
  const { lang } = useLanguage();

  return (
    <section className={styles.section}>
      <SectionLabel>{t.sections.contact}</SectionLabel>
      <Card>
        <div
          style={{
            display: "flex",
            gap: 24,
            flexWrap: "wrap",
            fontSize: "0.92rem",
            color: "var(--text-muted)",
            alignItems: "center",
          }}
        >
          {contactItems.map((item, i) => (
            <span key={i} style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  display: "inline-block",
                  marginRight: 6,
                  flexShrink: 0,
                  background: item.dotColor,
                }}
              />
              {lang === "zh" ? item.value : `${item.label.en}: ${item.value}`}
            </span>
          ))}
        </div>
      </Card>
    </section>
  );
}
