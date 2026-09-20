"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

type Size = {
    width: number;
    height: number;
};

type TitleInspectProps = {
    children: React.ReactNode;
    className?: string;
};

const HOLD_DURATION = 3200;

const TitleInspect = ({ children, className }: TitleInspectProps) => {
    const t = useTranslations("Header");

    const headingRef = useRef<HTMLHeadingElement>(null);
    const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

    const [revealed, setRevealed] = useState(false);
    const [pinned, setPinned] = useState(false);
    const [size, setSize] = useState<Size | null>(null);

    const clearTimers = useCallback(() => {
        timers.current.forEach(clearTimeout);
        timers.current = [];
    }, []);

    const measure = useCallback(() => {
        const heading = headingRef.current;
        if (!heading) return;

        const rect = heading.getBoundingClientRect();
        setSize({ width: Math.round(rect.width), height: Math.round(rect.height) });
    }, []);

    // Reveal the content box, hold, then fade out.
    const play = useCallback(() => {
        clearTimers();
        setRevealed(true);
        timers.current.push(setTimeout(() => setRevealed(false), HOLD_DURATION));
    }, [clearTimers]);

    useEffect(() => {
        measure();

        let cancelled = false;
        const fonts = document.fonts;
        if (fonts) {
            fonts.ready.then(() => {
                if (!cancelled) measure();
            });
        }

        const handleResize = () => measure();
        window.addEventListener("resize", handleResize);

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (!reduceMotion) {
            play();
        }

        return () => {
            cancelled = true;
            clearTimers();
            window.removeEventListener("resize", handleResize);
        };
    }, [measure, play, clearTimers]);

    const handleMouseEnter = () => {
        if (pinned) return;
        clearTimers();
        setRevealed(true);
    };

    const handleMouseLeave = () => {
        if (pinned) return;
        clearTimers();
        setRevealed(false);
    };

    const togglePinned = () => {
        const next = !pinned;
        setPinned(next);
        clearTimers();
        setRevealed(next);
    };

    return (
        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {size && (
                <span
                    aria-hidden="true"
                    className={cn(
                        "absolute -top-6 start-0 z-20 rounded bg-slate-900 px-1.5 py-0.5 font-mono text-[10px] font-medium leading-none text-slate-100 transition-opacity duration-300 motion-reduce:transition-none",
                        revealed ? "opacity-100" : "opacity-0",
                    )}
                >
                    {`h1 ${size.width} × ${size.height}`}
                </span>
            )}

            <span
                aria-hidden="true"
                className={cn(
                    "pointer-events-none absolute inset-0 rounded-sm border border-accent-blue bg-accent-blue/15 transition-opacity duration-300 motion-reduce:transition-none",
                    revealed ? "opacity-100" : "opacity-0",
                )}
            />

            <h1 ref={headingRef} className={cn("relative z-10", className)}>
                {children}
            </h1>

            <button
                type="button"
                onClick={togglePinned}
                aria-pressed={pinned}
                className="absolute -top-6 end-0 z-20 hidden rounded border border-slate-300 bg-white/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-600 transition-colors [@media(pointer:coarse)]:inline-flex dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-300"
            >
                {t("inspectLayout")}
            </button>
        </div>
    );
};

export default TitleInspect;
