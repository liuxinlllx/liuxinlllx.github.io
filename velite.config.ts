import { defineConfig, s } from "velite";

export default defineConfig({
  root: "./content",
  collections: {
    blog: {
      name: "Blog",
      pattern: "blog/**/*.mdx",
      schema: s
        .object({
          title: s.string(),
          date: s.isodate(),
          tags: s.array(s.string()).default([]),
          excerpt: s.string(),
          metadata: s.metadata(),
        })
        .transform((data, { meta }) => ({
          ...data,
          slug: meta.path.replace(/.*[\\/]blog[\\/]/, "").replace(/\.mdx$/, ""),
          body: meta.content ?? "",
          plain: meta.plain ?? "",
          readingTimeMin: Math.max(
            1,
            Math.ceil(
              (meta.plain ?? "").replace(/\s+/g, " ").trim().split(" ").length /
                250
            )
          ),
        })),
    },
    podcast: {
      name: "Podcast",
      pattern: "podcast/**/*.mdx",
      schema: s
        .object({
          title: s.string(),
          date: s.isodate(),
          duration: s.string(),
          audioUrl: s.string(),
          tags: s.array(s.string()).default([]),
          excerpt: s.string(),
          metadata: s.metadata(),
        })
        .transform((data, { meta }) => ({
          ...data,
          slug: meta.path.replace(/.*[\\/]podcast[\\/]/, "").replace(/\.mdx$/, ""),
          body: meta.content ?? "",
          plain: meta.plain ?? "",
        })),
    },
  },
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
  },
});
