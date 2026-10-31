"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Award,
  Timer,
  CheckCircle,
  XCircle,
  ArrowRight,
  RotateCcw,
  Download,
  Share2,
  Volume2,
  Briefcase,
  Sparkles,
} from "lucide-react";
import confetti from "canvas-confetti";
import type { Question } from "@/lib/types";
import { useKurakSpeech } from "./KurakSpeechContext";
import KurakAvatar from "./KurakAvatar";

export default function ExamEngine({
  allQuestions,
}: {
  allQuestions: Question[];
}) {
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(900); // 15 minut
  const [isExamStarted, setIsExamStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [candidateName, setCandidateName] = useState("");
  const { speak } = useKurakSpeech();

  // Initialize random 12 questions
  const startExam = () => {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    setExamQuestions(shuffled.slice(0, 12));
    setCurrentIndex(0);
    setUserAnswers({});
    setTimeLeft(900);
    setIsFinished(false);
    setIsExamStarted(true);
    speak(
      "Egzamin próbny AI Project Mastera rozpoczęty! Masz 15 minut na 12 pytań certyfikacyjnych. Próg zdawalności to 80 procent. Powodzenia!"
    );
  };

  // Timer
  useEffect(() => {
    if (!isExamStarted || isFinished) return;
    if (timeLeft <= 0) {
      setIsFinished(true);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [isExamStarted, isFinished, timeLeft]);

  const currentQ = examQuestions[currentIndex];
  const selectedAnswer = currentQ ? userAnswers[currentQ.id] : undefined;

  const handleSelectAnswer = (idx: number) => {
    if (!currentQ || isFinished) return;
    setUserAnswers((prev) => ({ ...prev, [currentQ.id]: idx }));
  };

  const handleNext = () => {
    if (currentIndex < examQuestions.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setIsFinished(true);
    }
  };

  // Calculate score
  const score = examQuestions.reduce((acc, q) => {
    return userAnswers[q.id] === q.correctAnswerIndex ? acc + 1 : acc;
  }, 0);
  const total = examQuestions.length || 12;
  const percentage = Math.round((score / total) * 100);
  const passed = percentage >= 80;

  useEffect(() => {
    if (isFinished) {
      if (passed) {
        try {
          confetti({
            particleCount: 100,
            spread: 80,
            origin: { y: 0.5 },
          });
        } catch {
          // ignore
        }
      }
      speak(
        isFinished && passed
          ? `Wspaniale! Zdałeś Egzamin Certyfikacyjny AI Project Mastera z wynikiem ${percentage} procent! Oto Twój oficjalny certyfikat z podpisem Kuraka!`
          : `Koniec egzaminu. Uzyskałeś ${percentage} procent. Próg wynosi 80 procent. Spróbuj ponownie po utrwaleniu materiału!`
      );
    }
  }, [isFinished, passed, percentage, speak]);

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  if (!isExamStarted) {
    return (
      <main className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
        <KurakAvatar size={140} />
        <div className="flex flex-col gap-2 max-w-md">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Certyfikacja Praktyczna
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
            Oficjalny Egzamin Próbny AI Project Master
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            Sprawdź swoją wiedzę ze Scruma, Product Managementu, Vibe Codingu,
            architektury chmurowej i negocjacji z klientem.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 w-full max-w-sm text-left text-xs sm:text-sm">
          <div className="rounded-xl border border-slate-700 bg-slate-800/80 p-3">
            <span className="text-slate-400 block">Liczba pytań:</span>
            <strong className="text-slate-100 text-base">12 losowych</strong>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-800/80 p-3">
            <span className="text-slate-400 block">Czas trwania:</span>
            <strong className="text-slate-100 text-base">15 minut</strong>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-800/80 p-3">
            <span className="text-slate-400 block">Próg zdania:</span>
            <strong className="text-emerald-400 text-base">80% (10 pkt)</strong>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-800/80 p-3">
            <span className="text-slate-400 block">Nagroda:</span>
            <strong className="text-amber-400 text-base">Certyfikat Kuraka</strong>
          </div>
        </div>

        <div className="w-full max-w-sm flex flex-col gap-3">
          <input
            type="text"
            placeholder="Wpisz swoje Imię i Nazwisko do certyfikatu..."
            value={candidateName}
            onChange={(e) => setCandidateName(e.target.value)}
            className="rounded-2xl border-2 border-slate-700 bg-slate-800 px-4 py-3 text-center text-sm font-semibold text-slate-100 placeholder-slate-500 focus:border-amber-400 focus:outline-none"
          />

          <button
            type="button"
            onClick={startExam}
            className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-amber-400 font-bold text-slate-950 shadow-lg shadow-amber-400/20 hover:bg-amber-300 transition active:scale-95"
          >
            <Sparkles className="h-5 w-5" />
            <span>Rozpocznij egzamin z Kurakiem</span>
          </button>
        </div>
      </main>
    );
  }

  if (isFinished) {
    return (
      <main className="flex flex-1 flex-col items-center gap-6 text-center animate-in fade-in duration-300">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Wynik Egzaminu
          </span>
          <h2 className="text-3xl font-black text-slate-100">
            {passed ? "Gratulacje! Egzamin Zdany! 🎓" : "Egzamin Niezdany 📚"}
          </h2>
          <p className="text-sm text-slate-400">
            Twój wynik: {score} na {total} punktów ({percentage}%)
          </p>
        </div>

        {/* Certyfikat */}
        {passed && (
          <div className="w-full max-w-lg rounded-3xl border-4 border-amber-400 bg-gradient-to-b from-slate-900 to-slate-950 p-6 sm:p-8 text-center shadow-2xl relative overflow-hidden">
            {/* Ozdobne rogi certyfikatu */}
            <div className="absolute top-2 left-2 text-amber-400/40 text-xl font-serif">✦</div>
            <div className="absolute top-2 right-2 text-amber-400/40 text-xl font-serif">✦</div>
            <div className="absolute bottom-2 left-2 text-amber-400/40 text-xl font-serif">✦</div>
            <div className="absolute bottom-2 right-2 text-amber-400/40 text-xl font-serif">✦</div>

            <div className="flex justify-center mb-3">
              <KurakAvatar size={90} />
            </div>

            <div className="text-xs font-semibold uppercase tracking-widest text-amber-400">
              Certyfikat Biegłości AI-First Development
            </div>
            <h3 className="mt-2 text-xl sm:text-2xl font-black text-slate-100 tracking-tight">
              Certified AI Project Master & Scrum Builder
            </h3>

            <p className="mt-4 text-xs text-slate-400">Niniejszym zaświadcza się, że:</p>
            <div className="mt-1 text-lg sm:text-xl font-black text-amber-300 underline decoration-amber-400/40 underline-offset-4">
              {candidateName || "Adept Zarządzania AI"}
            </div>

            <p className="mt-3 text-xs leading-relaxed text-slate-300">
              Opanował(a) umiejętność prowadzenia rozmów z klientami, tworzenia aplikacji na zamówienie z użyciem modeli AI (Vibe Coding, Cloudflare) bez tradycyjnych zespołów programistycznych oraz wdrażania standardów Agile & Scrum.
            </p>

            <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-4 text-left text-xs">
              <div>
                <span className="text-slate-500 block">Data wydania:</span>
                <span className="text-slate-300 font-medium">
                  {new Date().toLocaleDateString("pl-PL")}
                </span>
              </div>
              <div className="text-right">
                <span className="text-slate-500 block">Weryfikator:</span>
                <span className="text-amber-400 font-bold flex items-center gap-1 justify-end">
                  <Briefcase className="h-3 w-3" />
                  Kurak PM Lead
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Akcje */}
        <div className="flex w-full max-w-sm flex-col gap-3">
          <button
            type="button"
            onClick={startExam}
            className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-amber-400 font-bold text-slate-950 hover:bg-amber-300 transition active:scale-95"
          >
            <RotateCcw className="h-5 w-5" />
            <span>Podejdź do egzaminu ponownie</span>
          </button>

          <Link
            href="/"
            className="flex min-h-14 items-center justify-center gap-2 rounded-2xl border-2 border-slate-700 bg-slate-800 font-bold text-slate-200 hover:bg-slate-700 transition active:scale-95"
          >
            <span>Wróć do menu głównego</span>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-1 flex-col gap-6">
      {/* Pasek postępu egzaminu */}
      <header className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <span className="rounded-lg bg-amber-400/20 px-2.5 py-1 text-xs font-bold text-amber-300 border border-amber-400/30">
            Pytanie {currentIndex + 1} / {examQuestions.length}
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm font-bold text-slate-200">
          <Timer className="h-4 w-4 text-amber-400" />
          <span className="tabular-nums">{formatTime(timeLeft)}</span>
        </div>
      </header>

      {/* Pytanie */}
      {currentQ && (
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-slate-700/80 bg-slate-800/80 p-5 shadow-lg">
            <h2 className="text-lg sm:text-xl font-bold leading-snug text-slate-100">
              {currentQ.text}
            </h2>
          </div>

          <ul className="flex flex-col gap-3">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedAnswer === idx;
              return (
                <li key={idx}>
                  <button
                    type="button"
                    onClick={() => handleSelectAnswer(idx)}
                    className={`flex min-h-16 w-full items-center gap-3.5 rounded-2xl border-2 p-4 text-left text-sm sm:text-base font-medium transition ${
                      isSelected
                        ? "border-amber-400 bg-amber-400/15 text-amber-200 shadow-md"
                        : "border-slate-700 bg-slate-800 hover:border-slate-500"
                    }`}
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-sm font-bold ${
                        isSelected
                          ? "bg-amber-400 text-slate-950"
                          : "bg-slate-700 text-slate-200"
                      }`}
                    >
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="flex-1 leading-snug">{opt}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={handleNext}
            disabled={selectedAnswer === undefined}
            className="mt-4 flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-amber-400 font-bold text-slate-950 hover:bg-amber-300 disabled:opacity-40 transition active:scale-95"
          >
            <span>
              {currentIndex === examQuestions.length - 1
                ? "Zakończ egzamin i sprawdź wynik"
                : "Następne pytanie"}
            </span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </main>
  );
}

