export const weslyWorker = new ComlinkWorker<typeof import('./wesly/worker')>(
  new URL('./wesly/worker', import.meta.url),
);
