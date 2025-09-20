"use client";

import { JSX, useEffect, useRef } from "react";

type TProps = {
    logos: Array<{ src: JSX.Element; alt: string }>;
    move?: "left" | "right";
};

const LogoCarousel = ({ logos, move = "left" }: TProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Duplicate <ul> content for seamless infinite scroll
        const ul = containerRef.current.querySelector("ul");
        if (ul && !containerRef.current.querySelector("ul[aria-hidden='true']")) {
            const clone = ul.cloneNode(true) as HTMLElement;
            clone.setAttribute("aria-hidden", "true");
            containerRef.current.appendChild(clone);
        }
    }, []);

    // Define animation class based on move direction
    const animationClass = move === "left" ? "animate-[scroll_25s_linear_infinite]" : "animate-[scroll-right_25s_linear_infinite]";

    return (
        <div className="carousel-container relative w-full overflow-hidden group [mask-image:linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)]">
            <div ref={containerRef} className="flex w-max flex-nowrap">
                <ul className={`flex items-center [&_li]:mx-8 [&_img]:max-w-none ${animationClass}`}>
                    {logos.map((logo, i) => (
                        <li key={i} className="transition-opacity duration-300 group-hover:opacity-50 hover:opacity-100" title={logo.alt}>
                            {logo.src}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LogoCarousel;
