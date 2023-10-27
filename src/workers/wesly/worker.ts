/// <reference lib="webworker" />

declare const self: DedicatedWorkerGlobalScope;

import runCode from './interpreter';

export const run = (code: string): string[] => {
  return runCode(code);
};

export const stop = (): void => {
  self.close();
};
