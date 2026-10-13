
import { useState, useEffect } from "react";

export function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    // 1. Check local storage preference
    const saved = localStorage.getItem("gradpath_theme");

    if (saved) return saved === "dark";

    // 2. Fall back to the system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("gradpath_theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("gradpath_theme", "light");
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  return {
    isDarkMode: isDark,
    toggleDarkMode,
  };
}
