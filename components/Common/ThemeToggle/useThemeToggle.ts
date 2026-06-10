"use client";

import { useEffect, useState } from "react";
import { ThemeType } from "./theme.constants";

export default function useThemeToggle() {
  const [theme, setTheme] = useState<ThemeType>("dark");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as ThemeType | null;

    const initial =
      stored ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");

    setTheme(initial);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");

    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme] as const;
}
