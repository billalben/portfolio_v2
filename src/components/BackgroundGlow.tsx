"use client";

import { useEffect, useRef, useState } from "react";

const BackgroundGlow = () => {
    const glowRef = useRef<HTMLDivElement | null>(null);
    const position = useRef({ x: 0, y: 0 });
    const [theme, setTheme] = useState("light");
    const [enabled, setEnabled] = useState(true);

    useEffect(() => {
        // ✅ Detect screen size and enable only for >=768px
        const handleResize = () => {
            setEnabled(window.innerWidth >= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        const handleThemeChange = (e: Event) => {
            const customEvent = e as CustomEvent<"light" | "dark">;
            setTheme(customEvent.detail);
        };

        window.addEventListener("theme-change", handleThemeChange);

        // ✅ Track theme changes
        const observer = new MutationObserver(() => {
            const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
            setTheme(currentTheme);
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["data-theme"],
        });

        // ✅ Mouse tracking with requestAnimationFrame
        let frameId: number;
        const handleMouseMove = (e: MouseEvent) => {
            position.current = { x: e.clientX, y: e.clientY };
            if (!frameId) {
                frameId = requestAnimationFrame(() => {
                    if (glowRef.current) {
                        const isDark = theme === "dark";
                        const tint = isDark ? "99,102,241" : "56,189,248";
                        const gradient = isDark
                            ? `radial-gradient(
              circle 600px at ${position.current.x}px ${position.current.y}px,
              rgba(${tint},0.035) 0%,
              rgba(${tint},0.018) 35%,
              rgba(${tint},0.006) 55%,
              transparent 72%
            )`
                            : `radial-gradient(
              circle 600px at ${position.current.x}px ${position.current.y}px,
              rgba(${tint},0.14) 0%,
              rgba(${tint},0.07) 35%,
              rgba(${tint},0.025) 55%,
              transparent 72%
            )`;
                        glowRef.current.style.background = gradient;
                    }
                    frameId = 0;
                });
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            observer.disconnect();
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("theme-change", handleThemeChange);
            cancelAnimationFrame(frameId);
        };
    }, [theme]);

    if (!enabled) return null; // ❌ Don't render on small screens

    return <div ref={glowRef} className="pointer-events-none fixed inset-0 z-[-1]" />;
};

export default BackgroundGlow;
