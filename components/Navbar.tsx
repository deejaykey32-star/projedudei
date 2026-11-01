"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Briefcase,
  BookOpen,
  Award,
  MessageSquareCode,
  HelpCircle,
  Download,
  Menu,
  X,
  GraduationCap,
} from "lucide-react";

interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
  highlight?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Główna", icon: Briefcase },
  { href: "/lekcje/", label: "10 Lekcji Krok po Kroku", icon: BookOpen, highlight: true },
  { href: "/kurs/", label: "5 Filarów (15 Certyfikacji)", icon: GraduationCap },
  { href: "/simulator/", label: "Symulator", icon: MessageSquareCode },
  { href: "/quiz/", label: "Quizy", icon: HelpCircle },
  { href: "/exam/", label: "Egzamin", icon: Award },
  { href: "/pobierz/", label: "Pobierz APK / iOS", icon: Download },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" || pathname === "";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 mb-6 w-full rounded-2xl border border-slate-800 bg-slate-900/90 backdrop-blur-md shadow-lg shadow-black/20">
      <div className="flex items-center justify-between px-3.5 py-2.5 sm:px-5">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group transition active:scale-95"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400 text-slate-950 font-black shadow-md shadow-amber-400/20 group-hover:bg-amber-300 transition">
            <Briefcase className="h-5 w-5" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-base font-black tracking-tight text-slate-100 group-hover:text-amber-400 transition">
                Projedudei
              </span>
              <span className="hidden sm:inline-block rounded-full bg-sky-500/20 px-2 py-0.2 text-[10px] font-bold text-sky-300 border border-sky-400/30">
                AI PM
              </span>
            </div>
            <span className="hidden md:inline-block text-[11px] text-slate-400">
              10 Lekcji & 15 Certyfikacji
            </span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            if (item.highlight) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black transition ${
                    active
                      ? "bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20"
                      : "bg-amber-400/15 text-amber-300 hover:bg-amber-400 hover:text-slate-950 border border-amber-400/30"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                  active
                    ? "bg-slate-800 text-amber-400 border border-slate-700"
                    : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile quick action + hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/lekcje/"
            className="flex items-center gap-1 rounded-lg bg-amber-400 px-2.5 py-1 text-xs font-extrabold text-slate-950 shadow-sm hover:bg-amber-300 transition"
          >
            <BookOpen className="h-3.5 w-3.5" />
            <span>10 Lekcji</span>
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-xl border border-slate-700 bg-slate-800 p-2 text-slate-300 hover:bg-slate-700 hover:text-white transition"
            aria-label="Menu nawigacji"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-800/80 bg-slate-950/95 p-3 rounded-b-2xl lg:hidden flex flex-col gap-1.5 animate-in slide-in-from-top-2">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition ${
                  active
                    ? "bg-amber-400 text-slate-950 font-bold"
                    : item.highlight
                    ? "bg-amber-400/10 text-amber-300 border border-amber-400/20"
                    : "text-slate-300 hover:bg-slate-850 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </div>
                {active && (
                  <span className="text-[10px] uppercase font-bold tracking-wider opacity-80">
                    Aktywna
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}

