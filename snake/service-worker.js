const CACHE_NAME = "snake-calc2-v1";

// Archivos que tu app necesita para funcionar offline
const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./config.js",
  "./game.js",
  "./snake.js",
  "./food.js",
  "./quiz.js",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

// Instalar: guardar archivos en caché
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

// Activar: limpiar cachés viejos
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => (key !== CACHE_NAME ? caches.delete(key) : null)))
    )
  );
  self.clients.claim();
});

// Fetch: devolver cache si existe, si no, red
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
