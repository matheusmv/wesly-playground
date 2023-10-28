import { registerSW } from 'virtual:pwa-register';

export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    const updateSW = registerSW({
      onNeedRefresh() {
        const ok = confirm('An update is available! Confirm to update and reload.');
        if (ok) {
          updateSW(true);
        }
      },
    });
  }
}
