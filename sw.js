self.addEventListener('install', () => { self.skipWaiting(); });
self.addEventListener('activate', () => { console.log('Service Worker active'); });
self.addEventListener('fetch', (event) => {});
