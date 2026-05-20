export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  readingTimeMin: number;
  body: string;
  plain: string;
}

export interface PodcastEpisode {
  slug: string;
  title: string;
  date: string;
  duration: string;
  audioUrl: string;
  tags: string[];
  excerpt: string;
  body: string;
  plain: string;
}

export interface BilingualText {
  zh: string;
  en: string;
}

export interface EducationItem {
  school: BilingualText;
  period: string;
  periodEnd: string;
  degree: BilingualText;
  details?: BilingualText;
  tags: BilingualText[];
}

export interface WorkItem {
  org: BilingualText;
  period: string;
  periodEnd: string;
  role: BilingualText;
  bullets: BilingualText[];
}

export interface ResearchSection {
  heading: BilingualText;
  items: BilingualText[];
}

export interface MediaItem {
  text: BilingualText;
}

export interface ContactItem {
  label: BilingualText;
  value: string;
  dotColor: string;
}
