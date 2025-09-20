"use client";

import { ChangeEvent, ReactNode, useTransition } from "react";

import clsx from "clsx";
import { Locale } from "next-intl";
import { useParams } from "next/navigation";

import { usePathname, useRouter } from "@/i18n/navigation";

type Props = {
    children: ReactNode;
    defaultValue: string;
    label: string;
};

export default function LocaleSwitcherSelect({ children, defaultValue, label }: Props) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const params = useParams();

    function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        const nextLocale = event.target.value as Locale;
        startTransition(() => {
            router.replace(
                // @ts-expect-error -- safe in this context
                { pathname, params },
                { locale: nextLocale },
            );
        });
    }

    return (
        <div className="relative w-fit">
            <select
                id="locale-select"
                className={clsx(
                    "appearance-none rounded-md border border-gray-300 bg-white px-2 py-1 text-sm font-medium text-gray-900 shadow-sm",
                    "focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500",
                    "dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:focus:border-indigo-400 dark:focus:ring-indigo-400",
                    "cursor-pointer transition",
                    isPending && "opacity-60",
                )}
                defaultValue={defaultValue}
                disabled={isPending}
                onChange={onSelectChange}
            >
                {children}
            </select>
        </div>
    );
}
