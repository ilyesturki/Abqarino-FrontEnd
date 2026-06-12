"use client";

import { useEffect, useState } from "react";
import { ThemeType } from "./theme.constants";

export default function useThemeToggle() {
  const [theme, setTheme] = useState<ThemeType>(() => {
    if (typeof window === "undefined") return "dark";

    return (localStorage.getItem("theme") as ThemeType | null) ?? "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme] as const;
}
