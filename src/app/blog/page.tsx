import { blog } from "@/.velite";
import { BlogContent } from "./BlogContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "学术思考与研究笔记",
};

export default function BlogPage() {
  const posts = [...blog].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return <BlogContent posts={posts} />;
}
