"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useT } from "@/lib/i18n/context";
import { LanguageToggle } from "@/components/shared/LanguageToggle";
import styles from "./Navbar.module.css";

export function Navbar() {
  const t = useT();
  const pathname = usePathname();

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/blog", label: t.nav.blog },
    { href: "/podcast", label: t.nav.podcast },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          {t.hero.name}
        </Link>
        <ul className={styles.desktop}>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.link} ${
                  pathname === link.href ? styles.linkActive : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <LanguageToggle />
      </div>
    </nav>
  );
}
