"use client";

import styles from "./AudioPlayer.module.css";

interface AudioPlayerProps {
  src: string;
  title: string;
}

export function AudioPlayer({ src, title }: AudioPlayerProps) {
  return (
    <div className={styles.player}>
      <p className={styles.title}>{title}</p>
      <audio controls preload="metadata">
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
