import { IconPlus } from "@tabler/icons-react";

import { cn } from "@/lib/utils";

type CardShellProps = {
    media: React.ReactNode;
    children: React.ReactNode;
    onClick?: () => void;
    actionLabel?: string;
};

const CardShell = ({ media, children, onClick, actionLabel }: CardShellProps) => {
    return (
        <div className="group relative grid grid-cols-1 gap-4 pb-1 transition-all sm:grid-cols-[120px_1fr] lg:hover:opacity-100! lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg dark:lg:group-hover:bg-slate-800/50" />

            <div className="relative">{media}</div>

            <div className={cn("z-10 flex flex-col gap-2 min-h-20 justify-start", onClick && "pe-6")}>{children}</div>

            {onClick && (
                <button
                    type="button"
                    onClick={onClick}
                    aria-label={actionLabel}
                    aria-haspopup="dialog"
                    className="absolute -inset-x-4 -inset-y-4 z-20 cursor-pointer rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue lg:-inset-x-6"
                >
                    <IconPlus
                        aria-hidden="true"
                        className="pointer-events-none absolute end-4 top-4 size-4 text-slate-400 transition-transform group-hover:rotate-90 group-focus-within:rotate-90 dark:text-slate-500 lg:end-6"
                    />
                </button>
            )}
        </div>
    );
};

export default CardShell;
