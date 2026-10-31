"use client";

import React from "react";
import Link from "next/link";
import {
  Briefcase,
  ChevronRight,
  ShieldCheck,
  Users,
  TrendingUp,
  Cpu,
  Sparkles,
  Volume2,
  Award,
  BookOpen,
  MessageSquareCode,
  Youtube,
  ExternalLink,
  CheckCircle,
  HelpCircle,
  Download,
  type LucideIcon,
} from "lucide-react";
import type { Category, CourseSection } from "@/lib/types";
import KurakAvatar from "./KurakAvatar";
import { useKurakSpeech } from "./KurakSpeechContext";

const SECTION_ICONS: Record<string, LucideIcon> = {
  "project-manager": Briefcase,
  "scrum-master": ShieldCheck,
  "product-owner": Users,
  "product-manager": TrendingUp,
  "agile-analysis": Cpu,
};

export default function HomeView({
  categories,
  sections = [],
}: {
  categories: Category[];
  sections?: CourseSection[];
}) {
  const { speak, isSpeaking } = useKurakSpeech();

  const handleSpeakIntro = () => {
    speak(
      "Dzień dobry! Z tej strony niebieski Kurak, Twój mentor i dyrektor zarządzania projektami AI. Trzymam w ręku elegancką aktówkę biznesową, a nasz kurs podzielony jest na pięć profesjonalnych sekcji: Project Manager, Scrum Master, Product Owner, Product Manager oraz stanowiska analityczno-zwinne. Każdy temat zawiera teorię certyfikacyjną, praktyczne use case'y z klientami oraz polecane materiały wideo na YouTube. Kliknij sekcję, abyśmy razem przeszli przez materiał!"
    );
  };

  return (
    <main className="flex flex-1 flex-col gap-6">
      {/* Brand Header: bez słowa "starych" */}
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
              <span className="rounded-full bg-sky-500/20 px-2 py-0.5 text-xs font-bold text-sky-300 border border-sky-400/30">
                AI PM & Scrum Academy
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Tworzenie apek z AI dla klienta bez zespołów koderów
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleSpeakIntro}
          className="flex items-center gap-1.5 rounded-full bg-slate-800 px-3 py-1.5 text-xs font-semibold text-amber-300 hover:bg-slate-700 border border-slate-700 transition active:scale-95"
          title="Posłuchaj powitania niebieskiego Kuraka"
        >
          <Volume2 className={`h-4 w-4 ${isSpeaking ? "animate-pulse" : ""}`} />
          <span className="hidden sm:inline">Powitanie Kuraka</span>
        </button>
      </header>

      {/* Hero Banner z NIEBIESKIM Kurakiem trzymającym Aktówkę */}
      <section className="relative overflow-hidden rounded-3xl border-2 border-sky-500/40 bg-gradient-to-br from-slate-800/90 via-slate-900 to-slate-950 p-5 sm:p-6 shadow-2xl backdrop-blur">
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-3 text-center sm:text-left">
            <div className="inline-flex items-center justify-center sm:justify-start gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Kompletny Program Edukacyjno-Certyfikacyjny</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black leading-tight text-slate-100">
              Niebieski Kurak prowadzi Cię przez certyfikacje i praktykę z AI
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
              PMP, PRINCE2, IPMA, CAPM, PSM, CSM, DASSM, PSPO, CSPO, SPOC, CPM,
              Pragmatic PMC, PMI-ACP i PMI-PBA – teoria, praktyczne use case&apos;y,
              materiały YouTube i testy sprawdzające.
            </p>
            <div className="mt-1 flex flex-wrap justify-center sm:justify-start gap-2">
              <Link
                href="/pobierz/"
                className="flex items-center gap-1.5 rounded-xl bg-emerald-500 px-3.5 py-2 text-xs font-extrabold text-slate-950 shadow-md shadow-emerald-500/20 hover:bg-emerald-400 active:scale-95 transition"
              >
                <Download className="h-4 w-4" />
                <span>Pobierz APK / iOS / PWA</span>
              </Link>
              <Link
                href="/simulator/"
                className="flex items-center gap-1.5 rounded-xl bg-amber-400 px-3.5 py-2 text-xs font-extrabold text-slate-950 shadow-md shadow-amber-400/20 hover:bg-amber-300 active:scale-95 transition"
              >
                <MessageSquareCode className="h-4 w-4" />
                <span>Symulator Klienta</span>
              </Link>
              <Link
                href="/exam/"
                className="flex items-center gap-1.5 rounded-xl bg-slate-800 px-3.5 py-2 text-xs font-bold text-slate-200 border border-slate-700 hover:bg-slate-750 active:scale-95 transition"
              >
                <Award className="h-4 w-4 text-amber-400" />
                <span>Egzamin Próbny</span>
              </Link>
            </div>
          </div>

          <div className="shrink-0 flex justify-center">
            <KurakAvatar size={125} isSpeaking={isSpeaking} />
          </div>
        </div>
      </section>

      {/* Szybkie Kafelki Praktyczne */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Link
          href="/simulator/"
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
              Negocjacje MVP, budżet 25k PLN, Scope Creep, RODO i wdrożenia.
            </p>
          </div>
          <ChevronRight className="h-5 w-5 text-slate-500 group-hover:text-amber-400 transition" />
        </Link>

        <Link
          href="/playbook/"
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
              Szablony PRD, spec-driven development i Cloudflare Pages.
            </p>
          </div>
          <ChevronRight className="h-5 w-5 text-slate-500 group-hover:text-amber-400 transition" />
        </Link>
      </section>

      {/* Baner pobierania wersji mobilnych */}
      <section className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-3xl border-2 border-emerald-500/50 bg-gradient-to-r from-emerald-950/40 via-slate-850 to-slate-900 p-5 shadow-lg backdrop-blur">
        <div className="flex items-center gap-3.5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400">
            <Download className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-xs font-bold text-emerald-300">
                Wersja Mobilna
              </span>
              <span className="text-xs text-slate-400">Android • iOS • PWA</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-100 mt-0.5">
              Pobierz aplikację na telefon lub tablet
            </h3>
            <p className="text-xs text-slate-400">
              Pakiety APK, AAB (Google Play), iOS IPA, PWA i ZIP do nauki offline z Kurakiem.
            </p>
          </div>
        </div>

        <Link
          href="/pobierz/"
          className="flex items-center gap-1.5 shrink-0 rounded-2xl bg-emerald-500 px-4 py-2.5 text-xs font-extrabold text-slate-950 shadow-md shadow-emerald-500/20 hover:bg-emerald-400 active:scale-95 transition"
        >
          <span>Pobierz pakiety</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </section>

      {/* 5 GŁÓWNYCH SEKCJI KURSU */}
      <section aria-labelledby="curriculum-heading" className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2
            id="curriculum-heading"
            className="text-xs font-bold uppercase tracking-wider text-slate-400"
          >
            5 Filarów Wiedzy & Certyfikacji (Program Główny)
          </h2>
          <span className="text-xs text-amber-400 font-semibold">
            Teoria • Use Cases • YouTube • Quizy
          </span>
        </div>

        <div className="flex flex-col gap-4">
          {sections.map((section) => {
            const Icon = SECTION_ICONS[section.id] ?? Briefcase;
            return (
              <div
                key={section.id}
                className="flex flex-col gap-3 rounded-3xl border-2 border-slate-700/80 bg-slate-800/90 p-5 shadow-lg backdrop-blur"
              >
                {/* Nagłówek sekcji */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-400">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-slate-700 px-2 py-0.5 text-xs font-mono font-bold text-amber-300">
                          Sekcja {section.number}
                        </span>
                        <h3 className="text-lg sm:text-xl font-black text-slate-100">
                          {section.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-300 mt-0.5">
                        {section.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {section.description}
                </p>

                {/* Lista podsekcji / certyfikacji w klikalnych pigułkach */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {section.subsections.map((sub) => (
                    <Link
                      key={sub.id}
                      href={`/kurs/${section.id}/${sub.id}/`}
                      className="group/pill inline-flex items-center gap-1.5 rounded-lg bg-slate-900/90 border border-slate-700/70 px-2.5 py-1 text-xs font-semibold text-slate-200 hover:border-amber-400 hover:bg-slate-850 hover:text-white transition active:scale-95 shadow-sm"
                      title={`Przejdź do pełnego modułu: ${sub.title}`}
                    >
                      <strong className="text-amber-400 group-hover/pill:text-amber-300">{sub.code}</strong>
                      <span className="text-slate-400 group-hover/pill:text-slate-200">({sub.title.split("(")[0].trim()})</span>
                      <ChevronRight className="h-3 w-3 text-slate-500 group-hover/pill:text-amber-400" />
                    </Link>
                  ))}
                </div>

                {/* Przyciski akcji: Teoria & Use Cases vs Quiz */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-2 border-t border-slate-700/60">
                  <Link
                    href={`/kurs/${section.id}/`}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-sky-500/20 border border-sky-400/40 px-4 py-2.5 text-xs font-bold text-sky-200 hover:bg-sky-500/30 transition active:scale-95"
                  >
                    <BookOpen className="h-4 w-4 text-sky-400" />
                    <span>Otwórz teorię, Use Cases i wideo YouTube</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href={`/quiz/${section.id}/`}
                    className="flex items-center justify-center gap-1.5 rounded-xl bg-amber-400 px-4 py-2.5 text-xs font-extrabold text-slate-950 hover:bg-amber-300 shadow-md shadow-amber-400/10 transition active:scale-95"
                  >
                    <HelpCircle className="h-4 w-4" />
                    <span>Quiz z Kurakiem</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stopka */}
      <footer className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-slate-800 pt-4 text-xs text-slate-500">
        <p>Projedudei • Aplikacja wdrożona na Cloudflare Pages</p>
        <p className="flex items-center gap-1.5">
          <span>Twój przewodnik:</span>
          <strong className="text-sky-400 font-bold">Niebieski Kurak PM 💼</strong>
        </p>
      </footer>
    </main>
  );
}
