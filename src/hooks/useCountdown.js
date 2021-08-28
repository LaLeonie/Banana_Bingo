import { useState, useEffect } from 'react';

export const useCountdown = (time) => {
  let [count, setCount] = useState(time);
  let [display, setDisplay] = useState(true);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount(count--);
    }, 1000);
    if (count === 0) {
      setDisplay(false);
    }
    return () => clearInterval(timerId);
  }, [count]);

  return { display, count };
};
