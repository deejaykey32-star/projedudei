"use client";

import { useEffect, useState } from "react";

const CURRENT_CACHE = "projedudei-v8";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function PwaRegister() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1. Natychmiast usuń wszystkie stare wersje cache klienta
    if ("caches" in window) {
      caches.keys().then((keys) => {
        keys.forEach((key) => {
          if (key !== CURRENT_CACHE) {
            console.log("[PWA] Czyszczenie starego cache:", key);
            caches.delete(key);
          }
        });
      });
    }

    // 2. Rejestracja i automatyczna aktualizacja Service Workera
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js?v=8", { updateViaCache: "none" })
          .then((reg) => {
            console.log("PWA ServiceWorker zarejestrowany:", reg.scope);
            reg.update();
          })
          .catch((err) => {
            console.log("PWA ServiceWorker błąd:", err);
          });
      });
    }

    // 3. Sprawdź tryb standalone
    if (
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true
    ) {
      setIsInstalled(true);
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  return null;
}
