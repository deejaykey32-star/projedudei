"use client";

import React from "react";
import { CheckCircle2, Lightbulb, XCircle, Volume2 } from "lucide-react";
import type { Question } from "@/lib/types";
import { useKurakSpeech } from "./KurakSpeechContext";

interface QuestionCardProps {
  question: Question;
  selectedIndex: number | null;
  onSelect: (index: number) => void;
}

const LETTERS = ["A", "B", "C", "D"];

export default function QuestionCard({
  question,
  selectedIndex,
  onSelect,
}: QuestionCardProps) {
  const { speak, isSpeaking } = useKurakSpeech();
  const answered = selectedIndex !== null;

  function optionClasses(index: number): string {
    const base =
      "flex w-full min-h-16 items-center gap-3.5 rounded-2xl border-2 p-4 text-left text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-400/50";
    if (!answered) {
      return `${base} border-slate-700/80 bg-slate-800/90 hover:border-amber-400/60 hover:bg-slate-800 active:border-amber-400 active:bg-slate-700/80`;
    }
    if (index === question.correctAnswerIndex) {
      return `${base} border-emerald-500 bg-emerald-950/40 text-emerald-100 shadow-md shadow-emerald-900/20`;
    }
    if (index === selectedIndex) {
      return `${base} border-rose-500 bg-rose-950/40 text-rose-100 shadow-md shadow-rose-900/20`;
    }
    return `${base} border-slate-800/60 bg-slate-800/30 text-slate-500 opacity-60`;
  }

  const handleReadQuestion = () => {
    const optionsText = question.options
      .map((opt, i) => `Wariant ${LETTERS[i]}: ${opt}`)
      .join(". ");
    speak(`Pytanie: ${question.text}. Opcje do wyboru: ${optionsText}`);
  };

  const handleReadExplanation = () => {
    const statusText =
      selectedIndex === question.correctAnswerIndex
        ? "Świetnie! To poprawna odpowiedź."
        : "Niestety błąd.";
    const tip = question.kurakTip ? `Porada Kuraka: ${question.kurakTip}` : "";
    speak(`${statusText} Wyjaśnienie: ${question.explanation}. ${tip}`);
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Karta pytania */}
      <div className="rounded-2xl border border-slate-700/80 bg-slate-800/60 p-5 shadow-lg backdrop-blur">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-lg font-bold leading-snug text-slate-100 sm:text-xl">
            {question.text}
          </h2>
          <button
            type="button"
            onClick={handleReadQuestion}
            className="flex shrink-0 items-center gap-1 rounded-xl bg-amber-400/15 px-2.5 py-1.5 text-xs font-semibold text-amber-300 hover:bg-amber-400/25 active:scale-95 transition"
            title="Przeczytaj pytanie i opcje głosem Kuraka"
          >
            <Volume2 className={`h-4 w-4 ${isSpeaking ? "animate-pulse" : ""}`} />
            <span className="hidden sm:inline">Czytaj</span>
          </button>
        </div>
      </div>

      {/* Opcje odpowiedzi */}
      <ul className="flex flex-col gap-3">
        {question.options.map((option, index) => {
          const isCorrect = answered && index === question.correctAnswerIndex;
          const isWrong = answered && index === selectedIndex && !isCorrect;
          return (
            <li key={index}>
              <button
                type="button"
                className={optionClasses(index)}
                onClick={() => onSelect(index)}
                disabled={answered}
                aria-pressed={index === selectedIndex}
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-bold transition ${
                    isCorrect
                      ? "bg-emerald-500 text-slate-950 font-extrabold"
                      : isWrong
                      ? "bg-rose-500 text-slate-950 font-extrabold"
                      : "bg-slate-700 text-slate-200"
                  }`}
                  aria-hidden
                >
                  {isCorrect ? (
                    <CheckCircle2 className="h-5 w-5" />
                  ) : isWrong ? (
                    <XCircle className="h-5 w-5" />
                  ) : (
                    LETTERS[index]
                  )}
                </span>
                <span className="flex-1 leading-snug">{option}</span>
              </button>
            </li>
          );
        })}
      </ul>

      {/* Wyjaśnienie po odpowiedzi */}
      {answered && (
        <div
          role="status"
          className={`relative rounded-2xl border-l-4 p-5 shadow-lg backdrop-blur animate-in fade-in slide-in-from-top-2 ${
            selectedIndex === question.correctAnswerIndex
              ? "border-emerald-500 bg-emerald-950/30"
              : "border-rose-500 bg-rose-950/30"
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <p
              className={`text-lg font-bold ${
                selectedIndex === question.correctAnswerIndex
                  ? "text-emerald-400"
                  : "text-rose-400"
              }`}
            >
              {selectedIndex === question.correctAnswerIndex
                ? "Dobra odpowiedź! 🎯"
                : "Błędna odpowiedź ⚠️"}
            </p>
            <button
              type="button"
              onClick={handleReadExplanation}
              className="flex items-center gap-1 rounded-lg bg-slate-800/80 px-2 py-1 text-xs text-amber-300 hover:bg-slate-700 transition"
              title="Odsłuchaj wyjaśnienie Kuraka"
            >
              <Volume2 className="h-3.5 w-3.5" />
              <span>Odsłuchaj</span>
            </button>
          </div>

          <p className="flex gap-2 text-sm leading-relaxed text-slate-200 sm:text-base">
            <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" aria-hidden />
            <span>{question.explanation}</span>
          </p>

          {question.kurakTip && (
            <div className="mt-3.5 flex items-start gap-2.5 rounded-xl border border-amber-400/30 bg-amber-400/10 p-3 text-xs leading-relaxed text-amber-200 sm:text-sm">
              <span className="text-base">💼</span>
              <div>
                <strong className="text-amber-400 font-semibold">Tip Kuraka PM-a: </strong>
                {question.kurakTip}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

