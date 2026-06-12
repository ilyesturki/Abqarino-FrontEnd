"use client";

import useAnimatedName from "./useAnimatedName";

interface Props {
  name: string;
  className?: string;
}

const AnimatedName = ({ name, className }: Props) => {
  const { index } = useAnimatedName(name);

  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <span className={className}>
      {formattedName
        .slice(0, index)
        .split("")
        .map((char, i) => {
          const isLastTwo = i >= formattedName.length - 2;

          return (
            <span
              key={i}
              className={`text-md font-extrabold inline-block animate-fade-slide ml-[0.5px] ${
                isLastTwo ? "text-amber" : "text-slate-900 dark:text-ink"
              }`}
            >
              {char}
            </span>
          );
        })}
    </span>
  );
};

export default AnimatedName;
