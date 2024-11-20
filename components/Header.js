"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 bg-purple-900/30 backdrop-blur-sm border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-white">
          SNAKE ON MUSHROOMS
        </h1>
        <div className="flex items-center justify-between h-16">
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className={`nav-button ${pathname === "/" ? "active" : ""}`}
            >
              Play
            </Link>
            <Link
              href="/rankings"
              className={`nav-button ${
                pathname === "/rankings" ? "active" : ""
              }`}
            >
              Rankings
            </Link>
            <Link
              href="/how-to-play"
              className={`nav-button ${
                pathname === "/how-to-play" ? "active" : ""
              }`}
            >
              How to Play
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
