// Projedudei PWA Service Worker
const CACHE_NAME = "projedudei-v7";

const STATIC_ASSETS = [
  "/",
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png",
  "/apple-touch-icon.png",
  "/lekcje/",
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

  // 1. Nigdy nie przechwytuj ani nie cache'uj ciężkich plików pobierania w SW
  if (url.pathname.startsWith("/downloads/")) {
    return;
  }

  const isNavigation =
    event.request.mode === "navigate" ||
    (event.request.headers.get("accept") &&
      event.request.headers.get("accept").includes("text/html"));

  const isRscPayload =
    url.pathname.endsWith(".txt") ||
    url.pathname.includes("/_next/data/");

  // 2. Strategia NETWORK-FIRST dla żądań nawigacyjnych i RSC (aby zapobiec 404 i wyświetlaniu starego cache)
  if (isNavigation || isRscPayload) {
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
          // Fallback offline do cache
          return caches.match(event.request).then((cached) => {
            if (cached) return cached;
            if (isNavigation) {
              return caches.match("/") || caches.match("/lekcje/");
            }
            return new Response("", { status: 408, statusText: "Offline" });
          });
        })
    );
    return;
  }

  // 3. Strategia CACHE-FIRST z rewalidacją w tle dla zasobów statycznych (_next/static, ikony, obrazy)
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
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
