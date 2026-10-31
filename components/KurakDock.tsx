"use client";

import React, { useState } from "react";
import { Volume2, VolumeX, RotateCcw, X, Sliders, Sparkles, Briefcase } from "lucide-react";
import KurakAvatar from "./KurakAvatar";
import { useKurakSpeech } from "./KurakSpeechContext";

const PM_TIPS = [
  "Klient nie kupuje kodu, klient kupuje rozwiązanie swojego problemu biznesowego. Pokaż mu działający prototyp AI w 24 godziny!",
  "Zamiast pisać 100 stron specyfikacji i czekać 6 miesięcy na junior deweloperów, stwórz Product Requirements Document dla LLM i odpal prototyp na Cloudflare Pages.",
  "W Scrumie z AI rolą Scrum Mastera jest usuwanie barier promptowania, dobór modeli i dbanie o czysty kontekst (Context Window), a nie przeliczanie story pointów.",
  "Dla klienta najważniejsza jest transparentność. Przygotuj interaktywny dashboard i weryfikuj hipotezy z użytkownikami na żywo.",
  "Definition of Done w erze AI: wygenerowany kod musi mieć testy automatyczne, przejść linter i audyt bezpieczeństwa prompt injection.",
  "Gdy klient żąda 'zrobienia wszystkiego', zastosuj metodę MoSCoW: Must have dowieź w 2 dni z AI, resztę zaplanuj w kolejnych iteracjach.",
  "Pamiętaj o prawach autorskich i RODO: dane klienta nigdy nie mogą trafiać do trenowania modeli publicznych bez zgody (Zero Data Retention)!",
];

export default function KurakDock() {
  const {
    isSpeaking,
    voiceOn,
    rate,
    currentText,
    bubbleVisible,
    speak,
    stop,
    repeat,
    toggleVoice,
    setRate,
    hideBubble,
  } = useKurakSpeech();

  const [showSettings, setShowSettings] = useState(false);

  const handleKurakClick = () => {
    if (bubbleVisible && isSpeaking) {
      stop();
    } else {
      const randomTip = PM_TIPS[Math.floor(Math.random() * PM_TIPS.length)];
      speak(randomTip);
    }
  };

  return (
    <aside
      aria-label="Kurak Asystent PM"
      className="fixed bottom-3 right-3 z-50 flex flex-col items-end pointer-events-none"
    >
      {/* Dymek dialogowy Kuraka */}
      {bubbleVisible && (
        <div
          role="region"
          aria-live="polite"
          className="pointer-events-auto relative mb-2 max-w-sm rounded-2xl border-2 border-amber-400/80 bg-slate-900/95 p-4 text-slate-100 shadow-2xl backdrop-blur-md transition-all duration-300 animate-in fade-in slide-in-from-bottom-2 sm:max-w-md"
        >
          {/* Strzałka dymka */}
          <div className="absolute -bottom-2.5 right-10 h-5 w-5 rotate-45 border-b-2 border-r-2 border-amber-400 bg-slate-900" />

          {/* Nagłówek dymka */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2.5">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400">
              <Briefcase className="h-3.5 w-3.5" />
              <span>Kurak Project Manager</span>
              {isSpeaking && (
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={() => {
                hideBubble();
                stop();
              }}
              className="rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-slate-100 transition-colors"
              aria-label="Zamknij dymek"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Treść dymka */}
          <div className="text-sm leading-relaxed text-slate-200 max-h-48 overflow-y-auto pr-1">
            {currentText}
          </div>

          {/* Pasek narzędzi Kuraka */}
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-slate-800/80 pt-2.5 text-xs">
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={repeat}
                className="flex items-center gap-1 rounded-lg bg-slate-800 px-2.5 py-1.5 font-medium text-slate-200 hover:bg-slate-700 active:scale-95 transition"
                title="Powtórz odczytanie tekstu"
              >
                <RotateCcw className="h-3.5 w-3.5 text-amber-400" />
                <span>Powtórz</span>
              </button>

              <button
                type="button"
                onClick={toggleVoice}
                className={`flex items-center gap-1 rounded-lg px-2.5 py-1.5 font-medium transition active:scale-95 ${
                  voiceOn
                    ? "bg-amber-400/20 text-amber-300 hover:bg-amber-400/30"
                    : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                }`}
                title={voiceOn ? "Wycisz lektora" : "Włącz lektora"}
              >
                {voiceOn ? (
                  <>
                    <Volume2 className="h-3.5 w-3.5 text-amber-400" />
                    <span>Lektor wł.</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="h-3.5 w-3.5" />
                    <span>Lektor wył.</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setShowSettings(!showSettings)}
                className="rounded-lg bg-slate-800 p-1.5 text-slate-400 hover:bg-slate-700 transition"
                title="Dostosuj tempo mowy"
              >
                <Sliders className="h-3.5 w-3.5" />
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                const randomTip = PM_TIPS[Math.floor(Math.random() * PM_TIPS.length)];
                speak(randomTip);
              }}
              className="flex items-center gap-1 text-amber-400 hover:text-amber-300 font-semibold"
            >
              <Sparkles className="h-3 w-3" />
              <span>Porada PM</span>
            </button>
          </div>

          {/* Opcje tempa mowy */}
          {showSettings && (
            <div className="mt-2.5 flex items-center justify-between rounded-xl bg-slate-800/80 p-2 text-xs">
              <span className="text-slate-400">Tempo mowy ({rate.toFixed(2)}x):</span>
              <input
                type="range"
                min="0.75"
                max="1.4"
                step="0.05"
                value={rate}
                onChange={(e) => setRate(parseFloat(e.target.value))}
                className="w-28 accent-amber-400 cursor-pointer"
              />
            </div>
          )}
        </div>
      )}

      {/* Przycisk wywołania Kuraka z Aktówką */}
      <div className="pointer-events-auto flex items-center gap-2">
        {!bubbleVisible && (
          <button
            type="button"
            onClick={handleKurakClick}
            className="hidden sm:flex items-center gap-1.5 rounded-full bg-slate-900/90 border border-amber-400/50 px-3 py-1.5 text-xs font-semibold text-amber-400 shadow-lg backdrop-blur hover:bg-slate-800 transition active:scale-95"
          >
            <Briefcase className="h-3.5 w-3.5" />
            <span>Kliknij Kuraka PM-a</span>
          </button>
        )}

        <button
          type="button"
          onClick={handleKurakClick}
          aria-label="Kurak z aktówką - Twój przewodnik Project Manager"
          className="group relative focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-400 rounded-full transition-transform active:scale-90"
          title="Kliknij Kuraka, by usłyszeć poradę lub posłuchać lektora!"
        >
          {/* Pulsujący wskaźnik głosu */}
          {isSpeaking && (
            <span className="absolute inset-0 rounded-full bg-amber-400/30 animate-ping pointer-events-none" />
          )}

          <div className="transition-transform group-hover:scale-110">
            <KurakAvatar isSpeaking={isSpeaking} size={88} />
          </div>
        </button>
      </div>
    </aside>
  );
}

