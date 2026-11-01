import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  ArrowRight,
  HelpCircle,
  Briefcase,
  ShieldCheck,
  Users,
  TrendingUp,
  Cpu,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { getAllCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Centrum Quizów & Testów Sprawdzających | Projedudei",
  description:
    "Testy wiedzy z zakresu PMP, Scrum Master, Product Owner, Product Manager oraz PMI-ACP i PMI-PBA z natychmiastowym feedbackiem i wyjaśnieniami.",
};

const ICONS: Record<string, any> = {
  "project-manager": Briefcase,
  "scrum-master": ShieldCheck,
  "product-owner": Users,
  "product-manager": TrendingUp,
  "agile-analysis": Cpu,
};

export default function QuizIndexPage() {
  const categories = getAllCategories();

  return (
    <main className="flex flex-1 flex-col gap-6 max-w-5xl mx-auto w-full px-2 sm:px-4 pb-16">
      {/* Pasek nawigacyjny */}
      <nav aria-label="Nawigacja" className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs sm:text-sm">
        <div className="flex items-center gap-2 text-slate-400">
          <Link href="/" className="hover:text-amber-400 transition">
            Główna
          </Link>
          <span>/</span>
          <span className="font-bold text-amber-400">Centrum Quizów</span>
        </div>

        <Link
          href="/exam/"
          className="inline-flex items-center gap-1.5 rounded-lg border border-amber-500/40 bg-amber-500/10 px-3 py-1.5 text-xs font-bold text-amber-300 hover:bg-amber-500/20 transition"
        >
          <Award className="h-3.5 w-3.5" />
          <span>Pełny Egzamin Próbny</span>
        </Link>
      </nav>

      {/* Hero */}
      <section className="rounded-3xl border-2 border-amber-500/40 bg-gradient-to-br from-slate-900 via-amber-950/20 to-slate-950 p-6 sm:p-8 shadow-xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-300 border border-amber-500/30 mb-3">
          <Award className="h-3.5 w-3.5" />
          Symulator Pytań Egzaminacyjnych
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          Wybierz Kategorię Quizu
        </h1>
        <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl leading-relaxed">
          Sprawdź swoją wiedzę przed oficjalnymi egzaminami PMI, Scrum.org, Scrum Alliance, AXELOS czy AIPMM. Każde pytanie zawiera szczegółowe wyjaśnienie merytoryczne i poradę z aktówki niebieskiego Kuraka.
        </p>
      </section>

      {/* Lista kategorii quizów */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories.map((cat) => {
          const Icon = ICONS[cat.id] || HelpCircle;
          return (
            <Link
              key={cat.id}
              href={`/quiz/${cat.id}/`}
              className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-5 hover:border-amber-500/70 hover:bg-slate-900 transition flex flex-col justify-between shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400 group-hover:scale-105 transition">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-slate-800 px-2.5 py-1 text-[11px] font-mono text-slate-300 border border-slate-700">
                    {cat.questions.length} pytań
                  </span>
                </div>

                <h2 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition">
                  {cat.name}
                </h2>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  {cat.shortDesc}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-800 text-xs font-semibold text-amber-400">
                <span>Rozpocznij quiz</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </section>
    </main>
  );
}

