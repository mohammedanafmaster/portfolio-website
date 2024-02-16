self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('necessaryCache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/assets/css/style.css',
          '/assets/css/responsive.css',
          '/assets/favicon/android-chrome-192x192.png',
          '/assets/favicon/android-chrome-512x512.png',
          '/assets/favicon/apple-touch-icon.png',
          '/assets/favicon/favicon-16x16.png',
          '/assets/favicon/favicon-32x32.png',
          '/assets/favicon/favicon.ico',
          '/assets/favicon/site.webmanifest',
          '/assets/images/favicon.png',
          '/assets/images/profile.png',
          '/assets/js/script.js',
          '/assets/js/service-worker.js',
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
  