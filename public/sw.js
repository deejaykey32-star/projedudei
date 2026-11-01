// Projedudei PWA Service Worker - Bulletproof v9
const CACHE_NAME = "projedudei-v9";

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

// Instalacja i pobranie podstawowych zasobów do cache offline
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn("[SW] Błąd cache STATIC_ASSETS:", err);
      });
    })
  );
  self.skipWaiting();
});

// Aktywacja i bezwzględne usunięcie wszystkich starych cache
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

// Obsługa żądań: Zawsze najpierw sieć, z bezpiecznym fallbackiem offline
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);

  // Ignoruj inne domeny oraz duże pliki instalacyjne z /downloads/
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith("/downloads/")) return;

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // Jeśli sieć odpowiedziała poprawnie (status 200), opcjonalnie zaktualizuj cache
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(async () => {
        // Fallback TYLKO w przypadku całkowitego braku sieci (offline)
        const cached = await caches.match(event.request);
        if (cached) return cached;

        // Jeśli to była nawigacja po stronie, spróbuj zwrócić stronę główną lub lekcje z cache
        if (event.request.mode === "navigate") {
          const home = await caches.match("/");
          if (home) return home;
          const lekcje = await caches.match("/lekcje/");
          if (lekcje) return lekcje;
        }

        // Zawsze zwróć poprawny obiekt Response, NIGDY undefined
        return new Response("Aplikacja Projedudei jest w trybie offline.", {
          status: 503,
          headers: { "Content-Type": "text/plain; charset=utf-8" },
        });
      })
  );
});
