const CACHE_NAME = "frases-cache-v3";

const urlsToCache = [
    "./",
    "./index.html",
    "./app.js",
    "./styles.css",
    "./manifest.json"
];

// INSTALAR
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
    );
    self.skipWaiting();
});

// ACTIVAR
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys.map(key => {
                    if (key !== CACHE_NAME) return caches.delete(key);
                })
            )
        )
    );
    self.clients.claim();
});

// FETCH
self.addEventListener("fetch", event => {
    const url = event.request.url;

    // 🔹 Solo cachear archivos locales (tu dominio)
    if (!url.startsWith(self.location.origin)) return;

    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});
