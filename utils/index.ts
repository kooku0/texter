import { RefObject } from 'react';

export function isNotNull<T>(x: T | null): x is T {
  return x !== null;
}

export function isDefined<T>(x: T | undefined): x is T {
  return x !== undefined;
}

export const checkRefNull = <T>(ref: RefObject<T>) => {
  const element = ref.current;

  if (!isNotNull(element)) {
    return () => null;
  }

  return (callback: (params: T) => any) => callback(element);
};
