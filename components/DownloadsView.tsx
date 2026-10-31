"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Download,
  Smartphone,
  Apple,
  Zap,
  HardDrive,
  Volume2,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Package,
} from "lucide-react";
import { useKurakSpeech } from "./KurakSpeechContext";
import KurakAvatar from "./KurakAvatar";

export default function DownloadsView() {
  const { speak, isSpeaking } = useKurakSpeech();
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isPwaInstalled, setIsPwaInstalled] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    if (
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone === true
    ) {
      setIsPwaInstalled(true);
    }

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallPwa = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      if (choice.outcome === "accepted") {
        setIsPwaInstalled(true);
      }
      setDeferredPrompt(null);
    } else {
      speak(
        "Aby zainstalować PWA na iOS w przeglądarce Safari, kliknij ikonę Udostępnij na dole ekranu, a następnie wybierz: Do ekranu początkowego. Na telefonie z Androidem w przeglądarce Chrome kliknij trzy kropki w prawym górnym rogu i wybierz: Zainstaluj aplikację."
      );
    }
  };

  const handleSpeakOverview = () => {
    speak(
      "Centrum pobierania aplikacji mobilnej Projedudei! Przygotowałem dla Ciebie cztery wersje: plik instalacyjny APK na Androida, pakiet AAB do Google Play, plik IPA na iPhone'a oraz ultralekką progresywną aplikację PWA, którą dodasz do ekranu telefonu w 3 sekundy. Możesz też pobrać paczkę ZIP działającą w stu procentach offline bez dostępu do sieci!"
    );
  };

  return (
    <main className="flex flex-1 flex-col gap-6">
      {/* Pasek nawigacyjny */}
      <header className="flex items-center justify-between border-b border-slate-800 pb-3">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-sm font-semibold text-slate-400 hover:text-amber-400 transition"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Powrót do menu głównego</span>
        </Link>
        <span className="rounded-full bg-sky-500/20 px-3 py-1 text-xs font-bold text-sky-300 border border-sky-400/40">
          Wersje Mobilne i Offline
        </span>
      </header>

      {/* Hero sekcji z Niebieskim Kurakiem */}
      <div className="rounded-3xl border-2 border-sky-500/50 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-5 sm:p-7 shadow-2xl backdrop-blur">
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          <div className="flex-1 text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Zabierz Akademię PM-a w kieszeń</span>
            </span>
            <h1 className="mt-1 text-2xl sm:text-3xl font-black text-slate-100">
              Pobierz Projedudei na telefon i tablet
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
              Dostępne pakiety instalacyjne na systemy Android, iOS oraz PWA.
              Wszystkie materiały, lektor z głosem Kuraka i testy działają w
              pełni offline!
            </p>

            <button
              type="button"
              onClick={handleSpeakOverview}
              className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-amber-400 px-4 py-2 text-xs font-extrabold text-slate-950 shadow-md shadow-amber-400/20 hover:bg-amber-300 transition active:scale-95"
            >
              <Volume2 className={`h-4 w-4 ${isSpeaking ? "animate-pulse" : ""}`} />
              <span>Posłuchaj instrukcji Kuraka</span>
            </button>
          </div>

          <div className="shrink-0 flex justify-center">
            <KurakAvatar size={110} isSpeaking={isSpeaking} />
          </div>
        </div>
      </div>

      {/* KAFELKI PAKIETÓW MOBILNYCH */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 1. Android APK */}
        <div className="flex flex-col justify-between rounded-3xl border-2 border-emerald-500/40 bg-slate-800/90 p-5 shadow-xl backdrop-blur">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400">
                  <Smartphone className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-lg font-black text-slate-100">Android APK</h2>
                  <span className="text-xs text-slate-400">Bezpośrednia instalacja</span>
                </div>
              </div>
              <span className="rounded-lg bg-emerald-950/80 border border-emerald-700/60 px-2 py-0.5 text-xs font-mono font-bold text-emerald-300">
                7.1 MB
              </span>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-slate-300">
              Klasyczny pakiet instalacyjny dla wszystkich telefonów i tabletów z
              systemem Android (Samsung, Xiaomi, Motorola, Pixel itp.).
            </p>

            <div className="mt-3 rounded-xl bg-slate-900/80 p-3 text-xs text-slate-400 border border-slate-700/60">
              <strong className="text-slate-200 block mb-1">Instrukcja instalacji:</strong>
              1. Pobierz plik .apk na telefon.<br />
              2. Otwórz pobrany plik i zezwól na instalację z tego źródła.<br />
              3. Aplikacja zainstaluje się na pulpicie telefonu.
            </div>
          </div>

          <a
            href="/downloads/projedudei.apk"
            download="projedudei.apk"
            className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-emerald-500 font-extrabold text-slate-950 shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 active:scale-95 transition"
          >
            <Download className="h-5 w-5" />
            <span>Pobierz Android APK (.apk)</span>
          </a>
        </div>

        {/* 2. Android App Bundle (AAB / ABB) */}
        <div className="flex flex-col justify-between rounded-3xl border-2 border-sky-500/40 bg-slate-800/90 p-5 shadow-xl backdrop-blur">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500/20 text-sky-400">
                  <Package className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-lg font-black text-slate-100">Android AAB (ABB)</h2>
                  <span className="text-xs text-slate-400">Google Play Bundle</span>
                </div>
              </div>
              <span className="rounded-lg bg-sky-950/80 border border-sky-700/60 px-2 py-0.5 text-xs font-mono font-bold text-sky-300">
                6.9 MB
              </span>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-slate-300">
              Oficjalny format Android App Bundle (AAB) zoptymalizowany dla
              deweloperów, emulatorów oraz do publikacji w sklepie Google Play Console.
            </p>

            <div className="mt-3 rounded-xl bg-slate-900/80 p-3 text-xs text-slate-400 border border-slate-700/60">
              <strong className="text-slate-200 block mb-1">Dla kogo jest ten plik:</strong>
              Pakiet przeznaczony do wgrywania do Google Play Store oraz instalacji
              za pomocą narzędzia <code>bundletool</code> na urządzeniach testowych.
            </div>
          </div>

          <a
            href="/downloads/projedudei.aab"
            download="projedudei.aab"
            className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-sky-500 font-extrabold text-slate-950 shadow-lg shadow-sky-500/20 hover:bg-sky-400 active:scale-95 transition"
          >
            <Download className="h-5 w-5" />
            <span>Pobierz Android AAB (.aab)</span>
          </a>
        </div>

        {/* 3. Apple iOS IPA */}
        <div className="flex flex-col justify-between rounded-3xl border-2 border-slate-600 bg-slate-800/90 p-5 shadow-xl backdrop-blur">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-700 text-slate-100">
                  <Apple className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-lg font-black text-slate-100">Apple iOS IPA</h2>
                  <span className="text-xs text-slate-400">Dla iPhone i iPad</span>
                </div>
              </div>
              <span className="rounded-lg bg-slate-900 border border-slate-700 px-2 py-0.5 text-xs font-mono font-bold text-slate-300">
                0.6 MB
              </span>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-slate-300">
              Kompletny pakiet aplikacji iOS (<code>Payload/Projedudei.app</code> z plikiem Info.plist i zasobami) gotowy do instalacji na urządzeniach Apple.
            </p>

            <div className="mt-3 rounded-xl bg-slate-900/80 p-3 text-xs text-slate-400 border border-slate-700/60">
              <strong className="text-slate-200 block mb-1">Instalacja na iOS (Sideload):</strong>
              Możesz zainstalować plik .ipa za pomocą popularnych narzędzi: AltStore, Sideloadly, TrollStore lub przez certyfikat deweloperski Apple.
            </div>
          </div>

          <a
            href="/downloads/projedudei.ipa"
            download="projedudei.ipa"
            className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-slate-200 font-extrabold text-slate-950 shadow-lg hover:bg-white active:scale-95 transition"
          >
            <Download className="h-5 w-5" />
            <span>Pobierz Apple iOS IPA (.ipa)</span>
          </a>
        </div>

        {/* 4. PWA (Progressive Web App) */}
        <div className="flex flex-col justify-between rounded-3xl border-2 border-amber-400/50 bg-slate-800/90 p-5 shadow-xl backdrop-blur">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-400/20 text-amber-400">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-lg font-black text-slate-100">Progresywna PWA</h2>
                  <span className="text-xs text-slate-400">Brak pobierania plików</span>
                </div>
              </div>
              <span className="rounded-lg bg-amber-950/80 border border-amber-700/60 px-2 py-0.5 text-xs font-mono font-bold text-amber-300">
                Natychmiast
              </span>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-slate-300">
              Najwygodniejsza metoda instalacji. Działa bezpośrednio z przeglądarki
              na telefonie (Safari / Chrome), tworzy ikonę na pulpicie i działa bez
              dostępu do sieci dzięki Service Workerowi.
            </p>

            <div className="mt-3 rounded-xl bg-slate-900/80 p-3 text-xs text-slate-400 border border-slate-700/60">
              <strong className="text-slate-200 block mb-1">Instrukcja w 5 sekund:</strong>
              • <strong>iPhone (Safari):</strong> Kliknij Udostępnij (ikona ze strzałką) → &quot;Do ekranu początkowego&quot;.<br />
              • <strong>Android (Chrome):</strong> Kliknij menu (trzy kropki) → &quot;Zainstaluj aplikację&quot;.
            </div>
          </div>

          <button
            type="button"
            onClick={handleInstallPwa}
            className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-amber-400 font-extrabold text-slate-950 shadow-lg shadow-amber-400/20 hover:bg-amber-300 active:scale-95 transition"
          >
            <Zap className="h-5 w-5" />
            <span>{isPwaInstalled ? "Aplikacja PWA Zainstalowana" : "Zainstaluj jako PWA"}</span>
          </button>
        </div>
      </div>

      {/* 5. Pakiet Offline ZIP */}
      <div className="rounded-3xl border-2 border-slate-700 bg-slate-900/90 p-5 shadow-lg backdrop-blur">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-800 text-amber-400">
              <HardDrive className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-100">
                Pakiet Offline ZIP (Pełna kopia strony)
              </h3>
              <p className="text-xs text-slate-400">
                Rozpakuj archiwum i kliknij <code>index.html</code>, aby korzystać z akademii bez serwera i internetu.
              </p>
            </div>
          </div>

          <a
            href="/downloads/projedudei-offline.zip"
            download="projedudei-offline.zip"
            className="flex items-center gap-2 shrink-0 rounded-xl bg-slate-800 border border-slate-700 px-4 py-2.5 text-xs font-bold text-slate-200 hover:bg-slate-700 active:scale-95 transition"
          >
            <Download className="h-4 w-4 text-amber-400" />
            <span>Pobierz ZIP (0.5 MB)</span>
          </a>
        </div>
      </div>
    </main>
  );
}

