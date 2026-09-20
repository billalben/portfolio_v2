type ExperienceDetailsProps = {
    summary: string;
    responsibilitiesTitle: string;
    responsibilities: string[];
    achievementsTitle: string;
    achievements: string[];
    stackTitle: string;
    stack: string[];
};

const ExperienceDetails = ({
    summary,
    responsibilitiesTitle,
    responsibilities,
    achievementsTitle,
    achievements,
    stackTitle,
    stack,
}: ExperienceDetailsProps) => {
    return (
        <div className="flex flex-col gap-5">
            <p>{summary}</p>

            <section className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{responsibilitiesTitle}</h3>
                <ul className="flex list-disc flex-col gap-1.5 ps-5 marker:text-slate-400 dark:marker:text-slate-500">
                    {responsibilities.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </section>

            <section className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{achievementsTitle}</h3>
                <ul className="flex list-disc flex-col gap-1.5 ps-5 marker:text-slate-400 dark:marker:text-slate-500">
                    {achievements.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </section>

            {stack.length > 0 && (
                <section className="flex flex-col gap-2">
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{stackTitle}</h3>
                    <ul className="flex flex-wrap gap-2">
                        {stack.map((skill) => (
                            <li key={skill}>
                                <span className="inline-flex items-center rounded-full border border-teal-200/50 bg-teal-50 px-3 py-1 text-xs font-medium leading-5 text-teal-700 dark:border-teal-400/20 dark:bg-teal-400/10 dark:text-teal-300">
                                    {skill}
                                </span>
                            </li>
                        ))}
                    </ul>
                </section>
            )}
        </div>
    );
};

export default ExperienceDetails;
