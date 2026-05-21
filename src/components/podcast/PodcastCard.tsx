"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import { formatDate } from "@/lib/utils";
import { TagBadge } from "@/components/shared/TagBadge";
import type { PodcastEpisode } from "@/lib/types";
import styles from "./PodcastCard.module.css";

interface PodcastCardProps {
  episode: PodcastEpisode;
}

export function PodcastCard({ episode }: PodcastCardProps) {
  const { t, lang } = useLanguage();

  return (
    <Link href={`/podcast/${episode.slug}`} className={styles.card}>
      <div className={styles.header}>
        <div>
          <div className={styles.tagRow}>
            {episode.tags.slice(0, 3).map((tag) => (
              <TagBadge key={tag} label={tag} />
            ))}
          </div>
          <h3 className={styles.title}>{episode.title}</h3>
        </div>
        <span className={styles.arrow}>→</span>
      </div>
      <p className={styles.excerpt}>{episode.excerpt}</p>
      <div className={styles.meta}>
        <time>{formatDate(episode.date, lang)}</time>
        <span>·</span>
        <span>
          {t.podcast.duration}: {episode.duration}
        </span>
      </div>
    </Link>
  );
}
