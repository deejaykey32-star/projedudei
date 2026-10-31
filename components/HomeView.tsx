"use client";

import React from "react";
import Link from "next/link";
import {
  Briefcase,
  ChevronRight,
  ShieldCheck,
  Users,
  Coins,
  Cpu,
  Sparkles,
  Volume2,
  Award,
  BookOpen,
  MessageSquareCode,
  type LucideIcon,
} from "lucide-react";
import type { Category } from "@/lib/types";
import KurakAvatar from "./KurakAvatar";
import { useKurakSpeech } from "./KurakSpeechContext";

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  "scrum-ai": ShieldCheck,
  "product-owner": Users,
  "client-negotiations": Coins,
  "ai-building": Cpu,
};

function questionCountLabel(n: number): string {
  if (n === 1) return "1 pytanie";
  const lastDigit = n % 10;
  const lastTwo = n % 100;
  if (lastDigit >= 2 && lastDigit <= 4 && (lastTwo < 12 || lastTwo > 14)) {
    return `${n} pytania certyfikacyjne`;
  }
  return `${n} pytań certyfikacyjnych`;
}

export default function HomeView({ categories }: { categories: Category[] }) {
  const { speak, isSpeaking } = useKurakSpeech();

  const handleSpeakIntro = () => {
    speak(
      "Dzień dobry! Z tej strony Kurak, Twój mentor i dyrektor zarządzania projektami AI. Trzymam w ręku aktówkę biznesową, bo czasy pisania kodu w starym stylu minęły. W tej aplikacji nauczysz się, jak rozmawiać z klientami, badać ich potrzeby i tworzyć kompletne aplikacje na zamówienie z użyciem sztucznej inteligencji. Wybierz moduł lub przejdź do symulatora klienta!"
    );
  };

  return (
    <main className="flex flex-1 flex-col gap-6">
      {/* Brand Header */}
      <header className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20">
            <Briefcase className="h-6 w-6" strokeWidth={2.5} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-black tracking-tight text-slate-100">
                Projedudei
              </h1>
              <span className="rounded-full bg-amber-400/20 px-2 py-0.5 text-xs font-bold text-amber-300 border border-amber-400/40">
                AI PM & Scrum
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Tworzenie apek z AI dla klienta bez starych zespołów koderów
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleSpeakIntro}
          className="flex items-center gap-1.5 rounded-full bg-slate-800 px-3 py-1.5 text-xs font-semibold text-amber-300 hover:bg-slate-700 border border-slate-700 transition active:scale-95"
          title="Posłuchaj powitania Kuraka"
        >
          <Volume2 className={`h-4 w-4 ${isSpeaking ? "animate-pulse" : ""}`} />
          <span className="hidden sm:inline">Powitanie Kuraka</span>
        </button>
      </header>

      {/* Hero Banner z Kurakiem trzymającym Aktówkę */}
      <section className="relative overflow-hidden rounded-3xl border-2 border-amber-400/50 bg-gradient-to-br from-slate-800/90 via-slate-900 to-slate-950 p-5 sm:p-6 shadow-2xl backdrop-blur">
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-3 text-center sm:text-left">
            <div className="inline-flex items-center justify-center sm:justify-start gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Nowa Era Project Managementu</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black leading-tight text-slate-100">
              Zastąp powolny software house zwinnością AI
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
              Dowiedz się, jak prowadzić warsztaty z klientem, generować
              architekturę z AI, wdrażać aplikacje na Cloudflare w dni zamiast
              miesięcy i przygotować się do certyfikacji PSM / PSPO / AI Builder.
            </p>
            <div className="mt-1 flex flex-wrap justify-center sm:justify-start gap-2">
              <Link
                href="/simulator"
                className="flex items-center gap-1.5 rounded-xl bg-amber-400 px-3.5 py-2 text-xs font-extrabold text-slate-950 shadow-md shadow-amber-400/20 hover:bg-amber-300 active:scale-95 transition"
              >
                <MessageSquareCode className="h-4 w-4" />
                <span>Symulator Klienta</span>
              </Link>
              <Link
                href="/exam"
                className="flex items-center gap-1.5 rounded-xl bg-slate-800 px-3.5 py-2 text-xs font-bold text-slate-200 border border-slate-700 hover:bg-slate-750 active:scale-95 transition"
              >
                <Award className="h-4 w-4 text-amber-400" />
                <span>Egzamin Próbny</span>
              </Link>
            </div>
          </div>

          <div className="shrink-0 flex justify-center">
            <KurakAvatar size={120} isSpeaking={isSpeaking} />
          </div>
        </div>
      </section>

      {/* Szybkie Kafelki Praktyczne */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Link
          href="/simulator"
          className="group flex items-center gap-4 rounded-2xl border-2 border-slate-700/80 bg-slate-800/80 p-4 transition-all hover:border-amber-400/70 hover:bg-slate-800 active:scale-98 shadow-md"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-500/15 text-sky-400 group-hover:scale-105 transition">
            <MessageSquareCode className="h-6 w-6" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-base font-bold text-slate-100 group-hover:text-amber-400 transition">
              Warsztat & Symulator Klienta
            </h3>
            <p className="text-xs text-slate-400">
              Realne sytuacje: mały budżet, Scope Creep, RODO i negocjacje.
            </p>
          </div>
          <ChevronRight className="h-5 w-5 text-slate-500 group-hover:text-amber-400 transition" />
        </Link>

        <Link
          href="/playbook"
          className="group flex items-center gap-4 rounded-2xl border-2 border-slate-700/80 bg-slate-800/80 p-4 transition-all hover:border-amber-400/70 hover:bg-slate-800 active:scale-98 shadow-md"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-400/15 text-amber-400 group-hover:scale-105 transition">
            <BookOpen className="h-6 w-6" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-base font-bold text-slate-100 group-hover:text-amber-400 transition">
              Playbook & Prompty AI PM
            </h3>
            <p className="text-xs text-slate-400">
              Szablony PRD, wzorce promptów, Cloudflare Pages i wyceny.
            </p>
          </div>
          <ChevronRight className="h-5 w-5 text-slate-500 group-hover:text-amber-400 transition" />
        </Link>
      </section>

      {/* Ścieżki Pytań Certyfikacyjnych */}
      <section aria-labelledby="categories-heading" className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2
            id="categories-heading"
            className="text-xs font-bold uppercase tracking-wider text-slate-400"
          >
            Ścieżki certyfikacji & quizy wiedzy
          </h2>
          <span className="text-xs text-slate-500">Wybierz moduł z Kurakiem</span>
        </div>

        <ul className="flex flex-col gap-3">
          {categories.map((category) => {
            const Icon = CATEGORY_ICONS[category.id] ?? Briefcase;
            return (
              <li key={category.id}>
                <Link
                  href={`/quiz/${category.id}`}
                  className="group flex min-h-24 items-center gap-4 rounded-2xl border-2 border-slate-700 bg-slate-800 p-4 transition-all hover:border-amber-400/70 hover:bg-slate-750 active:border-amber-400 active:scale-98 shadow-md focus-visible:border-amber-400 focus-visible:outline-none"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-400/15 text-amber-400 group-hover:scale-105 transition">
                    <Icon className="h-7 w-7" aria-hidden />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-base sm:text-lg font-bold leading-snug text-slate-100 group-hover:text-amber-400 transition">
                        {category.name}
                      </p>
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                      {category.shortDesc}
                    </p>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="rounded-md bg-slate-700/60 px-2 py-0.5 text-xs font-semibold text-slate-300">
                        {questionCountLabel(category.questions.length)}
                      </span>
                      <span className="text-xs font-medium text-amber-400/80">
                        {category.badge}
                      </span>
                    </div>
                  </div>
                  <ChevronRight
                    className="h-6 w-6 shrink-0 text-slate-500 group-hover:text-amber-400 transition"
                    aria-hidden
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Stopka */}
      <footer className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-slate-800 pt-4 text-xs text-slate-500">
        <p>Projedudei • Aplikacja wdrożona na Cloudflare Pages</p>
        <p className="flex items-center gap-1">
          <span>Przewodnik:</span>
          <strong className="text-amber-400">Kurak Project Manager 💼</strong>
        </p>
      </footer>
    </main>
  );
}
