import { podcast } from "@/.velite";
import { PodcastCard } from "@/components/podcast/PodcastCard";
import { SectionLabel } from "@/components/shared/SectionLabel";
import styles from "./PodcastPreview.module.css";
import Link from "next/link";

export function PodcastPreview({ podcastLabel, viewAllLabel }: { podcastLabel: string; viewAllLabel: string }) {
  const latest = [...podcast]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  if (latest.length === 0) return null;

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <SectionLabel>{podcastLabel}</SectionLabel>
        <Link href="/podcast" className={styles.viewAll}>
          {viewAllLabel}
        </Link>
      </div>
      <div className={styles.list}>
        {latest.map((ep) => (
          <PodcastCard key={ep.slug} episode={ep} />
        ))}
      </div>
    </div>
  );
}
