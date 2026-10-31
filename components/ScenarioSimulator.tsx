"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Volume2,
  Briefcase,
  TrendingUp,
  Smile,
  Zap,
  CheckCircle,
  AlertTriangle,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import type { ClientScenario, ScenarioOption } from "@/lib/types";
import { useKurakSpeech } from "./KurakSpeechContext";
import KurakAvatar from "./KurakAvatar";

export default function ScenarioSimulator({
  scenarios,
}: {
  scenarios: ClientScenario[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [metrics, setMetrics] = useState({
    clientSatisfaction: 70,
    projectMargin: 70,
    speed: 80,
  });
  const [completedScenarios, setCompletedScenarios] = useState<string[]>([]);
  const { speak, isSpeaking } = useKurakSpeech();

  const currentScenario = scenarios[currentIndex];
  const answered = selectedOptionId !== null;
  const selectedOption = currentScenario.options.find(
    (o) => o.id === selectedOptionId
  );

  const handleSpeakBrief = () => {
    speak(
      `Klient: ${currentScenario.clientName}, ${currentScenario.clientRole}. Sytuacja: ${currentScenario.brief}. Budżet: ${currentScenario.budget}. Czas: ${currentScenario.timeline}. Twoje wyzwanie: ${currentScenario.aiChallenge}`
    );
  };

  const handleSelectOption = (opt: ScenarioOption) => {
    if (answered) return;
    setSelectedOptionId(opt.id);

    // Apply metrics
    setMetrics((prev) => ({
      clientSatisfaction: Math.max(
        0,
        Math.min(100, prev.clientSatisfaction + opt.scoreDelta.clientSatisfaction)
      ),
      projectMargin: Math.max(
        0,
        Math.min(100, prev.projectMargin + opt.scoreDelta.projectMargin)
      ),
      speed: Math.max(0, Math.min(100, prev.speed + opt.scoreDelta.speed)),
    }));

    if (!completedScenarios.includes(currentScenario.id)) {
      setCompletedScenarios((prev) => [...prev, currentScenario.id]);
    }

    const verdictText = opt.isOptimal
      ? "Świetna decyzja PM-a!"
      : "Uwaga na ryzyko!";
    speak(
      `${verdictText} ${opt.feedback} Komentarz Kuraka: ${opt.kurakComment}`
    );
  };

  const handleNext = () => {
    if (currentIndex < scenarios.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedOptionId(null);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setMetrics({ clientSatisfaction: 70, projectMargin: 70, speed: 80 });
    setCompletedScenarios([]);
  };

  return (
    <main className="flex flex-1 flex-col gap-6">
      {/* Header */}
      <header className="flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-sm font-semibold text-slate-400 hover:text-amber-400 transition"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Powrót do akademii</span>
        </Link>
        <span className="rounded-full bg-amber-400/15 px-3 py-1 text-xs font-bold text-amber-300 border border-amber-400/30">
          Scenariusz {currentIndex + 1} z {scenarios.length}
        </span>
      </header>

      {/* KPI Dashboard */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 rounded-2xl border border-slate-700/80 bg-slate-800/80 p-3 sm:p-4 shadow-lg backdrop-blur">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-1 text-xs font-semibold text-sky-400">
            <Smile className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Klient</span>
          </div>
          <div className="text-lg sm:text-xl font-bold tabular-nums text-slate-100">
            {metrics.clientSatisfaction}%
          </div>
          <div className="h-1.5 w-full rounded-full bg-slate-700 mt-1 overflow-hidden">
            <div
              className="h-full bg-sky-400 transition-all duration-300"
              style={{ width: `${metrics.clientSatisfaction}%` }}
            />
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-1 text-xs font-semibold text-emerald-400">
            <TrendingUp className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Marża</span>
          </div>
          <div className="text-lg sm:text-xl font-bold tabular-nums text-slate-100">
            {metrics.projectMargin}%
          </div>
          <div className="h-1.5 w-full rounded-full bg-slate-700 mt-1 overflow-hidden">
            <div
              className="h-full bg-emerald-400 transition-all duration-300"
              style={{ width: `${metrics.projectMargin}%` }}
            />
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-1 text-xs font-semibold text-amber-400">
            <Zap className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Szybkość</span>
          </div>
          <div className="text-lg sm:text-xl font-bold tabular-nums text-slate-100">
            {metrics.speed}%
          </div>
          <div className="h-1.5 w-full rounded-full bg-slate-700 mt-1 overflow-hidden">
            <div
              className="h-full bg-amber-400 transition-all duration-300"
              style={{ width: `${metrics.speed}%` }}
            />
          </div>
        </div>
      </div>

      {/* Karta klienta i briefu */}
      <div className="rounded-2xl border-2 border-slate-700 bg-slate-800/90 p-5 sm:p-6 shadow-xl backdrop-blur">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-700 text-2xl shadow-inner">
              {currentScenario.clientAvatar}
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-100">
                {currentScenario.clientName}
              </h2>
              <p className="text-xs text-slate-400">{currentScenario.clientRole}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleSpeakBrief}
            className="flex items-center gap-1 rounded-xl bg-amber-400/20 px-3 py-1.5 text-xs font-bold text-amber-300 hover:bg-amber-400/30 transition active:scale-95"
            title="Odsłuchaj wypowiedź klienta głosem Kuraka"
          >
            <Volume2 className={`h-4 w-4 ${isSpeaking ? "animate-pulse" : ""}`} />
            <span>Odsłuchaj</span>
          </button>
        </div>

        {/* Wypowiedź klienta */}
        <div className="mt-4 rounded-xl bg-slate-900/80 p-4 border border-slate-700/60 text-sm sm:text-base leading-relaxed text-slate-200">
          <p className="italic">„{currentScenario.brief}”</p>
        </div>

        {/* Metadane projektu */}
        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <span className="rounded-lg bg-emerald-950/60 border border-emerald-700/40 px-2.5 py-1 font-semibold text-emerald-300">
            💰 Budżet klienta: {currentScenario.budget}
          </span>
          <span className="rounded-lg bg-sky-950/60 border border-sky-700/40 px-2.5 py-1 font-semibold text-sky-300">
            ⏱️ Czas: {currentScenario.timeline}
          </span>
          <span className="rounded-lg bg-amber-950/60 border border-amber-700/40 px-2.5 py-1 font-semibold text-amber-300">
            🎯 Cel: {currentScenario.learningOutcome}
          </span>
        </div>
      </div>

      {/* Wybór strategii PM-a */}
      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
          Twoja strategia jako AI Project Managera:
        </h3>

        <div className="flex flex-col gap-3">
          {currentScenario.options.map((option, idx) => {
            const isSelected = selectedOptionId === option.id;
            let btnStyle =
              "border-slate-700 bg-slate-800 hover:border-amber-400/60 hover:bg-slate-750";
            if (answered) {
              if (option.isOptimal) {
                btnStyle =
                  "border-emerald-500 bg-emerald-950/40 text-emerald-100";
              } else if (isSelected) {
                btnStyle = "border-rose-500 bg-rose-950/40 text-rose-100";
              } else {
                btnStyle = "border-slate-800 bg-slate-800/40 text-slate-500 opacity-50";
              }
            }

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => handleSelectOption(option)}
                disabled={answered}
                className={`flex min-h-16 w-full items-center gap-3 rounded-2xl border-2 p-4 text-left text-sm sm:text-base font-medium transition-all ${btnStyle}`}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-700 font-bold text-slate-200">
                  {idx + 1}
                </span>
                <span className="flex-1 leading-snug">{option.text}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Feedback i werdykt Kuraka z Aktówką */}
      {answered && selectedOption && (
        <div className="flex flex-col gap-4 rounded-2xl border-2 border-amber-400/60 bg-slate-900/90 p-5 shadow-2xl backdrop-blur animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-center gap-3">
            <KurakAvatar size={70} isSpeaking={isSpeaking} />
            <div className="flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Ocena Kuraka z Aktówką
              </span>
              <h4 className="text-base font-bold text-slate-100">
                {selectedOption.isOptimal ? (
                  <span className="text-emerald-400">
                    Wzorowe podejście do klienta! ✨
                  </span>
                ) : (
                  <span className="text-rose-400">
                    Ryzykowna strategia biznesowa ⚠️
                  </span>
                )}
              </h4>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-slate-200">
            {selectedOption.feedback}
          </p>

          <div className="rounded-xl border border-amber-400/30 bg-amber-400/10 p-3 text-xs sm:text-sm text-amber-200 leading-relaxed">
            <strong className="text-amber-400">Komentarz mentora Kuraka: </strong>
            {selectedOption.kurakComment}
          </div>

          {/* Następny scenariusz */}
          <div className="mt-2 flex gap-3">
            {currentIndex < scenarios.length - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-amber-400 font-bold text-slate-950 hover:bg-amber-300 transition active:scale-95"
              >
                <span>Następne spotkanie z klientem</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={handleReset}
                className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-amber-400 font-bold text-slate-950 hover:bg-amber-300 transition active:scale-95"
              >
                <RotateCcw className="h-4 w-4" />
                <span>Zacznij symulację od nowa</span>
              </button>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
