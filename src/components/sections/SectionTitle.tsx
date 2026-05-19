"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type SectionTitleProps = {
    id: string;
    children: React.ReactNode;
};

const SectionTitle = ({ id, children }: SectionTitleProps) => {
    const sentinelRef = useRef<HTMLDivElement>(null);
    const [isStuck, setIsStuck] = useState(false);

    useEffect(() => {
        const sentinel = sentinelRef.current;
        if (!sentinel) return;

        const observer = new IntersectionObserver(([entry]) => setIsStuck(!entry.isIntersecting), {
            rootMargin: "-1px 0px 0px 0px",
            threshold: 0,
        });

        observer.observe(sentinel);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div ref={sentinelRef} className="h-px w-full lg:hidden" aria-hidden />
            <h2
                id={`${id}-heading`}
                className={cn(
                    "sticky top-0 z-30 -mx-6 mb-8 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-900 transition-[background-color,border-color,box-shadow] duration-200 dark:text-slate-200 md:-mx-12 md:px-12 lg:hidden",
                    isStuck && " bg-slate-100/80 shadow-xs backdrop-blur-sm dark:bg-slate-900/80",
                )}
            >
                {children}
            </h2>
        </>
    );
};

export default SectionTitle;
