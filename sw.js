const CACHE_NAME = "my-pwa-cache-v1";
const FILES_TO_CACHE = [
  "/pawmaks/",  // Główna strona aplikacji
  "/pawmaks/index.html",  // Strona index
  "/pawmaks/icon-192.png",  // Ikona 192x192
  "/pawmaks/icon-512.png"  // Ikona 512x512
];

// Instalacja Service Workera i zapisanie plików w cache
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// Obsługa żądań - zwracanie plików z cache
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
