import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatProjectDate(date: string, locale: string) {
    return new Intl.DateTimeFormat(locale, { month: "long", year: "numeric" }).format(new Date(`${date}-01`));
}
