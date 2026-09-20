import type { CSSProperties, SVGProps } from "react";

import type { SimpleIcon } from "simple-icons";

type BrandIconProps = SVGProps<SVGSVGElement> & {
    icon: SimpleIcon;
};

// Brand colors darker than this are hard to see on a dark background,
// so they get a lightened variant for dark mode.
const DARK_LUMINANCE_THRESHOLD = 0.2;
const LIGHTEN_AMOUNT = 0.65;

const parseHex = (hex: string) => {
    const value = hex.replace("#", "");
    const full =
        value.length === 3
            ? value
                  .split("")
                  .map((char) => char + char)
                  .join("")
            : value;

    return {
        r: parseInt(full.slice(0, 2), 16),
        g: parseInt(full.slice(2, 4), 16),
        b: parseInt(full.slice(4, 6), 16),
    };
};

const relativeLuminance = ({ r, g, b }: { r: number; g: number; b: number }) => {
    const channel = (value: number) => {
        const s = value / 255;
        return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
    };

    return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
};

const lighten = (hex: string, amount: number) => {
    const { r, g, b } = parseHex(hex);
    const mix = (value: number) => Math.round(value + (255 - value) * amount);

    return `#${[mix(r), mix(g), mix(b)].map((value) => value.toString(16).padStart(2, "0")).join("")}`;
};

const BrandIcon = ({ icon, style, ...props }: BrandIconProps) => {
    const brand = `#${icon.hex}`;
    const brandDark = relativeLuminance(parseHex(icon.hex)) < DARK_LUMINANCE_THRESHOLD ? lighten(icon.hex, LIGHTEN_AMOUNT) : brand;

    return (
        <svg
            role="img"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
            style={{ "--brand": brand, "--brand-dark": brandDark, ...style } as CSSProperties}
            {...props}
        >
            <path d={icon.path} fill="currentColor" />
        </svg>
    );
};

export default BrandIcon;
