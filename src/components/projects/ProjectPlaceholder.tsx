import { cn } from "@/lib/utils";

type ProjectPlaceholderProps = {
    className?: string;
};

const ProjectPlaceholder = ({ className }: ProjectPlaceholderProps) => (
    <div
        role="img"
        aria-label="Project preview"
        className={cn(
            "relative flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-[#0b1220] dark:to-[#1e293b]",
            className,
        )}
    >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(100,116,139,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.14)_1px,transparent_1px)] bg-[size:12px_12px] [mask-image:radial-gradient(circle_at_center,#000_30%,transparent_80%)] [-webkit-mask-image:radial-gradient(circle_at_center,#000_30%,transparent_80%)] dark:bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(106,166,200,0.2),transparent_70%)]" />

        <div className="relative flex size-10 items-center justify-center rounded-lg bg-slate-50 shadow-sm dark:bg-slate-800">
            <svg
                viewBox="25 27 46 42"
                aria-hidden="true"
                className="size-6 text-slate-500 dark:text-slate-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M40 36 L28 48 L40 60" className="text-accent-blue" />
                <path d="M56 36 L68 48 L56 60" className="text-accent-blue" />
                <path d="M52 30 L44 66" className="opacity-40" />
            </svg>
        </div>
    </div>
);

export default ProjectPlaceholder;
