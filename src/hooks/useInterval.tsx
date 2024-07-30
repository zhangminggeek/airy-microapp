import { useEffect, useRef } from 'react';

interface UseIntervalProps<P, R> {
  fn: (arg?: P) => R;
  interval?: number;
  immediate?: boolean;
  precondition?: boolean;
}

export const useInterval = <P, R>({
  fn,
  interval = 1000,
  immediate = false,
  precondition,
}: UseIntervalProps<P, R>) => {
  const timer = useRef<NodeJS.Timeout>();
  // 任务执行中
  const running = useRef<boolean>(false);

  useEffect(() => {
    if (precondition === true || precondition === undefined) {
      start();
    }

    return () => {
      clear();
    };
  }, [precondition]);

  const action = () => {
    if (running.current) return;
    try {
      running.current = true;
      fn();
    } catch (err) {
      console.log(err);
    } finally {
      running.current = false;
    }
  };

  const start = () => {
    if (immediate) {
      action();
    }
    const t = setInterval(action, interval);
    timer.current = t;
  };

  const clear = () => {
    if (!timer.current) return;
    clearInterval(timer.current);
    timer.current = undefined;
  };

  return {
    timer: timer.current,
    start,
    clear,
  };
};
