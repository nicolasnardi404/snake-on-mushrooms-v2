"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full mb-8 bg-purple-900/30 p-4 rounded-lg backdrop-blur-sm fixed top-0 z-50">
      <nav className="max-w-6xl mx-auto">
        <ul className="flex justify-center gap-6">
          <li>
            <Link
              href="/"
              className={`nav-button ${pathname === "/" ? "active" : ""}`}
            >
              Play
            </Link>
          </li>
          <li>
            <Link
              href="/rankings"
              className={`nav-button ${
                pathname === "/rankings" ? "active" : ""
              }`}
            >
              Rankings
            </Link>
          </li>
          <li>
            <Link
              href="/how-to-play"
              className={`nav-button ${
                pathname === "/how-to-play" ? "active" : ""
              }`}
            >
              How to Play
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
