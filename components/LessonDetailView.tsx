"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Volume2,
  Briefcase,
  Sparkles,
  Award,
  BookOpen,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Lightbulb,
  Copy,
  Check,
  ChevronRight,
  ShieldCheck,
  Clock,
  Layers,
  MessageSquare,
  FileText,
  UserCheck,
  Target,
  ArrowRight,
  ChevronDown,
  Terminal,
} from "lucide-react";
import type { Lesson, ClientInterviewDialogue } from "@/lib/types";
import { useKurakSpeech } from "./KurakSpeechContext";
import KurakAvatar from "./KurakAvatar";

export default function LessonDetailView({
  lesson,
  allLessons,
}: {
  lesson: Lesson;
  allLessons: Lesson[];
}) {
  const { speak, isSpeaking } = useKurakSpeech();
  const [copiedPromptIndex, setCopiedPromptIndex] = useState<number | null>(null);
  const [copiedTemplate, setCopiedTemplate] = useState<boolean>(false);
  const [selectedPhase, setSelectedPhase] = useState<string>("all");
  const [activeDialogueIndex, setActiveDialogueIndex] = useState<number | null>(null);

  // Quiz state
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  // Znajdź poprzednią i następną lekcję
  const currentIndex = allLessons.findIndex((l) => l.id === lesson.id);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  const handleSpeakOverview = () => {
    let text = `Lekcja numer ${lesson.number}: ${lesson.title}. Cel lekcji: ${lesson.objective}. `;
    text += `Główne kroki do opanowania: ${lesson.steps.map((s) => s.title).join(", ")}. `;
    if (lesson.clientInterviewSuite) {
      text += `Lekcja zawiera kompleksowy warsztat wywiadu z klientem i ustalania zakresu projektu z 25 szczegółowymi dialogami. `;
    }
    text += `Podsumowanie Kuraka: ${lesson.kurakLessonTip}`;
    speak(text);
  };

  const copyToClipboard = (text: string, index?: number) => {
    navigator.clipboard.writeText(text);
    if (index !== undefined) {
      setCopiedPromptIndex(index);
      setTimeout(() => setCopiedPromptIndex(null), 2500);
    } else {
      setCopiedTemplate(true);
      setTimeout(() => setCopiedTemplate(null as unknown as boolean), 2500);
    }
  };

  const handleSelectOption = (idx: number) => {
    setSelectedAnswer(idx);
    setShowExplanation(true);
  };

  const allPhases = lesson.clientInterviewSuite?.phases || [];
  const displayedDialogues: { dialogue: ClientInterviewDialogue; phaseName: string }[] = [];
  if (lesson.clientInterviewSuite) {
    lesson.clientInterviewSuite.phases.forEach((p) => {
      if (selectedPhase === "all" || selectedPhase === p.phaseName) {
        p.dialogues.forEach((d) => {
          displayedDialogues.push({ dialogue: d, phaseName: p.phaseName });
        });
      }
    });
  }

  return (
    <main className="flex flex-1 flex-col gap-6 max-w-7xl mx-auto w-full px-2 sm:px-4 pb-16">
      {/* Pasek nawigacji okruszkowej (Breadcrumbs) */}
      <nav aria-label="Nawigacja" className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs sm:text-sm">
        <div className="flex items-center gap-2 text-slate-400">
          <Link href="/" className="hover:text-amber-400 transition">
            Główna
          </Link>
          <span>/</span>
          <Link href="/lekcje/" className="hover:text-amber-400 transition">
            Akademia Krok po Kroku
          </Link>
          <span>/</span>
          <span className="font-bold text-amber-400 truncate max-w-[180px] sm:max-w-none">
            Lekcja {lesson.number}
          </span>
        </div>

        <Link
          href="/lekcje/"
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-amber-500/50 hover:text-amber-400 transition"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Katalog lekcji
        </Link>
      </nav>

      {/* Główny Baner Lekcji */}
      <section className="relative overflow-hidden rounded-2xl border border-sky-500/30 bg-gradient-to-br from-slate-900 via-sky-950/20 to-slate-950 p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-sky-500/20 px-3 py-1 text-xs font-bold text-sky-400 border border-sky-500/30">
                Lekcja {lesson.number} z {allLessons.length}
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300 border border-slate-700">
                {lesson.category}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                <Clock className="h-3.5 w-3.5 text-amber-400" />
                {lesson.durationMinutes} minut nauki
              </span>
              <span className="rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-semibold text-amber-300 border border-amber-500/30">
                {lesson.badge}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              {lesson.title}
            </h1>

            <p className="text-base text-slate-300 max-w-3xl leading-relaxed">
              {lesson.shortDesc}
            </p>

            <div className="flex items-start gap-3 rounded-xl border border-sky-500/20 bg-sky-950/30 p-3.5 text-xs sm:text-sm text-sky-200">
              <Target className="h-5 w-5 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white">Cel lekcji: </span>
                {lesson.objective}
              </div>
            </div>
          </div>

          {/* Kurak Asystent Lektora */}
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-slate-900/80 border border-slate-800 rounded-2xl p-4 w-full lg:w-auto shadow-md">
            <KurakAvatar isSpeaking={isSpeaking} size={90} />
            <div className="text-center sm:text-left space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400">Lektor Kurak PM</div>
              <p className="text-xs text-slate-400 max-w-[200px]">Posłuchaj wyjaśnienia lekcji i praktycznych wskazówek</p>
              <button
                onClick={handleSpeakOverview}
                className="mt-2 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-3.5 py-2 text-xs font-bold text-slate-950 hover:from-amber-400 hover:to-amber-500 transition shadow-sm w-full justify-center"
              >
                <Volume2 className="h-4 w-4" />
                {isSpeaking ? "Kurak czyta na głos..." : "Odczytaj lekcję"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Kroki Lekcji Krok po Kroku */}
      <section className="space-y-6">
        <div className="flex items-center gap-2.5">
          <BookOpen className="h-5 w-5 text-amber-400" />
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Program Lekcji Krok po Kroku ({lesson.steps.length} etapów)
          </h2>
        </div>

        <div className="space-y-6">
          {lesson.steps.map((step, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:p-7 space-y-4 hover:border-slate-700 transition"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-500/20 text-sm font-bold text-sky-400 border border-sky-500/30">
                  {idx + 1}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {step.title}
                </h3>
              </div>

              <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed pl-0 sm:pl-11">
                {step.explanation.map((par, pIdx) => (
                  <p key={pIdx}>{par}</p>
                ))}
              </div>

              {/* Praktyczna reguła / Złota zasada */}
              {step.practicalRule && (
                <div className="sm:ml-11 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs sm:text-sm text-amber-200">
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-amber-300 block mb-1">
                        Złota Zasada PM-a & Klucze Wdrożenia:
                      </span>
                      <span>{step.practicalRule}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Przykładowy Prompt AI dla PM-a */}
              {step.aiPromptExample && (
                <div className="sm:ml-11 rounded-xl border border-sky-500/30 bg-slate-950 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wide">
                      <Terminal className="h-4 w-4" />
                      Gotowy Prompt AI do wykorzystania w projekcie
                    </div>
                    <button
                      onClick={() => copyToClipboard(step.aiPromptExample || "", idx)}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-2.5 py-1 text-xs text-slate-300 hover:border-sky-500 hover:text-white transition"
                    >
                      {copiedPromptIndex === idx ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Skopiowano!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>Kopiuj</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="text-xs sm:text-sm text-sky-200 font-mono overflow-x-auto whitespace-pre-wrap bg-slate-900/90 p-3 rounded-lg border border-slate-800">
                    {step.aiPromptExample}
                  </pre>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* DEDYKOWANY WARSZTAT: WYWIAD Z KLIENTEM I ŻELAZNA KARTA ZAKRESU (jeśli obecny w lekcji, np. Lekcja 2) */}
      {lesson.clientInterviewSuite && (
        <section className="space-y-6 pt-4 border-t border-slate-800">
          <div className="rounded-2xl border-2 border-amber-500/40 bg-gradient-to-br from-slate-900 via-amber-950/20 to-slate-950 p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-300 border border-amber-500/30 mb-2">
                  <Briefcase className="h-3.5 w-3.5" />
                  Główny Warsztat Biznesowy: Scenariusze z Życia PM-a
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Kompletny Wywiad z Klientem & Pytania Diagnostyczne
                </h2>
                <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-4xl">
                  {lesson.clientInterviewSuite.overview}
                </p>
              </div>
            </div>

            {/* Zakładki / Filtry Faz Wywiadu */}
            <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-4">
              <button
                onClick={() => setSelectedPhase("all")}
                className={`rounded-lg px-3.5 py-2 text-xs font-semibold transition ${
                  selectedPhase === "all"
                    ? "bg-amber-500 text-slate-950 shadow-md"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                Wszystkie Fazy ({displayedDialogues.length})
              </button>
              {allPhases.map((phase, pIdx) => (
                <button
                  key={pIdx}
                  onClick={() => setSelectedPhase(phase.phaseName)}
                  className={`rounded-lg px-3.5 py-2 text-xs font-semibold transition ${
                    selectedPhase === phase.phaseName
                      ? "bg-amber-500 text-slate-950 shadow-md"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  Faza {pIdx + 1}: {phase.phaseName} ({phase.dialogues.length})
                </button>
              ))}
            </div>

            {/* Karty Dialogowe: Pytanie PM-a -> Klient -> Pogłębienie -> Zapis w Scope */}
            <div className="space-y-5">
              {displayedDialogues.map((item, dIdx) => (
                <div
                  key={dIdx}
                  className="rounded-xl border border-slate-800 bg-slate-950/70 p-5 space-y-4 hover:border-slate-700 transition"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                    <span className="rounded-md bg-sky-500/20 px-2.5 py-1 text-xs font-bold text-sky-400 border border-sky-500/30">
                      Kategoria: {item.dialogue.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {item.phaseName}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Lewa kolumna: Rozmowa na żywo */}
                    <div className="space-y-3 rounded-lg border border-slate-800 bg-slate-900/50 p-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400">
                          <MessageSquare className="h-3.5 w-3.5" />
                          1. Pytanie diagnostyczne PM-a do klienta:
                        </div>
                        <p className="text-sm font-semibold text-white pl-5">
                          "{item.dialogue.pmQuestion}"
                        </p>
                      </div>

                      <div className="space-y-1 pt-2 border-t border-slate-800/60">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-rose-400">
                          <UserCheck className="h-3.5 w-3.5" />
                          2. Surowa, nieprecyzyjna odpowiedź klienta:
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 italic pl-5 bg-rose-950/20 p-2.5 rounded-lg border border-rose-900/30">
                          "{item.dialogue.clientAnswerRaw}"
                        </p>
                      </div>

                      <div className="space-y-1 pt-2 border-t border-slate-800/60">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                          <HelpCircle className="h-3.5 w-3.5" />
                          3. Pytanie pogłębiające PM-a (Clarification):
                        </div>
                        <p className="text-xs sm:text-sm text-emerald-200 pl-5">
                          "{item.dialogue.pmFollowUp}"
                        </p>
                      </div>
                    </div>

                    {/* Prawa kolumna: Formalny zapis w specyfikacji & tip Kuraka */}
                    <div className="space-y-3 rounded-lg border border-slate-800 bg-slate-900/50 p-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-sky-400">
                          <FileText className="h-3.5 w-3.5" />
                          4. Zapis w Karcie Zakresu (Scope Spec / DoD):
                        </div>
                        <div className="text-xs sm:text-sm text-slate-200 bg-sky-950/30 border border-sky-800/40 p-3 rounded-lg font-mono">
                          {item.dialogue.finalScopeSpec}
                        </div>
                      </div>

                      <div className="space-y-1 pt-2 border-t border-slate-800/60">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
                          <Briefcase className="h-3.5 w-3.5" />
                          5. Wskazówka z aktówki Kuraka:
                        </div>
                        <p className="text-xs text-slate-300 pl-5 leading-relaxed">
                          {item.dialogue.kurakTip}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Kopiowalny Szablon Żelaznej Karty Zakresu */}
            <div className="mt-8 rounded-xl border border-emerald-500/40 bg-slate-950 p-5 sm:p-6 space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div>
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-base sm:text-lg">
                    <ShieldCheck className="h-5 w-5" />
                    Szablon: Żelazna Karta Zakresu Projektu (Project Scope Agreement)
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Skopiuj ten szablon i wypełniaj go na bieżąco podczas spotkań z klientem, by zablokować niekontrolowany Scope Creep i zabezpieczyć budżet.
                  </p>
                </div>

                <button
                  onClick={() => copyToClipboard(lesson.clientInterviewSuite?.ironcladScopeTemplate || "")}
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 text-xs font-bold transition shrink-0"
                >
                  {copiedTemplate ? (
                    <>
                      <Check className="h-4 w-4" />
                      Skopiowano Karcie Zakresu!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Kopiuj cały szablon
                    </>
                  )}
                </button>
              </div>

              <pre className="text-xs font-mono text-emerald-200 bg-slate-900/90 p-4 rounded-xl overflow-x-auto whitespace-pre-wrap border border-slate-800 max-h-96">
                {lesson.clientInterviewSuite.ironcladScopeTemplate}
              </pre>
            </div>
          </div>
        </section>
      )}

      {/* Podsumowanie i Wskazówka Kuraka */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-lg">
            <Lightbulb className="h-5 w-5" />
            Kluczowe Wnioski z Lekcji
          </div>
          <ul className="space-y-2.5 text-sm text-slate-300">
            {lesson.summaryTakeaways.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-sky-500/30 bg-gradient-to-br from-slate-900 to-sky-950/30 p-6 space-y-4">
          <div className="flex items-center gap-2 text-sky-400 font-bold text-lg">
            <Briefcase className="h-5 w-5" />
            Porada z Aktówki Kuraka
          </div>
          <p className="text-sm text-slate-200 leading-relaxed">
            {lesson.kurakLessonTip}
          </p>
          <div className="pt-2 border-t border-slate-800/80 flex items-center gap-3">
            <KurakAvatar isSpeaking={isSpeaking} size={42} />
            <span className="text-xs text-slate-400">
              Niebieski Kurak AI PM • Zawsze weryfikuj fakty, a nie deklaracje.
            </span>
          </div>
        </div>
      </section>

      {/* Quiz Sprawdzający do Lekcji */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 space-y-5">
        <div className="flex items-center gap-2 text-white font-bold text-lg sm:text-xl">
          <Award className="h-5 w-5 text-amber-400" />
          Quiz Sprawdzający Wiedzę z Lekcji {lesson.number}
        </div>

        <p className="text-base text-slate-200 font-medium">
          {lesson.quizQuestion.text}
        </p>

        <div className="space-y-3">
          {lesson.quizQuestion.options.map((option, optIdx) => {
            const isSelected = selectedAnswer === optIdx;
            const isCorrect = optIdx === lesson.quizQuestion.correctAnswerIndex;
            let btnClass = "border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700";

            if (showExplanation) {
              if (isCorrect) {
                btnClass = "border-emerald-500/80 bg-emerald-950/30 text-emerald-200 font-semibold";
              } else if (isSelected && !isCorrect) {
                btnClass = "border-rose-500/80 bg-rose-950/30 text-rose-200";
              }
            } else if (isSelected) {
              btnClass = "border-amber-500 bg-amber-950/30 text-white";
            }

            return (
              <button
                key={optIdx}
                onClick={() => handleSelectOption(optIdx)}
                className={`w-full text-left p-4 rounded-xl border text-sm transition flex items-start gap-3 ${btnClass}`}
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-xs font-bold text-slate-300 shrink-0 mt-0.5">
                  {String.fromCharCode(65 + optIdx)}
                </span>
                <span className="flex-1">{option}</span>
                {showExplanation && isCorrect && (
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                )}
                {showExplanation && isSelected && !isCorrect && (
                  <XCircle className="h-5 w-5 text-rose-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {showExplanation && (
          <div className="rounded-xl border border-sky-500/30 bg-sky-950/30 p-4 text-xs sm:text-sm text-sky-200 space-y-1">
            <span className="font-bold text-sky-300 block">Wyjaśnienie odpowiedzi:</span>
            <p>{lesson.quizQuestion.explanation}</p>
          </div>
        )}
      </section>

      {/* Dolna Nawigacja Między Lekcjami */}
      <nav aria-label="Poprzednia i następna lekcja" className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800">
        {prevLesson ? (
          <Link
            href={`/lekcje/${prevLesson.id}/`}
            className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-sm font-medium text-slate-300 hover:border-amber-500/50 hover:text-white transition w-full sm:w-auto justify-center sm:justify-start"
          >
            <ArrowLeft className="h-4 w-4" />
            <div className="text-left">
              <div className="text-xs text-slate-500">Poprzednia lekcja</div>
              <div className="font-bold text-xs sm:text-sm truncate max-w-[200px]">
                {prevLesson.number}. {prevLesson.title}
              </div>
            </div>
          </Link>
        ) : (
          <div className="hidden sm:block" />
        )}

        <Link
          href="/lekcje/"
          className="rounded-xl border border-slate-700 bg-slate-800 px-5 py-3 text-xs sm:text-sm font-bold text-white hover:bg-slate-700 transition"
        >
          Spis Wszystkich 10 Lekcji
        </Link>

        {nextLesson ? (
          <Link
            href={`/lekcje/${nextLesson.id}/`}
            className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-sm font-medium text-slate-300 hover:border-amber-500/50 hover:text-white transition w-full sm:w-auto justify-center sm:justify-end"
          >
            <div className="text-right">
              <div className="text-xs text-slate-500">Następna lekcja</div>
              <div className="font-bold text-xs sm:text-sm truncate max-w-[200px]">
                {nextLesson.number}. {nextLesson.title}
              </div>
            </div>
            <ArrowRight className="h-4 w-4" />
          </Link>
        ) : (
          <div className="hidden sm:block" />
        )}
      </nav>
    </main>
  );
}

