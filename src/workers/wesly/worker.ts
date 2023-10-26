/// <reference lib="webworker" />

declare const self: DedicatedWorkerGlobalScope;

import { runCode } from './dist';

export const run = (code: string): string[] => {
  return runCode(code);
};
