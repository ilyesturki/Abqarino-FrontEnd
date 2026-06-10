"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/20/solid";
import useThemeToggle from "./useThemeToggle";

type ThemeType = "light" | "dark" | "system";

const themes: Record<ThemeType, { name: string; Icon: React.ReactElement }> = {
  light: { name: "Light", Icon: <SunIcon width={20} height={20} /> },
  dark: { name: "Dark", Icon: <MoonIcon width={20} height={20} /> },
  system: {
    name: "System",
    Icon: <ComputerDesktopIcon width={20} height={20} />,
  },
};

const ThemeToggle = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [theme, setTheme] = useThemeToggle() as [
    ThemeType,
    React.Dispatch<React.SetStateAction<ThemeType>>
  ];
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropDown = () => {
    setDropDownOpen(!dropDownOpen);
  };

  const handleThemeChange = (newTheme: ThemeType) => {
    setTheme(newTheme);
    setDropDownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropDownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropDown}
        className="flex items-center gap-1.5 bg-accent-light text-accent-dim text-xs font-bold tracking-widest px-3 py-2.5 rounded-full border border-accent-2/30"
      >
        {themes[theme].Icon}
        {themes[theme].name}
      </button>
      {dropDownOpen && (
        <div className="absolute right-0 w-36 mt-2  bg-accent-light text-accent-dim text-xs font-bold tracking-widest rounded-md border border-accent-2/30 z-50">
          {(Object.keys(themes) as ThemeType[]).map((key) => (
            <button
              key={key}
              onClick={() => handleThemeChange(key)}
              className={`flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:opacity-70 ${
                theme === key ? "font-semibold" : ""
              }`}
            >
              {themes[key].Icon}
              <span className="ml-2">{themes[key].name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
