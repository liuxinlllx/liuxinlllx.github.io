"use client";

import { useLanguage } from "@/lib/i18n/context";
import type { ReactNode } from "react";

interface BilingualBodyProps {
  zhContent: ReactNode;
  enContent: ReactNode | null;
}

export function BilingualBody({ zhContent, enContent }: BilingualBodyProps) {
  const { lang } = useLanguage();
  return lang === "en" && enContent ? enContent : zhContent;
}
