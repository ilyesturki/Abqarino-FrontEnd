import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export const THEMES = {
  light: {
    name: "Light",
    icon: <SunIcon className="size-5" />,
  },
  dark: {
    name: "Dark",
    icon: <MoonIcon className="size-5" />,
  },
} as const;

export type ThemeType = keyof typeof THEMES;