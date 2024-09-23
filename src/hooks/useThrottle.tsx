import { useRef } from "react";

export default function useThrottle(limit: number) {
  const lastRun = useRef(Date.now());

  return function(cb: () => void) {
    if (Date.now() - lastRun.current >= limit) {
      cb();
      lastRun.current = Date.now();
    }
  }
};
