"use client";

import { useLanguage } from "@/lib/i18n/context";
import { PodcastCard } from "@/components/podcast/PodcastCard";
import type { PodcastEpisode } from "@/lib/types";
import styles from "./page.module.css";

interface PodcastContentProps {
  episodes: PodcastEpisode[];
}

export function PodcastContent({ episodes }: PodcastContentProps) {
  const { t, lang } = useLanguage();

  // Group by slug, prefer current language, fallback to other
  const slugMap = new Map<string, PodcastEpisode>();
  for (const ep of episodes) {
    if (!slugMap.has(ep.slug)) {
      slugMap.set(ep.slug, ep);
    } else if (ep.lang === lang) {
      slugMap.set(ep.slug, ep);
    }
  }
  const filtered = Array.from(slugMap.values());

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.header}>
          <h1 className={styles.title}>{t.podcast.title}</h1>
          <p className={styles.description}>{t.podcast.description}</p>
        </div>

        {filtered.length === 0 ? (
          <p className={styles.empty}>{t.common.noContent}</p>
        ) : (
          <div className={styles.list}>
            {filtered.map((ep) => (
              <PodcastCard key={ep.slug} episode={ep} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
