import { DependencyList, useEffect } from 'react';

export type AbortCallback = (signal: AbortSignal) => void;

export default function useAbort(effect: AbortCallback, deps?: DependencyList) {
  useEffect(() => {
    const controller = new AbortController;
    effect(controller.signal);
    return controller.abort.bind(controller);
  }, deps);
}
