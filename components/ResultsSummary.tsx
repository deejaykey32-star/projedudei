"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Award, RotateCcw, Home, Sparkles, Volume2, Briefcase } from "lucide-react";
import confetti from "canvas-confetti";
import { useKurakSpeech } from "./KurakSpeechContext";
import KurakAvatar from "./KurakAvatar";

interface ResultsSummaryProps {
  categoryName: string;
  score: number;
  total: number;
  onRetry: () => void;
}

export default function ResultsSummary({
  categoryName,
  score,
  total,
  onRetry,
}: ResultsSummaryProps) {
  const percentage = Math.round((score / total) * 100);
  const isPassed = percentage >= 75;
  const { speak } = useKurakSpeech();

  useEffect(() => {
    if (isPassed) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#F59F00", "#FFD43B", "#38BDF8", "#10B981"],
        });
      } catch {
        // ignore
      }
    }

    const message = isPassed
      ? `Gratulacje! Twój wynik w module ${categoryName} to ${score} na ${total} punktów, czyli ${percentage} procent! Zdobywasz certyfikację modułową Kuraka z aktówką!`
      : `Ukończyłeś moduł ${categoryName} z wynikiem ${score} na ${total} punktów, czyli ${percentage} procent. Warto powtórzyć materiał, aby opanować sztukę zarządzania projektami AI do perfekcji!`;

    speak(message);
  }, [categoryName, score, total, percentage, isPassed, speak]);

  const handleSpeakSummary = () => {
    const text = `Podsumowanie modułu ${categoryName}: zdobyłeś ${score} z ${total} punktów, co daje ${percentage} procent. ${
      isPassed
        ? "Wspaniała robota! Twoja wiedza o AI i zarządzaniu projektami jest na wysokim poziomie!"
        : "Nie poddawaj się! Przećwicz pytania jeszcze raz z moimi wskazówkami!"
    }`;
    speak(text);
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center animate-in fade-in zoom-in-95 duration-300">
      <div className="relative">
        <KurakAvatar size={130} />
        <div className="absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-slate-950 shadow-lg">
          <Award className="h-6 w-6" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="inline-flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400">
          <Briefcase className="h-3.5 w-3.5" />
          <span>Raport Certyfikacyjny Kuraka</span>
        </span>
        <h2 className="text-2xl font-extrabold text-slate-100 sm:text-3xl">
          {categoryName}
        </h2>
        <p className="text-sm text-slate-400">
          {isPassed
            ? "Znakomity wynik! Jesteś gotów na realizację projektów z klientami!"
            : "Dobry trening! Powtórz test, aby utrwalić zagadnienia."}
        </p>
      </div>

      {/* Wynik */}
      <div className="flex w-full max-w-sm flex-col items-center justify-center rounded-2xl border-2 border-slate-700 bg-slate-800/80 p-6 shadow-xl backdrop-blur">
        <div className="text-5xl font-black tabular-nums text-amber-400">
          {percentage}%
        </div>
        <p className="mt-1 text-base font-semibold text-slate-300">
          {score} z {total} poprawnych odpowiedzi
        </p>

        <button
          type="button"
          onClick={handleSpeakSummary}
          className="mt-4 flex items-center gap-1.5 rounded-xl bg-amber-400/15 px-3 py-1.5 text-xs font-semibold text-amber-300 hover:bg-amber-400/25 transition active:scale-95"
        >
          <Volume2 className="h-4 w-4" />
          <span>Odsłuchaj werdykt Kuraka</span>
        </button>
      </div>

      {/* Akcje */}
      <div className="flex w-full max-w-sm flex-col gap-3">
        <button
          type="button"
          onClick={onRetry}
          className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-amber-400 text-base font-bold text-slate-950 shadow-lg shadow-amber-400/20 hover:bg-amber-300 active:scale-95 transition"
        >
          <RotateCcw className="h-5 w-5" />
          <span>Rozwiąż ponownie</span>
        </button>

        <Link
          href="/"
          className="flex min-h-14 items-center justify-center gap-2 rounded-2xl border-2 border-slate-700 bg-slate-800 text-base font-bold text-slate-200 hover:border-slate-500 hover:bg-slate-700 active:scale-95 transition"
        >
          <Home className="h-5 w-5" />
          <span>Wróć do menu głównego</span>
        </Link>
      </div>
    </div>
  );
}
