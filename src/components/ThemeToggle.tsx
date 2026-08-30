"use client";

import { useEffect, useState } from "react";

import DarkIcon from "./icons/DarkIcon";
import LightIcon from "./icons/LightIcon";

const ThemeToggle = () => {
    const [theme, setTheme] = useState<"light" | "dark">("dark");

    // Load theme from localStorage on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.setAttribute("data-theme", savedTheme);
        } else {
            // Optional: detect system preference
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            const initialTheme = prefersDark ? "dark" : "light";
            setTheme(initialTheme);
            document.documentElement.setAttribute("data-theme", initialTheme);
        }
    }, []);

    // Toggle handler
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);

        // Apply to DOM
        document.documentElement.setAttribute("data-theme", newTheme);

        // Save in localStorage
        localStorage.setItem("theme", newTheme);

        // Notify other parts of app
        window.dispatchEvent(new CustomEvent("theme-change", { detail: newTheme }));
    };

    return (
        <button
            onClick={toggleTheme}
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded-full text-sm px-2 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 cursor-pointer w-fit"
        >
            {theme === "light" ? <DarkIcon className="size-4" /> : <LightIcon className="size-4" />}
        </button>
    );
};

export default ThemeToggle;
