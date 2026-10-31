"use client";

import React, { createContext, useContext, useEffect, useState, useCallback, useRef } from "react";

interface SpeechSettings {
  voiceOn: boolean;
  rate: number;
}

interface KurakSpeechContextType {
  isSpeaking: boolean;
  voiceOn: boolean;
  rate: number;
  currentText: string;
  bubbleVisible: boolean;
  speak: (text: string, forceShowBubble?: boolean) => void;
  stop: () => void;
  repeat: () => void;
  toggleVoice: () => void;
  setRate: (rate: number) => void;
  hideBubble: () => void;
  showBubbleWithText: (text: string) => void;
}

const KurakSpeechContext = createContext<KurakSpeechContextType | null>(null);

function cleanHtmlOrMarkdown(raw: string): string {
  return raw
    .replace(/<[^>]*>/g, "")
    .replace(/[*_#`~]/g, "")
    .replace(/[→←↓↑]/g, " ")
    .replace(/★/g, " gwiazdka ")
    .replace(/\s+/g, " ")
    .trim();
}

export function KurakSpeechProvider({ children }: { children: React.ReactNode }) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceOn, setVoiceOn] = useState(true);
  const [rate, setRateState] = useState(1.05);
  const [currentText, setCurrentText] = useState(
    "Cześć! Jestem Kurak – Twój mentor AI Project Managera i Scrum Mastera. Trzymam aktówkę pełną wiedzy, by nauczyć Cię kontaktu z klientami i tworzenia apek z AI!"
  );
  const [bubbleVisible, setBubbleVisible] = useState(false);

  const selectedVoiceRef = useRef<SpeechSynthesisVoice | null>(null);
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);
  const lastSpokenTextRef = useRef<string>(currentText);

  // Load preferences from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("projedudei-voice");
      if (saved) {
        const parsed = JSON.parse(saved) as Partial<SpeechSettings>;
        if (parsed.voiceOn !== undefined) setVoiceOn(parsed.voiceOn);
        if (parsed.rate !== undefined) setRateState(parsed.rate);
      }
    } catch {
      // ignore localStorage errors
    }
  }, []);

  const savePrefs = (newVoiceOn: boolean, newRate: number) => {
    try {
      localStorage.setItem("projedudei-voice", JSON.stringify({ voiceOn: newVoiceOn, rate: newRate }));
    } catch {
      // ignore
    }
  };

  // Find optimal Polish voice
  const initVoice = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const voices = window.speechSynthesis.getVoices();
    const plVoices = voices.filter((v) => v.lang.toLowerCase().startsWith("pl"));
    // Prefer natural, online or Polish google voices
    const best =
      plVoices.find((v) => /natural|online|google|zofia|marek|paul/i.test(v.name)) ||
      plVoices[0] ||
      null;
    selectedVoiceRef.current = best;
  }, []);

  useEffect(() => {
    initVoice();
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.onvoiceschanged = initVoice;
    }
  }, [initVoice]);

  const stop = useCallback(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  }, []);

  const hideBubble = useCallback(() => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    setBubbleVisible(false);
  }, []);

  const autoHideBubble = useCallback((ms = 8000) => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => {
      setBubbleVisible(false);
    }, ms);
  }, []);

  const speak = useCallback(
    (rawText: string, forceShowBubble = true) => {
      const cleaned = cleanHtmlOrMarkdown(rawText);
      if (!cleaned) return;

      lastSpokenTextRef.current = cleaned;
      setCurrentText(cleaned);
      if (forceShowBubble) setBubbleVisible(true);

      stop();

      if (!voiceOn || typeof window === "undefined" || !("speechSynthesis" in window)) {
        setIsSpeaking(true);
        setTimeout(() => setIsSpeaking(false), 1200);
        autoHideBubble(Math.max(6000, cleaned.length * 60));
        return;
      }

      // Split into sentences so browser synthesizer doesn't truncate or freeze
      const sentenceRegex = /[^.!?…]+[.!?…]*/g;
      const sentences = cleaned.match(sentenceRegex) || [cleaned];

      setIsSpeaking(true);

      sentences.forEach((sentence, idx) => {
        const trimmed = sentence.trim();
        if (!trimmed) return;
        const utterance = new SpeechSynthesisUtterance(trimmed);
        utterance.lang = "pl-PL";
        if (selectedVoiceRef.current) {
          utterance.voice = selectedVoiceRef.current;
        }
        utterance.rate = rate;
        utterance.pitch = 1.15; // friendly, slightly upbeat Kurak tone

        if (idx === sentences.length - 1) {
          utterance.onend = () => {
            setIsSpeaking(false);
            autoHideBubble(5000);
          };
          utterance.onerror = () => {
            setIsSpeaking(false);
            autoHideBubble(4000);
          };
        }

        window.speechSynthesis.speak(utterance);
      });
    },
    [voiceOn, rate, stop, autoHideBubble]
  );

  const repeat = useCallback(() => {
    speak(lastSpokenTextRef.current);
  }, [speak]);

  const toggleVoice = useCallback(() => {
    setVoiceOn((prev) => {
      const next = !prev;
      if (!next) stop();
      savePrefs(next, rate);
      return next;
    });
  }, [rate, stop]);

  const setRate = useCallback(
    (newRate: number) => {
      setRateState(newRate);
      savePrefs(voiceOn, newRate);
    },
    [voiceOn]
  );

  const showBubbleWithText = useCallback(
    (text: string) => {
      setCurrentText(text);
      setBubbleVisible(true);
      autoHideBubble(10000);
    },
    [autoHideBubble]
  );

  return (
    <KurakSpeechContext.Provider
      value={{
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
        showBubbleWithText,
      }}
    >
      {children}
    </KurakSpeechContext.Provider>
  );
}

export function useKurakSpeech() {
  const context = useContext(KurakSpeechContext);
  if (!context) {
    throw new Error("useKurakSpeech must be used within a KurakSpeechProvider");
  }
  return context;
}
