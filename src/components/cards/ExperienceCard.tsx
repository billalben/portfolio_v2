"use client";

import { useState } from "react";

import Modal from "../Modal";
import CardShell from "./CardShell";

type ExperienceCardProps = {
    title: string;
    date: string;
    description: string;
    highlights?: string[];
    closeLabel: string;
    modalContent: React.ReactNode;
};

const ExperienceCard = ({ title, date, description, highlights, closeLabel, modalContent }: ExperienceCardProps) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <CardShell
                onClick={() => setOpen(true)}
                actionLabel={title}
                media={<span className="text-sm font-semibold text-slate-700 dark:text-slate-400">{date}</span>}
            >
                <div>
                    <h3 className="font-medium leading-tight text-slate-900 dark:text-slate-100 text-base">{title}</h3>

                    <p className="text-sm leading-normal text-slate-600 dark:text-slate-300 mt-1">{description}</p>
                </div>

                {highlights && highlights.length > 0 && (
                    <ul className="mt-1 flex list-disc flex-col gap-1 ps-5 text-sm leading-normal text-slate-600 dark:text-slate-300 marker:text-slate-400 dark:marker:text-slate-500">
                        {highlights.map((highlight) => (
                            <li key={highlight}>{highlight}</li>
                        ))}
                    </ul>
                )}
            </CardShell>

            <Modal open={open} onClose={() => setOpen(false)} title={title} closeLabel={closeLabel} size="xl">
                {modalContent}
            </Modal>
        </>
    );
};

export default ExperienceCard;
