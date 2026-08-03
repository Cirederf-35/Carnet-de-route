// Service worker minimal : condition requise par Chrome pour proposer l'installation PWA complète.
// Ne fait aucune mise en cache avancée — le carnet reste 100% autonome via localStorage.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
