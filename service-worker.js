// service-worker.js
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('hi-res-music-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/style.css',
          '/app.js',
          '/manifest.json',
          '/audio-file.flac'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  
  self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
  });
  