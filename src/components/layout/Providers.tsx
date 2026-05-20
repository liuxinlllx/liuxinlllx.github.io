"use client";

import type { ReactNode } from "react";
import { LanguageProvider } from "@/lib/i18n/context";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <Navbar />
      <main style={{ paddingTop: "var(--nav-h)", minHeight: "100vh" }}>
        {children}
      </main>
      <Footer />
    </LanguageProvider>
  );
}
