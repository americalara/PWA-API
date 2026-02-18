const CACHE_NAME = "frases-cache-v2";

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
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            )
        )
    );
    self.clients.claim();
});

// FETCH
self.addEventListener("fetch", event => {

    // 🔹 Si es la API, pasar directo a internet
    if (event.request.url.includes("api.quotable.io")) {
        event.respondWith(fetch(event.request));
        return;
    }

    // 🔹 Para todos los demás archivos cacheados
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});
