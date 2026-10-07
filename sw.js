// Service Worker Rasmi SK Ranggu PWA
// Versi: 20261007_v27_cutout_logos
const CACHE_NAME = 'sk-ranggu-pwa-v27-cutout-logos';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './favicon.ico',
  './assets/logo-kpm-cutout.png',
  './assets/logo-skrg-cutout.png',
  './assets/logo-pwa.png',
  './assets/pwa/icon-192.png',
  './assets/pwa/icon-512.png',
  './assets/pwa/maskable-192.png',
  './assets/pwa/maskable-512.png',
  './assets/pwa/apple-touch-icon.png',
  './assets/pwa/favicon-32.png',
  './assets/pwa/favicon-64.png',
  './js/data.js',
  './js/sheets.js',
  './js/admin.js',
  './js/app.js',
  './css/style.css'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch((err) => {
        console.warn('Gagal memuat turun sebahagian cache aset PWA:', err);
      });
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('Memadam cache PWA lapuk:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);

  // Jangan pintas Google Sheets atau API luar
  if (url.origin !== self.location.origin) return;

  // Strategi Network-First: Ambil versi terkini dari pelayan, kemas kini cache di latar belakang
  event.respondWith(
    fetch(event.request, { cache: 'no-cache' })
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Sekiranya peranti berada dalam mod luar talian (offline)
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) return cachedResponse;
          if (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html')) {
            return caches.match('./index.html');
          }
        });
      })
  );
});
