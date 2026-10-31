// Projedudei PWA Service Worker
const CACHE_NAME = "projedudei-v3";
const STATIC_ASSETS = [
  "/",
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png",
  "/apple-touch-icon.png",
  "/simulator/",
  "/exam/",
  "/playbook/",
  "/pobierz/",
  "/kurs/project-manager/",
  "/kurs/project-manager/pmp/",
  "/kurs/project-manager/prince2/",
  "/kurs/project-manager/ipma/",
  "/kurs/project-manager/capm/",
  "/kurs/scrum-master/",
  "/kurs/scrum-master/psm/",
  "/kurs/scrum-master/csm/",
  "/kurs/scrum-master/dassm/",
  "/kurs/product-owner/",
  "/kurs/product-owner/pspo/",
  "/kurs/product-owner/cspo/",
  "/kurs/product-owner/spoc/",
  "/kurs/product-manager/",
  "/kurs/product-manager/cpm/",
  "/kurs/product-manager/pragmatic-pmc/",
  "/kurs/product-manager/pm-po-it/",
  "/kurs/agile-analysis/",
  "/kurs/agile-analysis/pmi-acp/",
  "/kurs/agile-analysis/pmi-pba/"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch(() => {
        // Fallback for runtime assets
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
            console.log("[ServiceWorker] Usuwanie starego cache:", key);
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
  // Nie cache'uj samych pakietów instalacyjnych APK / AAB / IPA / ZIP w SW
  if (url.pathname.startsWith("/downloads/")) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Zwróć cache i odśwież w tle (stale-while-revalidate)
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

      return fetch(event.request)
        .then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200) {
            return networkResponse;
          }
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return networkResponse;
        })
        .catch(() => {
          if (event.request.headers.get("accept")?.includes("text/html")) {
            return caches.match("/");
          }
        });
    })
  );
});
