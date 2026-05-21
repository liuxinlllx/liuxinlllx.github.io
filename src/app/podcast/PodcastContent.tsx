"use client";

import { useT } from "@/lib/i18n/context";
import { PodcastCard } from "@/components/podcast/PodcastCard";
import type { PodcastEpisode } from "@/lib/types";
import styles from "./page.module.css";

interface PodcastContentProps {
  episodes: PodcastEpisode[];
}

export function PodcastContent({ episodes }: PodcastContentProps) {
  const t = useT();

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.header}>
          <h1 className={styles.title}>{t.podcast.title}</h1>
          <p className={styles.description}>{t.podcast.description}</p>
        </div>

        {episodes.length === 0 ? (
          <p className={styles.empty}>{t.common.noContent}</p>
        ) : (
          <div className={styles.list}>
            {episodes.map((ep) => (
              <PodcastCard key={ep.slug} episode={ep} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
