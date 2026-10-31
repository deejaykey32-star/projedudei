"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Volume2,
  Copy,
  Check,
  Briefcase,
  Sparkles,
  BookOpen,
  Terminal,
} from "lucide-react";
import type { PlaybookTopic } from "@/lib/types";
import { useKurakSpeech } from "./KurakSpeechContext";

export default function PlaybookView({ topics }: { topics: PlaybookTopic[] }) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { speak } = useKurakSpeech();

  const handleCopyPrompt = (id: string, promptText: string) => {
    navigator.clipboard.writeText(promptText);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSpeakTopic = (topic: PlaybookTopic) => {
    const fullText = `Temat: ${topic.title}. Kategoria: ${topic.category}. Podsumowanie: ${
      topic.summary
    }. Treść kluczowa: ${topic.content.join(" ")}. Tajny tip Kuraka: ${
      topic.kurakSecretTip
    }`;
    speak(fullText);
  };

  return (
    <main className="flex flex-1 flex-col gap-6">
      <header className="flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-sm font-semibold text-slate-400 hover:text-amber-400 transition"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Powrót do menu</span>
        </Link>
        <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
          Metodyka & Prompty PM
        </span>
      </header>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
          AI Project Manager Playbook
        </h1>
        <p className="text-sm text-slate-400 leading-relaxed">
          Praktyczna wiedza, wzorce architektoniczne, szablony promptów do
          rozmów z modelami AI oraz zasady negocjacji z klientami.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {topics.map((topic) => (
          <article
            key={topic.id}
            className="flex flex-col gap-4 rounded-2xl border-2 border-slate-700/80 bg-slate-800/80 p-5 shadow-lg backdrop-blur"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="rounded-md bg-amber-400/20 px-2 py-0.5 text-xs font-bold text-amber-300">
                  {topic.category}
                </span>
                <h2 className="mt-1.5 text-lg sm:text-xl font-bold text-slate-100">
                  {topic.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => handleSpeakTopic(topic)}
                className="flex items-center gap-1 rounded-xl bg-amber-400/15 px-3 py-1.5 text-xs font-semibold text-amber-300 hover:bg-amber-400/25 transition active:scale-95"
                title="Przeczytaj artykuł głosem Kuraka"
              >
                <Volume2 className="h-4 w-4" />
                <span className="hidden sm:inline">Czytaj</span>
              </button>
            </div>

            <p className="text-sm font-medium text-slate-300 italic border-l-2 border-amber-400 pl-3">
              {topic.summary}
            </p>

            <div className="flex flex-col gap-2 text-sm leading-relaxed text-slate-300">
              {topic.content.map((par, i) => (
                <p key={i}>{par}</p>
              ))}
            </div>

            {/* Szablon prompta */}
            {topic.promptTemplate && (
              <div className="rounded-xl border border-slate-700 bg-slate-900/90 p-3.5">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
                  <span className="flex items-center gap-1">
                    <Terminal className="h-3.5 w-3.5 text-emerald-400" />
                    Szablon prompta dla AI:
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      handleCopyPrompt(topic.id, topic.promptTemplate!)
                    }
                    className="flex items-center gap-1 text-amber-400 hover:text-amber-300 font-bold"
                  >
                    {copiedId === topic.id ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span>Skopiowano!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Kopiuj prompt</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="text-xs text-slate-200 whitespace-pre-wrap font-mono leading-relaxed bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
                  {topic.promptTemplate}
                </pre>
              </div>
            )}

            {/* Narzędzia i tip Kuraka */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-slate-700/60 pt-3 text-xs">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-slate-400">Rekomendowane:</span>
                {topic.recommendedTools.map((t, idx) => (
                  <span
                    key={idx}
                    className="rounded bg-slate-700/80 px-2 py-0.5 text-slate-200 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1 text-amber-300 font-medium">
                <Briefcase className="h-3.5 w-3.5 shrink-0" />
                <span>{topic.kurakSecretTip}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
