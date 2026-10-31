"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  Volume2,
  Sparkles,
  ChevronRight,
  Clock,
  Award,
  MessageSquare,
  ShieldCheck,
  TrendingUp,
  Target,
  Code,
  Palette,
  ShoppingCart,
  FileCode,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";
import type { Lesson } from "@/lib/types";
import { useKurakSpeech } from "./KurakSpeechContext";
import KurakAvatar from "./KurakAvatar";

const ICONS_MAP: Record<string, React.ElementType> = {
  Sparkles,
  MessageSquare,
  FileCode,
  TrendingUp,
  Target,
  Code,
  Palette,
  ShoppingCart,
  ShieldCheck,
  Award,
};

export default function LessonsCatalogView({
  lessons,
  overview,
}: {
  lessons: Lesson[];
  overview: {
    title: string;
    subtitle: string;
    totalDurationMinutes: number;
    lessonsCount: number;
  };
}) {
  const { speak, isSpeaking } = useKurakSpeech();

  const handleSpeakOverview = () => {
    speak(
      `Witaj w Akademii Krok po Kroku! Przygotowałem dla Ciebie 10 kompleksowych lekcji, które przeprowadzą Cię od pierwszej rozmowy telefonicznej z klientem, przez zbieranie wymagań i żelazną kartę zakresu, po wyceny z 80 procentową marżą, zwinne sprinty i wdrożenia produkcyjne na Cloudflare bez tradycyjnych programistów!`
    );
  };

  return (
    <main className="flex flex-1 flex-col gap-6">
      {/* Pasek powrotu */}
      <nav aria-label="Nawigacja" className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs sm:text-sm">
        <Link
          href="/"
          className="flex items-center gap-1.5 font-semibold text-slate-400 hover:text-amber-400 transition"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Powrót do menu głównego</span>
        </Link>
        <span className="rounded-full bg-amber-400/20 px-3 py-1 text-xs font-bold text-amber-300 border border-amber-400/40">
          Program 10 Lekcji Praktycznych
        </span>
      </nav>

      {/* Hero sekcji z Niebieskim Kurakiem */}
      <div className="rounded-3xl border-2 border-amber-400/50 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-5 sm:p-7 shadow-2xl backdrop-blur">
        <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Ścieżka Praktyczna: Od Zera do Wdrożenia</span>
            </span>
            <h1 className="mt-1 text-2xl sm:text-3xl font-black text-slate-100">
              {overview.title}
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
              {overview.subtitle}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleSpeakOverview}
                className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-4 py-2 text-xs font-extrabold text-slate-950 shadow-md shadow-amber-400/20 hover:bg-amber-300 active:scale-95 transition"
              >
                <Volume2 className={`h-4 w-4 ${isSpeaking ? "animate-pulse" : ""}`} />
                <span>Posłuchaj wprowadzenia Kuraka</span>
              </button>

              <div className="flex items-center gap-2 rounded-xl bg-slate-900/80 px-3 py-1.5 text-xs text-slate-300 border border-slate-700/60 font-mono">
                <Clock className="h-3.5 w-3.5 text-amber-400" />
                <span>Łącznie ok. {overview.totalDurationMinutes} min wiedzy</span>
              </div>
            </div>
          </div>

          <div className="shrink-0 flex justify-center">
            <KurakAvatar size={115} isSpeaking={isSpeaking} />
          </div>
        </div>
      </div>

      {/* WYRÓŻNIONY MASTERCLASS: LEKCJA 2 (WYWIAD Z KLIENTEM) */}
      <div className="relative overflow-hidden rounded-3xl border-2 border-emerald-500/60 bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-950 p-5 sm:p-6 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="rounded bg-emerald-500 px-2 py-0.5 text-xs font-extrabold text-slate-950 uppercase tracking-wide">
                Wyróżniony Masterclass
              </span>
              <span className="text-xs text-emerald-300 font-semibold">Lekcja 2</span>
            </div>
            <h2 className="mt-1.5 text-lg sm:text-xl font-black text-slate-100">
              Kompletny Wywiad z Klientem: Zbieranie Zakresu i Zabezpieczenie Projektu
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg">
              Poznaj pełen zestaw 6 faz wywiadu, 25 autentycznych dialogów (Pytanie PM-a &rarr; Odpowiedź klienta &rarr; Reakcja pogłębiająca &rarr; Żelazny zapis w specyfikacji) oraz gotowy szablon Karty Zakresu wykluczający spory.
            </p>
          </div>

          <Link
            href="/lekcje/lekcja-2-wywiad-z-klientem-zakres/"
            className="flex items-center gap-2 shrink-0 rounded-2xl bg-emerald-500 px-5 py-3 text-xs sm:text-sm font-extrabold text-slate-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/20 active:scale-95 transition"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Otwórz Masterclass Wywiadu</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* LISTA 10 LEKCJI KROK PO KROKU */}
      <section aria-labelledby="lessons-list-heading" className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 id="lessons-list-heading" className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Kompletny Plan Lekcji (Od Lekcji 1 do 10)
          </h2>
          <span className="text-xs text-amber-400 font-semibold">
            Teoria • Dialogi z klientem • Testy
          </span>
        </div>

        <div className="grid grid-cols-1 gap-3.5">
          {lessons.map((lesson) => {
            const Icon = ICONS_MAP[lesson.iconName] || BookOpen;
            const isFeatured = lesson.number === 2;

            return (
              <Link
                key={lesson.id}
                href={`/lekcje/${lesson.id}/`}
                className={`group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border-2 p-4 sm:p-5 transition-all shadow-md active:scale-98 ${
                  isFeatured
                    ? "border-emerald-500/40 bg-slate-850/90 hover:border-emerald-400 hover:bg-slate-800"
                    : "border-slate-750 bg-slate-850/80 hover:border-amber-400/60 hover:bg-slate-800"
                }`}
              >
                <div className="flex items-start gap-3.5 min-w-0">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl font-black text-lg transition group-hover:scale-105 ${
                    isFeatured
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                      : "bg-slate-700/60 text-amber-400 border border-slate-600"
                  }`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="rounded bg-slate-750 px-2 py-0.5 font-mono text-[11px] font-bold text-amber-300 border border-slate-700">
                        Lekcja {lesson.number}
                      </span>
                      <span className="rounded bg-sky-500/15 px-2 py-0.5 text-[11px] font-bold text-sky-300 border border-sky-500/30">
                        {lesson.badge}
                      </span>
                      <span className="text-[11px] text-slate-400 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {lesson.durationMinutes} min
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-black text-slate-100 group-hover:text-amber-300 transition">
                      {lesson.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-300 leading-relaxed line-clamp-2">
                      {lesson.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs font-bold text-amber-400 group-hover:text-amber-300 shrink-0 self-end sm:self-center">
                  <span>Rozpocznij lekcję</span>
                  <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* STOPKA */}
      <footer className="mt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-800 pt-4 text-xs text-slate-500">
        <p>Projedudei • Akademia Nowoczesnego Zarządzania Projektami z AI</p>
        <Link href="/" className="hover:text-amber-400 transition font-semibold">
          Powrót do strony głównej
        </Link>
      </footer>
    </main>
  );
}

