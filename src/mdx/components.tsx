import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h2: ({ children, ...props }) => (
    <h2 className="mdx-content" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="mdx-content" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }) => (
    <p className="mdx-content" {...props}>
      {children}
    </p>
  ),
  a: ({ href, children, ...props }) => (
    <a
      href={href}
      className="mdx-content"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  ),
  ul: ({ children, ...props }) => (
    <ul className="mdx-content" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="mdx-content" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="mdx-content" {...props}>
      {children}
    </li>
  ),
  img: ({ src, alt, ...props }) => (
    <img
      src={src as string}
      alt={alt as string ?? ""}
      className="mdx-content"
      loading="lazy"
      {...props}
    />
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote className="mdx-content" {...props}>
      {children}
    </blockquote>
  ),
  strong: ({ children, ...props }) => (
    <strong className="mdx-content" {...props}>
      {children}
    </strong>
  ),
  code: ({ children, ...props }) => (
    <code className="mdx-content" {...props}>
      {children}
    </code>
  ),
  pre: ({ children, ...props }) => (
    <pre className="mdx-content" {...props}>
      {children}
    </pre>
  ),
};
