self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('necessaryCache').then((cache) => {
        return cache.addAll([
          '/',
          '/resume.pdf',
          '/index.html',
          '/assets/css/style.css',
          '/assets/css/bootstrap.min.css',
          '/assets/css/owl.carousel.min.css',
          '/assets/css/owl.theme.default.min.css',
          '/assets/css/unicons.css',
          '/assets/images/favicon/android-chrome-192x192.png',
          '/assets/images/favicon/android-chrome-512x512.png',
          '/assets/images/favicon/apple-touch-icon.png',
          '/assets/images/favicon/favicon-16x16.png',
          '/assets/images/favicon/favicon-32x32.png',
          '/assets/images/favicon/favicon.ico',
          '/assets/images/favicon/site.webmanifest',
          '/assets/images/favicon/favicon.png',
          '/assets/images/home.svg',
          '/assets/images/detox-dynasty.png',
          '/assets/images/divya-infocom.png',
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
