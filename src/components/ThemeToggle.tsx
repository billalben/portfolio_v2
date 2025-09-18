"use client";

import { useState } from "react";
import DarkIcon from "./icons/DarkIcon";
import LightIcon from "./icons/LightIcon";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  // Toggle handler
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);

    // 🔥 Tell the rest of the app instantly
    window.dispatchEvent(new CustomEvent("theme-change", { detail: newTheme }));
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded-full text-sm px-2 py-2 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 cursor-pointer w-fit"
    >
      {theme === "light" ? <DarkIcon /> : <LightIcon />}
    </button>
  );
}
