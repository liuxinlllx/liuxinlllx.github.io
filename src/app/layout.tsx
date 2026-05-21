import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/layout/Providers";

export const metadata: Metadata = {
  title: {
    default: "刘芯 / Xin Liu — PhD Candidate",
    template: "%s — 刘芯 / Xin Liu",
  },
  description:
    "Xin Liu is a PhD candidate in Sports Humanities and Sociology at Zhejiang University, researching Exercise is Medicine and Healthy China.",
  openGraph: {
    title: "刘芯 / Xin Liu — PhD Candidate",
    description:
      "Sports Humanities & Sociology researcher at Zhejiang University. Exercise is Medicine · Sports Policy · Healthy China.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
