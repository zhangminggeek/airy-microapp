import { useRef, useState } from 'react';

const DEFAULT_TOTAL_TIME = 60;

interface UseCountdownProps {
  total?: number;
}

export const useCountdown = ({
  total = DEFAULT_TOTAL_TIME,
}: UseCountdownProps = {}) => {
  // 倒计时数字
  const [time, setTime] = useState<number>(total);
  // 倒计时数字
  const [countdowning, setCountdowning] = useState<boolean>(false);
  // 倒计时定时器
  const timer = useRef<NodeJS.Timeout>();

  // 开始倒计时
  const startCountdown = () => {
    setCountdowning(true);
    const t = setInterval(() => {
      setTime((t) => {
        if (t <= 0) {
          clearInterval(timer.current);
          timer.current = undefined;
          setCountdowning(false);
          return total;
        } else {
          return t - 1;
        }
      });
    }, 1000);
    timer.current = t;
  };

  return {
    time,
    countdowning,
    startCountdown,
  };
};
