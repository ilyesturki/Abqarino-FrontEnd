"use client";

import ThemeButton from "./ThemeButton";
import useThemeToggle from "./useThemeToggle";

export default function ThemeToggle() {
  const [theme, setTheme] = useThemeToggle();

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return <ThemeButton theme={theme} onToggle={handleToggle} />;
}
