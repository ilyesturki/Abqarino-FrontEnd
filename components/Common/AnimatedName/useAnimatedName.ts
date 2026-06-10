import { useEffect, useState } from "react";

const useAnimatedName = (name: string) => {
  const [index, setIndex] = useState(1);
  const [isReversing, setIsReversing] = useState(false);
  const delay = 1000;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        const max = name.length;

        if (!isReversing) {
          if (prev < max) return prev + 1;

          setTimeout(() => setIsReversing(true), 1000);
          return prev;
        } else {
          if (prev > 1) return prev - 1;

          setTimeout(() => setIsReversing(false), 1000);
          return prev;
        }
      });
    }, delay);

    return () => clearInterval(interval);
  }, [isReversing, name]);

  return { index };
};

export default useAnimatedName;
