"use client";

import { useEffect, useId, useRef } from "react";

import { IconX } from "@tabler/icons-react";

import { cn } from "@/lib/utils";

type ModalProps = {
    open: boolean;
    onClose: () => void;
    title?: string;
    closeLabel: string;
    children: React.ReactNode;
};

const Modal = ({ open, onClose, title, closeLabel, children }: ModalProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const titleId = useId();

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (open && !dialog.open) {
            dialog.showModal();
        } else if (!open && dialog.open) {
            dialog.close();
        }
    }, [open]);

    useEffect(() => {
        if (!open) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [open]);

    return (
        <dialog
            ref={dialogRef}
            aria-labelledby={title ? titleId : undefined}
            onClose={onClose}
            onClick={(event) => {
                if (event.target === event.currentTarget) {
                    dialogRef.current?.close();
                }
            }}
            className={cn(
                "modal-dialog m-auto w-[calc(100%-2rem)] max-w-5xl rounded-xl border border-slate-200 bg-white p-0 text-slate-900 shadow-xl",
                "dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100",
                "open:animate-[modal-in_150ms_ease-out] motion-reduce:animate-none",
            )}
        >
            <div className="flex flex-col gap-4 p-6">
                <div className="flex items-start justify-between gap-4">
                    {title ? (
                        <h2 id={titleId} className="text-lg font-semibold leading-tight">
                            {title}
                        </h2>
                    ) : (
                        <span />
                    )}
                    <button
                        type="button"
                        onClick={() => dialogRef.current?.close()}
                        aria-label={closeLabel}
                        className="shrink-0 rounded-full p-1 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:focus-visible:ring-teal-400"
                    >
                        <IconX className="size-5" aria-hidden="true" />
                    </button>
                </div>

                <div className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{children}</div>
            </div>
        </dialog>
    );
};

export default Modal;
