"use client";

import Image from "next/image";
import { ThemeType } from "./theme.constants";

interface Props {
  theme: ThemeType;
  onToggle: () => void;
}

export default function ThemeButton({ theme, onToggle }: Props) {
  const isDark = theme === "dark";

  return (
    <button
      onClick={onToggle}
      aria-label="Toggle theme"
      className={[
        "relative flex items-center",
        "h-[43px] w-20 p-1",
        "rounded-full",
        "transition-all duration-500 ",
        isDark
          ? "bg-accent-light border border-accent-2/30 "
          : "bg-amber-100 border-amber-300 shadow-[0_0_25px_rgba(251,191,36,0.1)]",
      ].join(" ")}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden rounded-full">
        {isDark ? (
          <>
            <span className="absolute left-2 top-0.5 text-[13px] opacity-800">
              🌙
            </span>
            <span className="absolute left-5 bottom-0.5 text-xs text-white opacity-60">
              ✦
            </span>
            <span className="absolute left-1 top-4 text-xs text-white opacity-60">
              ✦
            </span>
            <span className="absolute left-8 top-1 text-xs text-white opacity-60">
              ✦
            </span>
          </>
        ) : (
          <>
            <span className="absolute right-3 top-2 opacity-60">☁️</span>
            <span className="absolute right-8 bottom-1 opacity-40">☁️</span>
          </>
        )}
      </div>

      {/* Thumb */}
      <span
        className={[
          "relative z-10",
          "flex items-center justify-center",
          "size-[34px]",
          "transition-all duration-500",
          isDark ? "translate-x-[37px]" : "translate-x-0",
        ].join(" ")}
      >
        <Image
          src={isDark ? "/imgs/darkToggle.png" : "/imgs/lightToggle.png"}
          alt={isDark ? "Dark mode" : "Light mode"}
          width={36}
          height={36}
          priority
          className="object-contain bg-transparent border border-accent-2/30 rounded-full "
        />
      </span>
    </button>
  );
}
