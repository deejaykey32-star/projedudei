"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Volume2,
  Briefcase,
  Sparkles,
  ExternalLink,
  Youtube,
  Award,
  BookOpen,
  HelpCircle,
  Lightbulb,
  ChevronRight,
  Code2,
  Palette,
  ShoppingCart,
  Cpu,
  Calculator,
  AlertTriangle,
} from "lucide-react";
import type { CourseSection, CourseSubsection } from "@/lib/types";
import { useKurakSpeech } from "./KurakSpeechContext";
import KurakAvatar from "./KurakAvatar";

export default function CourseSectionView({
  section,
}: {
  section: CourseSection;
}) {
  const [activeSubId, setActiveSubId] = useState<string>(
    section.subsections[0]?.id || ""
  );
  const { speak, isSpeaking } = useKurakSpeech();

  const activeSub =
    section.subsections.find((s) => s.id === activeSubId) ||
    section.subsections[0];

  const handleSpeakSectionIntro = () => {
    speak(
      `Sekcja numer ${section.number}: ${section.title}. ${section.subtitle}. ${section.description}`
    );
  };

  const handleSpeakSubsection = (sub: CourseSubsection) => {
    const text = `Podsekcja: ${sub.title}. ${sub.description}. Szczegóły certyfikacji: Wydawca ${
      sub.certificationDetails.issuer
    }. Trudność: ${sub.certificationDetails.difficulty}. Ważność: ${
      sub.certificationDetails.validity
    }. Podsumowanie wiedzy: ${sub.theorySummary.slice(0, 3).join(
      " "
    )}. Praktyczny use case: ${sub.useCase.scenarioTitle}. Działanie: ${
      sub.useCase.actionTaken
    }. Przewaga AI: ${sub.useCase.aiAdvantage}. Poza certyfikacją: ${
      sub.beyondCertification.title
    }. ${sub.beyondCertification.practicalAiTip}`;
    speak(text);
  };

  return (
    <main className="flex flex-1 flex-col gap-6">
      {/* Pasek powrotu */}
      <header className="flex items-center justify-between border-b border-slate-800 pb-3">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-sm font-semibold text-slate-400 hover:text-amber-400 transition"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Powrót do menu akademii</span>
        </Link>
        <span className="rounded-full bg-amber-400/20 px-3 py-1 text-xs font-bold text-amber-300 border border-amber-400/40">
          Sekcja {section.number} z 5
        </span>
      </header>

      {/* Nagłówek sekcji */}
      <div className="rounded-3xl border-2 border-slate-700/80 bg-slate-800/90 p-5 sm:p-6 shadow-xl backdrop-blur">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Moduł Certyfikacyjny i Praktyczny
            </span>
            <h1 className="mt-1 text-2xl sm:text-3xl font-black text-slate-100">
              {section.title}
            </h1>
            <p className="mt-1 text-sm font-semibold text-slate-300">
              {section.subtitle}
            </p>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400">
              {section.description}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleSpeakSectionIntro}
              className="flex items-center gap-1.5 rounded-xl bg-amber-400/15 px-3 py-2 text-xs font-bold text-amber-300 hover:bg-amber-400/25 transition active:scale-95"
              title="Odsłuchaj wprowadzenie do sekcji głosem niebieskiego Kuraka"
            >
              <Volume2 className={`h-4 w-4 ${isSpeaking ? "animate-pulse" : ""}`} />
              <span>Odsłuchaj sekcję</span>
            </button>
            <KurakAvatar size={80} isSpeaking={isSpeaking} />
          </div>
        </div>
      </div>

      {/* Zakładki / Pigułki podsekcji */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
          Wybierz podsekcję / certyfikację:
        </span>
        <div className="flex flex-wrap gap-2">
          {section.subsections.map((sub) => {
            const isActive = sub.id === activeSub.id;
            return (
              <button
                key={sub.id}
                type="button"
                onClick={() => setActiveSubId(sub.id)}
                className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition active:scale-95 ${
                  isActive
                    ? "bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20"
                    : "bg-slate-800 text-slate-300 border border-slate-700 hover:border-slate-500 hover:bg-slate-750"
                }`}
              >
                <span>{sub.code}</span>
                <span className="opacity-70 font-normal">({sub.title.split("(")[0].trim()})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Aktywna podsekcja - pełny materiał */}
      {activeSub && (
        <article className="flex flex-col gap-6 rounded-3xl border-2 border-slate-700/80 bg-slate-800/80 p-5 sm:p-7 shadow-2xl backdrop-blur animate-in fade-in duration-200">
          {/* Header podsekcji */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-700/80 pb-4">
            <div>
              <span className="rounded-md bg-sky-500/20 px-2.5 py-1 text-xs font-bold text-sky-300 border border-sky-500/30">
                {activeSub.badge}
              </span>
              <h2 className="mt-2 text-xl sm:text-2xl font-black text-slate-100">
                {activeSub.title}
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Link
                href={`/kurs/${section.id}/${activeSub.id}/`}
                className="flex items-center gap-1.5 rounded-xl bg-sky-500/20 px-3.5 py-2 text-xs font-bold text-sky-200 hover:bg-sky-500/30 border border-sky-400/40 transition active:scale-95"
              >
                <span>Dedykowana strona {activeSub.code}</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>

              <button
                type="button"
                onClick={() => handleSpeakSubsection(activeSub)}
                className="flex items-center gap-1.5 rounded-xl bg-amber-400/20 px-3.5 py-2 text-xs font-bold text-amber-300 hover:bg-amber-400/30 transition active:scale-95"
                title="Niebieski Kurak odczytuje tę podsekcję na głos"
              >
                <Volume2 className="h-4 w-4" />
                <span>Czytaj z Kurakiem</span>
              </button>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-slate-300">
            {activeSub.description}
          </p>

          {/* Karta szczegółów certyfikacji */}
          <div className="rounded-2xl border border-slate-700 bg-slate-900/90 p-4 sm:p-5">
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
              <Award className="h-4 w-4" />
              <span>Metryka certyfikacji rynkowej</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs leading-relaxed">
              <div className="rounded-xl bg-slate-800/70 p-3 border border-slate-700/60">
                <span className="text-slate-400 block font-medium">Instytucja wydająca:</span>
                <strong className="text-slate-100 text-sm">
                  {activeSub.certificationDetails.issuer}
                </strong>
              </div>
              <div className="rounded-xl bg-slate-800/70 p-3 border border-slate-700/60">
                <span className="text-slate-400 block font-medium">Trudność i wymogi:</span>
                <strong className="text-slate-100 text-sm">
                  {activeSub.certificationDetails.difficulty}
                </strong>
              </div>
              <div className="rounded-xl bg-slate-800/70 p-3 border border-slate-700/60">
                <span className="text-slate-400 block font-medium">Ważność certyfikatu:</span>
                <strong className="text-slate-100 text-sm">
                  {activeSub.certificationDetails.validity}
                </strong>
              </div>
              <div className="rounded-xl bg-slate-800/70 p-3 border border-slate-700/60">
                <span className="text-slate-400 block font-medium">Format egzaminu:</span>
                <strong className="text-slate-100 text-sm">
                  {activeSub.certificationDetails.examFormat}
                </strong>
              </div>
            </div>
          </div>

          {/* Formuły i reguły jeśli istnieją */}
          {activeSub.keyFormulasOrRules && activeSub.keyFormulasOrRules.length > 0 && (
            <div className="rounded-2xl border-2 border-amber-400/40 bg-amber-950/20 p-4">
              <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                <Calculator className="h-4 w-4" />
                <span>Kluczowe wzory i reguły do zapamiętania</span>
              </h3>
              <ul className="flex flex-col gap-1.5 text-xs text-slate-200">
                {activeSub.keyFormulasOrRules.map((rule, idx) => (
                  <li key={idx} className="font-mono text-amber-200 bg-slate-900/60 p-2 rounded-lg border border-amber-400/20">
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Pułapka egzaminacyjna */}
          {activeSub.examTrap && (
            <div className="rounded-2xl border-2 border-rose-500/40 bg-rose-950/20 p-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400 mb-1">
                <AlertTriangle className="h-4 w-4" />
                <span>Pułapka egzaminacyjna</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                {activeSub.examTrap}
              </p>
            </div>
          )}

          {/* Podsumowanie teorii certyfikacyjnej */}
          <div className="flex flex-col gap-2">
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              <BookOpen className="h-4 w-4 text-amber-400" />
              <span>Główne zagadnienia teoretyczne</span>
            </h3>
            <ul className="flex flex-col gap-2 rounded-2xl border border-slate-700 bg-slate-850 p-4 text-xs sm:text-sm text-slate-300">
              {activeSub.theorySummary.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-1 flex h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Zastosowanie w branżach (Informatyka, Grafika, E-commerce) */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
              <Briefcase className="h-4 w-4" />
              <span>Zastosowanie w uprzywilejowanych obszarach</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-xl border border-sky-500/30 bg-slate-900/80 p-3.5">
                <strong className="text-sky-300 text-xs flex items-center gap-1.5 mb-1.5">
                  <Code2 className="h-3.5 w-3.5" />
                  <span>Informatyka & Programowanie z AI</span>
                </strong>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeSub.industryApplications.itAndSoftware[0]}
                </p>
              </div>

              <div className="rounded-xl border border-purple-500/30 bg-slate-900/80 p-3.5">
                <strong className="text-purple-300 text-xs flex items-center gap-1.5 mb-1.5">
                  <Palette className="h-3.5 w-3.5" />
                  <span>Grafika, 3D & Multimedia</span>
                </strong>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeSub.industryApplications.graphicsAndMultimedia[0]}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-500/30 bg-slate-900/80 p-3.5">
                <strong className="text-emerald-300 text-xs flex items-center gap-1.5 mb-1.5">
                  <ShoppingCart className="h-3.5 w-3.5" />
                  <span>E-Marketing & E-Commerce</span>
                </strong>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeSub.industryApplications.ecommerceAndMarketing[0]}
                </p>
              </div>

              <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-3.5">
                <strong className="text-amber-300 text-xs flex items-center gap-1.5 mb-1.5">
                  <Cpu className="h-3.5 w-3.5" />
                  <span>FinTech, EdTech & Inne technologie</span>
                </strong>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeSub.industryApplications.otherTechIndustries[0]}
                </p>
              </div>
            </div>
          </div>

          {/* Praktyczny Use Case z Klientem & Przewaga AI */}
          <div className="rounded-2xl border-2 border-emerald-500/40 bg-emerald-950/20 p-5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
              <Lightbulb className="h-4 w-4" />
              <span>Praktyczny Use Case z klientem: {activeSub.useCase.scenarioTitle}</span>
            </div>

            <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-200">
              <p>
                <strong className="text-emerald-300">Sytuacja klienta: </strong>
                {activeSub.useCase.clientSituation}
              </p>
              <p>
                <strong className="text-emerald-300">Działanie PM-a: </strong>
                {activeSub.useCase.actionTaken}
              </p>
              <div className="mt-1 rounded-xl bg-slate-900/90 border border-emerald-700/50 p-3 text-emerald-200">
                <strong>Przewaga AI (bez tradycyjnych koderów): </strong>
                {activeSub.useCase.aiAdvantage}
              </div>
            </div>
          </div>

          {/* Treści wykraczające poza certyfikację (Beyond Certification) */}
          <div className="rounded-2xl border-2 border-sky-500/40 bg-sky-950/20 p-5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
              <Sparkles className="h-4 w-4" />
              <span>Wykraczając poza certyfikację: {activeSub.beyondCertification.title}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {activeSub.beyondCertification.keyTakeaway}
            </p>
            <div className="mt-3 flex items-start gap-2 rounded-xl bg-slate-900/90 border border-sky-700/50 p-3 text-xs sm:text-sm text-sky-200">
              <Briefcase className="h-4 w-4 shrink-0 text-sky-400 mt-0.5" />
              <div>
                <strong>Tajny Tip Niebieskiego Kuraka: </strong>
                {activeSub.kurakBriefcaseTip || activeSub.beyondCertification.practicalAiTip}
              </div>
            </div>
          </div>

          {/* Materiały Wideo na YouTube */}
          {activeSub.youtubeVideos && activeSub.youtubeVideos.length > 0 && (
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400">
                  <Youtube className="h-4 w-4" />
                  <span>Rekomendowane materiały wideo na YouTube</span>
                </h3>
                <span className="text-xs text-slate-500">Obejrzyj omówienie</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeSub.youtubeVideos.map((video, idx) => (
                  <a
                    key={idx}
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col justify-between rounded-2xl border border-slate-700 bg-slate-900/90 p-4 transition-all hover:border-red-500/70 hover:bg-slate-900 active:scale-98 shadow-md"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 text-xs text-slate-400 mb-1.5">
                        <span className="font-semibold text-red-400 flex items-center gap-1">
                          <Youtube className="h-3.5 w-3.5" />
                          {video.channel}
                        </span>
                        <span className="rounded bg-slate-800 px-2 py-0.5 font-mono text-slate-300">
                          {video.durationEstimate}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-100 group-hover:text-red-300 transition line-clamp-2">
                        {video.title}
                      </h4>
                      <p className="mt-1.5 text-xs text-slate-400 line-clamp-2">
                        {video.description}
                      </p>
                    </div>

                    <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-800 text-xs font-semibold text-red-400 group-hover:underline">
                      <span>Otwórz w YouTube</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Przycisk przejścia do pytań testowych z tej sekcji */}
          <div className="mt-2 flex flex-col sm:flex-row gap-3 pt-3 border-t border-slate-700/80">
            <Link
              href={`/kurs/${section.id}/${activeSub.id}/`}
              className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-2xl bg-sky-500 px-5 text-sm font-bold text-slate-950 hover:bg-sky-400 shadow-lg shadow-sky-500/20 active:scale-95 transition"
            >
              <BookOpen className="h-4 w-4" />
              <span>Otwórz pełny moduł dedykowany ({activeSub.code})</span>
            </Link>

            <Link
              href={`/quiz/${section.id}/`}
              className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-2xl bg-amber-400 text-sm font-bold text-slate-950 shadow-lg shadow-amber-400/20 hover:bg-amber-300 active:scale-95 transition"
            >
              <HelpCircle className="h-4 w-4" />
              <span>Przejdź do quizu certyfikacyjnego sekcji</span>
            </Link>
          </div>
        </article>
      )}
    </main>
  );
}
