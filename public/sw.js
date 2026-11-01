// Projedudei PWA Service Worker
const CACHE_NAME = "projedudei-v8";

const STATIC_ASSETS = [
  "/",
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png",
  "/apple-touch-icon.png",
  "/lekcje/",
  "/10-lekcji/",
  "/10-lekcji-krok-po-kroku/",
  "/kurs/",
  "/simulator/",
  "/exam/",
  "/quiz/",
  "/playbook/",
  "/pobierz/",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn("[SW] Błąd pre-cache STATIC_ASSETS:", err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("[SW] Usuwanie starego cache:", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);

  // Nigdy nie przechwytuj ani nie cache'uj ciężkich plików pobierania
  if (url.pathname.startsWith("/downloads/")) {
    return;
  }

  const isNavigation =
    event.request.mode === "navigate" ||
    (event.request.headers.get("accept") &&
      event.request.headers.get("accept").includes("text/html"));

  const isDataOrRsc =
    url.pathname.endsWith(".txt") ||
    url.pathname.includes("/_next/data/") ||
    url.searchParams.has("_rsc");

  // Strategia NETWORK-FIRST dla żądań HTML, RSC oraz .txt
  if (isNavigation || isDataOrRsc) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const copy = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, copy);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // Fallback offline wyłącznie jeśli zasób w cache istnieje i ma status 200
          return caches.match(event.request).then((cached) => {
            if (cached && cached.status === 200) return cached;
            if (isNavigation) {
              return caches.match("/lekcje/") || caches.match("/");
            }
            return new Response("", { status: 408, statusText: "Offline" });
          });
        })
    );
    return;
  }

  // Strategia CACHE-FIRST dla statycznych assetów (_next/static, ikony)
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse && cachedResponse.status === 200) {
        // Rewalidacja w tle
        fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, networkResponse);
              });
            }
          })
          .catch(() => {});
        return cachedResponse;
      }

      return fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      });
    })
  );
});
