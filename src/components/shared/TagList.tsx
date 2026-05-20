import { TagBadge } from "./TagBadge";
import styles from "./TagList.module.css";

interface TagListProps {
  tags: string[];
  activeTag?: string;
  onTagClick?: (tag: string) => void;
}

export function TagList({ tags, activeTag, onTagClick }: TagListProps) {
  return (
    <div className={styles.tags}>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagClick?.(tag)}
          className={`${styles.tagBtn} ${activeTag === tag ? styles.tagBtnActive : ""}`}
          style={!onTagClick ? { cursor: "default" } : undefined}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
