import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  ShieldCheck,
  Users,
  TrendingUp,
  Cpu,
  ArrowRight,
  BookOpen,
  Award,
  Clock,
  Sparkles,
} from "lucide-react";
import { getAllCourseSections } from "@/lib/data";

export const metadata: Metadata = {
  title: "Program Nauczania - 5 Filarów Certyfikacji & Praktyki AI | Projedudei",
  description:
    "Kompleksowy program przygotowujący do certyfikacji Project Manager, Scrum Master, Product Owner, Product Manager oraz stanowisk analitycznych z użyciem AI.",
};

const ICONS = [Briefcase, ShieldCheck, Users, TrendingUp, Cpu];

export default function CourseCatalogPage() {
  const sections = getAllCourseSections();

  return (
    <main className="flex flex-1 flex-col gap-6 max-w-6xl mx-auto w-full px-2 sm:px-4 pb-16">
      {/* Pasek nawigacyjny */}
      <nav aria-label="Nawigacja" className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs sm:text-sm">
        <div className="flex items-center gap-2 text-slate-400">
          <Link href="/" className="hover:text-amber-400 transition">
            Główna
          </Link>
          <span>/</span>
          <span className="font-bold text-amber-400">Program Kursu (5 Filarów)</span>
        </div>

        <Link
          href="/lekcje/"
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-amber-500/50 hover:text-amber-400 transition"
        >
          <BookOpen className="h-3.5 w-3.5 text-amber-400" />
          <span>Akademia Lekcji</span>
        </Link>
      </nav>

      {/* Nagłówek */}
      <section className="rounded-3xl border-2 border-sky-500/40 bg-gradient-to-br from-slate-900 via-sky-950/20 to-slate-950 p-6 sm:p-8 shadow-xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/20 px-3 py-1 text-xs font-bold text-sky-300 border border-sky-500/30 mb-3">
          <Sparkles className="h-3.5 w-3.5" />
          Oficjalne Standardy & Nowoczesne Narzędzia AI
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          5 Filarów Wiedzy & Certyfikacji
        </h1>
        <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-3xl leading-relaxed">
          Wybierz interesującą Cię ścieżkę zawodową. Każda sekcja zawiera wyczerpujące omówienie teorii, pułapek egzaminacyjnych, wzorów, zastosowań branżowych, sprawdzonych wykładów YouTube z bezpłatnym odtwarzaniem oraz testów próbnych.
        </p>
      </section>

      {/* Lista 5 sekcji */}
      <section className="grid grid-cols-1 gap-5">
        {sections.map((section, idx) => {
          const Icon = ICONS[idx % ICONS.length];
          return (
            <div
              key={section.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 space-y-4 hover:border-slate-700 transition shadow-lg"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/30 shrink-0">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-amber-400">
                      Sekcja {section.number}
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold text-white">
                      {section.title}
                    </h2>
                    <p className="text-xs text-slate-400 mt-0.5">{section.subtitle}</p>
                  </div>
                </div>

                <Link
                  href={`/kurs/${section.id}/`}
                  className="inline-flex items-center gap-2 rounded-xl bg-sky-600 hover:bg-sky-500 px-4 py-2 text-xs font-bold text-white transition shrink-0"
                >
                  <span>Otwórz Sekcję</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {section.description}
              </p>

              {/* Lista podsekcji w sekcji */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
                {section.subsections.map((sub) => (
                  <Link
                    key={sub.id}
                    href={`/kurs/${section.id}/${sub.id}/`}
                    className="group rounded-xl border border-slate-800 bg-slate-950/60 p-3.5 hover:border-amber-500/60 transition flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-bold text-white text-sm group-hover:text-amber-400 transition">
                          {sub.code}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 rounded bg-slate-800 px-1.5 py-0.5">
                          {sub.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-2">
                        {sub.description}
                      </p>
                    </div>

                    <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-800 text-[11px] font-semibold text-sky-400 group-hover:text-amber-400 transition">
                      <span>Przejdź do materiałów</span>
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}

