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
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Code2,
  Palette,
  ShoppingCart,
  Cpu,
  Calculator,
  ChevronRight,
  ShieldCheck,
  TrendingUp,
  Layers,
  Play,
  X,
} from "lucide-react";
import type { CourseSection, CourseSubsection, YouTubeVideoRef } from "@/lib/types";
import { useKurakSpeech } from "./KurakSpeechContext";
import KurakAvatar from "./KurakAvatar";

export default function CourseSubsectionView({
  section,
  subsection,
}: {
  section: CourseSection;
  subsection: CourseSubsection;
}) {
  const { speak, isSpeaking } = useKurakSpeech();
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showExplanations, setShowExplanations] = useState<Record<number, boolean>>({});
  const [activeVideo, setActiveVideo] = useState<YouTubeVideoRef | null>(null);

  const handleSpeakOverview = () => {
    const text = `Certyfikacja: ${subsection.title}. ${subsection.description}. Wydawca to ${
      subsection.certificationDetails.issuer
    }. Trudność: ${subsection.certificationDetails.difficulty}. Ważność: ${
      subsection.certificationDetails.validity
    }. Podsumowanie wiedzy: ${subsection.theorySummary.slice(0, 3).join(" ")}. Pułapka egzaminacyjna: ${
      subsection.examTrap || "Zawsze analizuj wpływ przed działaniem."
    }. Zastosowanie w informatyce: ${
      subsection.industryApplications.itAndSoftware[0]
    }. Porada Kuraka: ${subsection.kurakBriefcaseTip || subsection.beyondCertification.practicalAiTip}`;
    speak(text);
  };

  const handleSelectOption = (questionId: number, optionIndex: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
    setShowExplanations((prev) => ({ ...prev, [questionId]: true }));
  };

  return (
    <main className="flex flex-1 flex-col gap-6">
      {/* Pasek nawigacji okruszkowej (Breadcrumbs) */}
      <nav aria-label="Nawigacja" className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs sm:text-sm">
        <div className="flex items-center gap-2 text-slate-400">
          <Link href="/" className="hover:text-amber-400 transition">
            Główna
          </Link>
          <span>/</span>
          <Link href={`/kurs/${section.id}/`} className="hover:text-amber-400 transition truncate max-w-[120px] sm:max-w-none">
            {section.title}
          </Link>
          <span>/</span>
          <span className="font-bold text-amber-400">{subsection.code}</span>
        </div>

        <Link
          href={`/kurs/${section.id}/`}
          className="flex items-center gap-1 rounded-lg bg-slate-800 px-2.5 py-1 text-xs font-semibold text-slate-300 hover:text-amber-400 border border-slate-700 transition"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Wróć do sekcji</span>
        </Link>
      </nav>

      {/* Nagłówek Podsekcji */}
      <div className="rounded-3xl border-2 border-sky-500/50 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-5 sm:p-7 shadow-2xl backdrop-blur">
        <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-sky-500/20 px-2.5 py-1 text-xs font-bold text-sky-300 border border-sky-500/40">
                {subsection.badge}
              </span>
              <span className="rounded-md bg-amber-400/20 px-2.5 py-1 text-xs font-bold text-amber-300 border border-amber-400/40">
                Sekcja {section.number}: {subsection.code}
              </span>
            </div>
            <h1 className="mt-2 text-2xl sm:text-3xl font-black text-slate-100">
              {subsection.title}
            </h1>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">
              {subsection.description}
            </p>

            <button
              type="button"
              onClick={handleSpeakOverview}
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-amber-400 px-4 py-2 text-xs font-extrabold text-slate-950 shadow-md shadow-amber-400/20 hover:bg-amber-300 active:scale-95 transition"
            >
              <Volume2 className={`h-4 w-4 ${isSpeaking ? "animate-pulse" : ""}`} />
              <span>Odsłuchaj omówienie z Kurakiem</span>
            </button>
          </div>

          <div className="shrink-0 flex justify-center">
            <KurakAvatar size={105} isSpeaking={isSpeaking} />
          </div>
        </div>
      </div>

      {/* 1. KARTA METRYKI CERTYFIKACJI RYNKOWEJ */}
      <section aria-labelledby="cert-details-heading" className="rounded-2xl border border-slate-700 bg-slate-900/90 p-4 sm:p-5 shadow-lg">
        <h2 id="cert-details-heading" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
          <Award className="h-4 w-4" />
          <span>Metryka i Wymogi Egzaminacyjne</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs leading-relaxed">
          <div className="rounded-xl bg-slate-800/80 p-3 border border-slate-700/60">
            <span className="text-slate-400 block font-medium">Instytucja wydająca:</span>
            <strong className="text-slate-100 text-sm">{subsection.certificationDetails.issuer}</strong>
          </div>
          <div className="rounded-xl bg-slate-800/80 p-3 border border-slate-700/60">
            <span className="text-slate-400 block font-medium">Poziom trudności:</span>
            <strong className="text-slate-100 text-sm">{subsection.certificationDetails.difficulty}</strong>
          </div>
          <div className="rounded-xl bg-slate-800/80 p-3 border border-slate-700/60">
            <span className="text-slate-400 block font-medium">Ważność certyfikatu:</span>
            <strong className="text-slate-100 text-sm">{subsection.certificationDetails.validity}</strong>
          </div>
          <div className="rounded-xl bg-slate-800/80 p-3 border border-slate-700/60">
            <span className="text-slate-400 block font-medium">Format egzaminu:</span>
            <strong className="text-slate-100 text-sm">{subsection.certificationDetails.examFormat}</strong>
          </div>
          {subsection.certificationDetails.passingScore && (
            <div className="rounded-xl bg-slate-800/80 p-3 border border-slate-700/60">
              <span className="text-slate-400 block font-medium">Próg zaliczenia:</span>
              <strong className="text-emerald-400 text-sm">{subsection.certificationDetails.passingScore}</strong>
            </div>
          )}
          {subsection.certificationDetails.costEstimate && (
            <div className="rounded-xl bg-slate-800/80 p-3 border border-slate-700/60">
              <span className="text-slate-400 block font-medium">Szacowany koszt egzaminu:</span>
              <strong className="text-amber-300 text-sm">{subsection.certificationDetails.costEstimate}</strong>
            </div>
          )}
        </div>
      </section>

      {/* 2. KLUCZOWE WZORY I REGUŁY EGZAMINACYJNE (JEŚLI DOTYCZY) */}
      {subsection.keyFormulasOrRules && subsection.keyFormulasOrRules.length > 0 && (
        <section className="rounded-2xl border-2 border-amber-400/50 bg-amber-950/20 p-5 shadow-lg">
          <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2.5">
            <Calculator className="h-4 w-4" />
            <span>Kluczowe Wzory i Reguły Egzaminacyjne do Zapamiętania</span>
          </h2>
          <ul className="flex flex-col gap-2 text-xs sm:text-sm text-slate-200">
            {subsection.keyFormulasOrRules.map((rule, idx) => (
              <li key={idx} className="flex items-start gap-2.5 rounded-xl bg-slate-900/80 p-2.5 border border-amber-400/30">
                <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-amber-400" />
                <span className="font-mono text-xs sm:text-sm text-amber-200">{rule}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 3. PUŁAPKA EGZAMINACYJNA (EXAM TRAP) */}
      {subsection.examTrap && (
        <section className="rounded-2xl border-2 border-rose-500/50 bg-rose-950/20 p-5 shadow-lg">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400 mb-1.5">
            <AlertTriangle className="h-4 w-4" />
            <span>Uwaga: Najczęstsza Pułapka Egzaminacyjna</span>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-200">
            {subsection.examTrap}
          </p>
        </section>
      )}

      {/* 4. GŁÓWNE ZAGADNIENIA TEORETYCZNE */}
      <section className="flex flex-col gap-2">
        <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
          <BookOpen className="h-4 w-4 text-amber-400" />
          <span>Główne Zagadnienia Teoretyczne i Ramy Procesowe</span>
        </h2>
        <ul className="flex flex-col gap-2 rounded-2xl border border-slate-700 bg-slate-850 p-4 text-xs sm:text-sm text-slate-300">
          {subsection.theorySummary.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="mt-1 flex h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 5. ZASTOSOWANIE W OBSZARACH UPRZYWILEJOWANYCH (NOWE TECHNOLOGIE & AI) */}
      <section aria-labelledby="industry-apps-heading" className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 id="industry-apps-heading" className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
            <Layers className="h-4 w-4" />
            <span>Zastosowanie w Uprzywilejowanych Obszarach Rynkowych</span>
          </h2>
          <span className="text-xs text-slate-500">Praktyka nowej ery</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* A. Informatyka & Programowanie */}
          <div className="rounded-2xl border-2 border-sky-500/40 bg-slate-900/90 p-4 sm:p-5 shadow-md">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
              <Code2 className="h-4 w-4" />
              <span>Informatyka, Programowanie & AI Coding</span>
            </div>
            <ul className="flex flex-col gap-2 text-xs text-slate-300">
              {subsection.industryApplications.itAndSoftware.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 flex h-1 w-1 shrink-0 rounded-full bg-sky-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* B. Grafika & Multimedia */}
          <div className="rounded-2xl border-2 border-purple-500/40 bg-slate-900/90 p-4 sm:p-5 shadow-md">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400 mb-2">
              <Palette className="h-4 w-4" />
              <span>Grafika, GameDev & Multimedia</span>
            </div>
            <ul className="flex flex-col gap-2 text-xs text-slate-300">
              {subsection.industryApplications.graphicsAndMultimedia.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 flex h-1 w-1 shrink-0 rounded-full bg-purple-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* C. E-marketing & E-commerce */}
          <div className="rounded-2xl border-2 border-emerald-500/40 bg-slate-900/90 p-4 sm:p-5 shadow-md">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
              <ShoppingCart className="h-4 w-4" />
              <span>E-Marketing, E-Commerce & Lejki AI</span>
            </div>
            <ul className="flex flex-col gap-2 text-xs text-slate-300">
              {subsection.industryApplications.ecommerceAndMarketing.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 flex h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* D. Inne Branże Technologiczne */}
          <div className="rounded-2xl border-2 border-slate-700 bg-slate-900/90 p-4 sm:p-5 shadow-md">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              <Cpu className="h-4 w-4 text-amber-400" />
              <span>FinTech, EdTech & Inne Branże</span>
            </div>
            <ul className="flex flex-col gap-2 text-xs text-slate-300">
              {subsection.industryApplications.otherTechIndustries.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 flex h-1 w-1 shrink-0 rounded-full bg-amber-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6. PRAKTYCZNY USE CASE ZE ZLECENIA KLIENTA */}
      <section className="rounded-2xl border-2 border-emerald-500/40 bg-emerald-950/20 p-5 shadow-lg">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2.5">
          <Lightbulb className="h-4 w-4" />
          <span>Realistyczny Use Case: {subsection.useCase.scenarioTitle}</span>
        </div>

        <div className="flex flex-col gap-3 text-xs sm:text-sm text-slate-200 leading-relaxed">
          <div className="rounded-xl bg-slate-900/90 p-3 border border-slate-800">
            <strong className="text-emerald-300 block mb-0.5">Wyzwanie klienta:</strong>
            {subsection.useCase.clientSituation}
          </div>

          <div className="rounded-xl bg-slate-900/90 p-3 border border-slate-800">
            <strong className="text-emerald-300 block mb-0.5">Działanie Kierownika / Właściciela Produktu:</strong>
            {subsection.useCase.actionTaken}
          </div>

          <div className="rounded-xl bg-slate-900/90 p-3 border border-emerald-700/60 text-emerald-200">
            <strong className="block mb-0.5">Przewaga AI (bez tradycyjnych zespołów):</strong>
            {subsection.useCase.aiAdvantage}
          </div>

          {subsection.useCase.clientResult && (
            <div className="rounded-xl bg-emerald-950/40 p-3 border border-emerald-500/50 text-emerald-100 font-medium">
              <strong className="block mb-0.5 text-emerald-300">Osiągnięty rezultat i ROI:</strong>
              {subsection.useCase.clientResult}
            </div>
          )}
        </div>
      </section>

      {/* 7. BEYOND CERTIFICATION & TIP KURAKA Z AKTÓWKI */}
      <section className="rounded-2xl border-2 border-sky-500/40 bg-sky-950/20 p-5 shadow-lg">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
          <Sparkles className="h-4 w-4" />
          <span>Wykraczając poza certyfikację: {subsection.beyondCertification.title}</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
          {subsection.beyondCertification.keyTakeaway}
        </p>

        <div className="mt-3 flex items-start gap-2.5 rounded-xl bg-slate-900/90 border border-sky-700/50 p-3 text-xs sm:text-sm text-sky-200">
          <Briefcase className="h-4 w-4 shrink-0 text-sky-400 mt-0.5" />
          <div>
            <strong>Tajny Tip Niebieskiego Kuraka z Aktówki: </strong>
            {subsection.kurakBriefcaseTip || subsection.beyondCertification.practicalAiTip}
          </div>
        </div>
      </section>

      {/* 8. MATERIAŁY WIDEO NA YOUTUBE (ZINTEGROWANY ODTWARZACZ & SPRAWDZONE LINKI) */}
      {subsection.youtubeVideos && subsection.youtubeVideos.length > 0 && (
        <section aria-labelledby="youtube-heading" className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h2 id="youtube-heading" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400">
              <Youtube className="h-4 w-4" />
              <span>Zweryfikowane Wykłady Wideo na YouTube (Bezpośrednie Odtwarzanie)</span>
            </h2>
            <span className="text-xs text-slate-400">Materiały szkoleniowe HD</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {subsection.youtubeVideos.map((video, idx) => {
              const videoId =
                video.videoId ||
                (video.url.includes("v=") ? video.url.split("v=")[1]?.split("&")[0] : null);
              const thumbUrl = videoId
                ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                : null;

              return (
                <div
                  key={idx}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-700 bg-slate-900/90 overflow-hidden transition-all hover:border-red-500/70 shadow-lg"
                >
                  {/* Miniaturka wideo z przyciskiem Play */}
                  <div
                    onClick={() => setActiveVideo(video)}
                    className="relative aspect-video w-full bg-slate-950 cursor-pointer overflow-hidden"
                  >
                    {thumbUrl ? (
                      <img
                        src={thumbUrl}
                        alt={video.title}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center bg-slate-800 text-slate-500">
                        <Youtube className="h-12 w-12" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-xl group-hover:scale-110 group-hover:bg-red-500 transition-transform">
                        <Play className="h-6 w-6 ml-0.5 fill-current" />
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 rounded-md bg-black/80 px-2 py-0.5 font-mono text-xs font-bold text-white">
                      {video.durationEstimate}
                    </span>
                  </div>

                  {/* Informacje o filmie */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 text-xs text-slate-400 mb-1.5">
                        <span className="font-semibold text-red-400 flex items-center gap-1">
                          <Youtube className="h-3.5 w-3.5" />
                          {video.channel}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-slate-100 group-hover:text-red-300 transition line-clamp-2">
                        {video.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-slate-400 line-clamp-2">
                        {video.description}
                      </p>
                    </div>

                    {/* Przyciski akcji */}
                    <div className="mt-4 flex items-center justify-between gap-2 pt-3 border-t border-slate-800 text-xs">
                      <button
                        type="button"
                        onClick={() => setActiveVideo(video)}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-red-600/90 hover:bg-red-500 px-3 py-1.5 font-bold text-white transition active:scale-95"
                      >
                        <Play className="h-3.5 w-3.5 fill-current" />
                        <span>Odtwórz w oknie</span>
                      </button>

                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-slate-400 hover:text-red-400 transition font-medium"
                      >
                        <span>Otwórz na YouTube</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* MODAL ODTWARZACZA WIDEO YOUTUBE */}
      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-3 sm:p-6"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-700 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Pasek tytułowy modala */}
            <div className="flex items-center justify-between p-3.5 sm:p-4 border-b border-slate-800 bg-slate-950">
              <div className="flex items-center gap-2 text-red-500 min-w-0 pr-2">
                <Youtube className="h-5 w-5 shrink-0" />
                <span className="font-bold text-white text-xs sm:text-sm truncate">
                  {activeVideo.title}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="flex items-center gap-1 rounded-lg bg-slate-800 hover:bg-slate-700 px-2.5 py-1 text-xs font-semibold text-slate-200 transition shrink-0"
              >
                <X className="h-4 w-4" />
                <span>Zamknij</span>
              </button>
            </div>

            {/* Kontener iframe dla wideo */}
            <div className="relative aspect-video w-full bg-black">
              {activeVideo.videoId ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activeVideo.videoId}?autoplay=1&rel=0`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <iframe
                  src={activeVideo.url}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              )}
            </div>

            {/* Stopka modala */}
            <div className="p-3.5 sm:p-4 bg-slate-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
              <div className="space-y-0.5">
                <span className="text-white font-medium">Kanał: {activeVideo.channel}</span>
                <p className="line-clamp-1">{activeVideo.description}</p>
              </div>
              <a
                href={activeVideo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-red-400 hover:text-red-300 font-semibold shrink-0"
              >
                <span>Otwórz w nowej karcie YouTube</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 9. MINI-QUIZ SPRAWDZAJĄCY Z TEJ PODSEKCJI */}
      {subsection.practiceQuestions && subsection.practiceQuestions.length > 0 && (
        <section aria-labelledby="practice-quiz-heading" className="flex flex-col gap-4 rounded-3xl border-2 border-slate-700/80 bg-slate-800/90 p-5 sm:p-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-700 pb-3">
            <h2 id="practice-quiz-heading" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
              <HelpCircle className="h-4 w-4" />
              <span>Sprawdź Wiedzę Egzaminacyjną: Quiz {subsection.code}</span>
            </h2>
            <span className="text-xs text-slate-400">
              {subsection.practiceQuestions.length} pytania testowe
            </span>
          </div>

          <div className="flex flex-col gap-5">
            {subsection.practiceQuestions.map((q, qIndex) => {
              const selected = selectedAnswers[q.id];
              const isAnswered = selected !== undefined;
              const isCorrect = isAnswered && selected === q.correctAnswerIndex;

              return (
                <div key={q.id} className="flex flex-col gap-3 rounded-2xl bg-slate-900/90 p-4 border border-slate-800">
                  <div className="flex items-start gap-2">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-800 text-xs font-bold text-slate-300">
                      {qIndex + 1}
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-100">
                      {q.text}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 pt-1">
                    {q.options.map((opt, optIdx) => {
                      let btnStyle = "bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-750";
                      if (isAnswered) {
                        if (optIdx === q.correctAnswerIndex) {
                          btnStyle = "bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold";
                        } else if (optIdx === selected) {
                          btnStyle = "bg-rose-950/80 border-rose-500 text-rose-200";
                        } else {
                          btnStyle = "bg-slate-850/60 text-slate-500 border-slate-800";
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          type="button"
                          onClick={() => handleSelectOption(q.id, optIdx)}
                          className={`flex items-start gap-2.5 rounded-xl border p-2.5 text-left text-xs transition active:scale-98 ${btnStyle}`}
                        >
                          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold">
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span className="flex-1">{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Wyjaśnienie odpowiedzi */}
                  {showExplanations[q.id] && (
                    <div className={`mt-2 rounded-xl p-3 text-xs leading-relaxed border ${
                      isCorrect
                        ? "bg-emerald-950/30 border-emerald-500/50 text-emerald-200"
                        : "bg-rose-950/30 border-rose-500/50 text-rose-200"
                    }`}>
                      <div className="flex items-center gap-1.5 font-bold mb-1">
                        {isCorrect ? (
                          <>
                            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                            <span>Świetnie! Poprawna odpowiedź.</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="h-4 w-4 text-rose-400" />
                            <span>Niepoprawnie. Prawidłowa odpowiedź: {String.fromCharCode(65 + q.correctAnswerIndex)}.</span>
                          </>
                        )}
                      </div>
                      <p>{q.explanation}</p>
                      {q.kurakTip && (
                        <p className="mt-1.5 font-semibold text-amber-300">
                          💡 Wskazówka Kuraka: {q.kurakTip}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* STOPKA NAWIGACYJNA */}
      <footer className="mt-2 flex flex-col sm:flex-row gap-3 pt-3 border-t border-slate-800">
        <Link
          href={`/kurs/${section.id}/`}
          className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-2xl bg-slate-800 border border-slate-700 text-xs sm:text-sm font-bold text-slate-200 hover:bg-slate-750 active:scale-95 transition"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Wróć do spisu sekcji {section.title}</span>
        </Link>

        <Link
          href={`/quiz/${section.id}/`}
          className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-2xl bg-amber-400 text-xs sm:text-sm font-bold text-slate-950 hover:bg-amber-300 shadow-md shadow-amber-400/20 active:scale-95 transition"
        >
          <HelpCircle className="h-4 w-4" />
          <span>Pełny Quiz Sekcji {section.number}</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </footer>
    </main>
  );
}

