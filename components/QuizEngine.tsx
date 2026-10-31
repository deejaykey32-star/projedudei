"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, X, Volume2 } from "lucide-react";
import type { Category } from "@/lib/types";
import QuestionCard from "./QuestionCard";
import ResultsSummary from "./ResultsSummary";
import { useKurakSpeech } from "./KurakSpeechContext";

export default function QuizEngine({ category }: { category: Category }) {
  const { questions } = category;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const { speak } = useKurakSpeech();

  const question = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;
  const answered = selectedIndex !== null;

  // Auto read question prompt when changing questions
  useEffect(() => {
    if (question && !answered && !finished) {
      // speak the question
      speak(
        `Pytanie numer ${currentIndex + 1}: ${question.text}`,
        false // don't force bubble open if user wants silence
      );
    }
  }, [currentIndex, question, answered, finished, speak]);

  // Bring the next button into view when answered
  useEffect(() => {
    if (answered) {
      nextButtonRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [answered]);

  function handleSelect(index: number) {
    if (answered) return;
    setSelectedIndex(index);
    const isCorrect = index === question.correctAnswerIndex;
    if (isCorrect) {
      setScore((s) => s + 1);
    }
  }

  function handleNext() {
    if (isLast) {
      setFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setSelectedIndex(null);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleRetry() {
    setCurrentIndex(0);
    setSelectedIndex(null);
    setScore(0);
    setFinished(false);
  }

  if (questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center text-slate-400">
        <p>Brak pytań w tej kategorii.</p>
        <Link href="/" className="mt-4 text-amber-400 hover:underline">
          Wróć do strony głównej
        </Link>
      </div>
    );
  }

  if (finished) {
    return (
      <ResultsSummary
        categoryName={category.name}
        score={score}
        total={questions.length}
        onRetry={handleRetry}
      />
    );
  }

  const progress = ((currentIndex + (answered ? 1 : 0)) / questions.length) * 100;

  return (
    <main className="flex flex-1 flex-col gap-6">
      {/* Pasek nawigacji i postępu */}
      <header className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            aria-label="Zakończ quiz i wróć do menu"
            className="-ml-2 flex h-11 w-11 items-center justify-center rounded-xl text-slate-400 hover:bg-slate-800 hover:text-slate-100 transition active:scale-95"
          >
            <X className="h-6 w-6" />
          </Link>

          <div className="min-w-0 flex-1 text-center">
            <p className="truncate text-sm font-semibold text-slate-300">
              {category.name}
            </p>
            <span className="text-xs text-amber-400/80 font-medium">
              {category.badge}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="shrink-0 rounded-lg bg-slate-800 px-2.5 py-1 text-sm font-bold tabular-nums text-amber-400 border border-slate-700">
              {currentIndex + 1} / {questions.length}
            </span>
          </div>
        </div>

        {/* Pasek postępu */}
        <div
          className="h-2.5 w-full overflow-hidden rounded-full bg-slate-800 border border-slate-700/50"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
        >
          <div
            className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-300 transition-[width] duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* Karta pytania */}
      <QuestionCard
        key={question.id}
        question={question}
        selectedIndex={selectedIndex}
        onSelect={handleSelect}
      />

      {/* Przycisk przejścia do następnego pytania */}
      {answered && (
        <button
          ref={nextButtonRef}
          type="button"
          onClick={handleNext}
          className="mt-4 flex min-h-16 w-full items-center justify-center gap-2 rounded-2xl bg-amber-400 text-lg font-bold text-slate-950 shadow-lg shadow-amber-400/20 hover:bg-amber-300 active:scale-95 transition"
        >
          <span>{isLast ? "Zobacz podsumowanie wyników" : "Następne pytanie"}</span>
          <ArrowRight className="h-6 w-6" aria-hidden />
        </button>
      )}
    </main>
  );
}

