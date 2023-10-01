import { DependencyList, useEffect } from 'react';

export type AbortCallback = (signal: AbortSignal) => void;

export default function useAbort(effect: AbortCallback, deps?: DependencyList) {
  useEffect(() => {
    const abortController = new AbortController();
    effect(abortController.signal);
    return () => {
      abortController.abort();
    };
  }, deps);
}
