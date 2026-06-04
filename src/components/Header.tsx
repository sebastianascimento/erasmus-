"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="border-b border-[#8d3140]/25 bg-[#fbf8f6] text-[#7f152b] shadow-[0_2px_0_rgba(141,49,64,0.08)]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-4 px-4 py-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
        <div className="flex justify-center lg:justify-start">
          <a href="/" className="font-display text-[clamp(1.9rem,2.5vw,2.65rem)] leading-none tracking-[0.02em] text-[#7f1027] uppercase">
            Kraków Heritage
          </a>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-7 text-[0.95rem] font-semibold text-[#6f5a5b]">
          <a
            className={`transition-colors ${isActive("/dining") ? "text-[#8d3140] border-b-2 border-[#8d3140] pb-1" : "hover:text-[#8d3140]"}`}
            href="/dining"
          >
            Dining
          </a>
          <a
            className={`transition-colors ${isActive("/experiences") ? "text-[#8d3140] border-b-2 border-[#8d3140] pb-1" : "hover:text-[#8d3140]"}`}
            href="/experiences"
          >
            Experiences
          </a>
          <a
            className={`transition-colors ${isActive("/faqs") ? "text-[#8d3140] border-b-2 border-[#8d3140] pb-1" : "hover:text-[#8d3140]"}`}
            href="/faqs"
          >
            FAQ
          </a>
        </nav>

        <div className="flex items-center justify-center lg:justify-end" />
      </div>
    </header>
  );
}
