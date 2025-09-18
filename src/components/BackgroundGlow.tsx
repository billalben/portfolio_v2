"use client";

import { useEffect, useRef, useState } from "react";

export default function BackgroundGlow() {
  const glowRef = useRef<HTMLDivElement | null>(null);
  const position = useRef({ x: 0, y: 0 });
  const [theme, setTheme] = useState("light");
  const [enabled, setEnabled] = useState(true);

  console.log("component rendered");

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
      const currentTheme =
        document.documentElement.getAttribute("data-theme") || "light";
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
            glowRef.current.style.background = `radial-gradient(
              600px at ${position.current.x}px ${position.current.y}px,
              ${
                theme === "dark"
                  ? "rgb(15 23 42/0.15)"
                  : "rgba(99,102,241,0.15)"
              },
              transparent 80%
            )`;
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

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed inset-0 z-[-1] transition duration-300"
    />
  );
}
