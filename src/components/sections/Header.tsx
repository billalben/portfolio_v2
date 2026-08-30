"use client";

import { useEffect, useMemo, useState } from "react";

import { IconFileCvFilled } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

import { GithubIcon, GmailIcon, LinkedinIcon } from "../icons";
import LocaleSwitcher from "../LocaleSwitcher";
import ThemeToggle from "../ThemeToggle";

type TSection = "about" | "experience" | "skills" | "projects";

type TNavItem = {
    href: string;
    id: TSection;
    label: string;
};

const Header = () => {
    const t = useTranslations("Header");

    const navItems = useMemo<TNavItem[]>(
        () => [
            { href: "#about", id: "about", label: t("sections.about") },
            { href: "#experience", id: "experience", label: t("sections.experience") },
            { href: "#skills", id: "skills", label: t("sections.skills") },
            { href: "#projects", id: "projects", label: t("sections.projects") },
        ],
        [t],
    );

    const [activeSection, setActiveSection] = useState<TSection>(navItems[0].id);

    const socialLinks = useMemo(
        () => [
            {
                href: "https://github.com/billalben",
                icon: <GithubIcon className="w-6 h-6 dark:text-white" />,
                label: "GitHub",
                download: false,
            },
            {
                href: "https://www.linkedin.com/in/billal-benzazoua/",
                icon: <LinkedinIcon className="w-6 h-6" />,
                label: "LinkedIn",
                download: false,
            },
            { href: "mailto:billalben@gmail.com", icon: <GmailIcon className="w-6 h-6" />, label: "Gmail", download: false },
            {
                href: "/Billal_Benzazoua_CV.pdf",
                icon: <IconFileCvFilled className="w-6 h-6 text-gray-900 dark:text-white" />,
                label: "CV",
                download: true,
            },
        ],
        [],
    );

    useEffect(() => {
        const sectionIds = navItems.map((item) => item.id);
        const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

        if (sections.length === 0) return;

        const handleScroll = () => {
            let current = sectionIds[0];
            for (const section of sections) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 150) current = section.id as TSection;
            }
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [navItems]);

    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
            <div className="flex items-center gap-4">
                <ThemeToggle />
                <LocaleSwitcher />
            </div>

            <div className="mt-8 flex flex-col gap-2">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-200 sm:text-5xl">{t("name")}</h1>
                <h2 className="text-lg font-semibold tracking-tight text-slate-700 dark:text-slate-200 sm:text-xl">{t("title")}</h2>
                <p className="max-w-xs leading-normal text-slate-600 dark:text-slate-400">{t("description")}</p>
            </div>

            <nav className="nav hidden lg:block mt-8">
                <ul className="flex flex-col gap-0.5 w-max">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className={`group flex items-center py-3 ${isActive ? "active" : ""}`}
                                    aria-current={isActive ? "page" : undefined}
                                >
                                    <span
                                        className={`nav-indicator mx-4 h-px w-8 transition-all duration-300
                      ${isActive ? "w-16 bg-slate-900 dark:bg-slate-200" : "bg-slate-300 dark:bg-slate-600"}
                      group-hover:w-16 group-hover:bg-slate-900 dark:group-hover:bg-slate-200
                      group-focus-visible:w-16 group-focus-visible:bg-slate-900 dark:group-focus-visible:bg-slate-200`}
                                    ></span>
                                    <span
                                        className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors
                      ${isActive ? "text-slate-900 dark:text-slate-200" : "text-slate-500 dark:text-slate-400"}
                      group-hover:text-slate-900 dark:group-hover:text-slate-200
                      group-focus-visible:text-slate-900 dark:group-focus-visible:text-slate-200`}
                                    >
                                        {item.label}
                                    </span>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <ul className="mt-8 flex gap-4 items-center group" aria-label="Social media">
                {socialLinks.map((link) => (
                    <li key={link.href} className="transition-opacity duration-300 group-hover:opacity-50 hover:opacity-100">
                        <a
                            href={link.href}
                            target={link.download ? undefined : "_blank"}
                            rel="noopener noreferrer"
                            download={link.download}
                            aria-label={link.download ? link.label : `${link.label} (opens in a new tab)`}
                        >
                            {link.icon}
                        </a>
                    </li>
                ))}
            </ul>
        </header>
    );
};

export default Header;
