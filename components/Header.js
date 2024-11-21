"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/Header.module.css";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.mushroom}>🍄</span>
            SNAKE ON MUSHROOMS
            <span className={styles.mushroom}>🍄</span>
          </h1>

          <nav className={styles.nav}>
            <Link
              href="/"
              className={`${styles.navLink} ${
                pathname === "/" ? styles.active : ""
              }`}
            >
              Play
            </Link>
            <Link
              href="/rankings"
              className={`${styles.navLink} ${
                pathname === "/rankings" ? styles.active : ""
              }`}
            >
              Rankings
            </Link>
            <Link
              href="/how-to-play"
              className={`${styles.navLink} ${
                pathname === "/how-to-play" ? styles.active : ""
              }`}
            >
              How to Play
            </Link>
            <Link
              href="/donation"
              className={`${styles.navLink} ${
                pathname === "/donation" ? styles.active : ""
              }`}
            >
              Support
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
