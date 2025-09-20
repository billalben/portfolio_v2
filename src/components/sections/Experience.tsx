import { useTranslations } from "next-intl";

import Card from "../Card";

const EXPERIENCES = [
    {
        id: "exp1",
        url: "https://github.com/billalben/experience1",
    },
    {
        id: "exp2",
        url: "https://github.com/billalben/experience2",
    },
];

const Experience = () => {
    const t = useTranslations("Experiences");

    return (
        <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <ul className="group/list flex flex-col gap-8">
                {EXPERIENCES.map((experience) => (
                    <li key={experience.id}>
                        <Card
                            key={experience.id}
                            type="experience"
                            title={t(`${experience.id}.name`)}
                            description={t(`${experience.id}.description`)}
                            link={experience.url}
                            date={t(`${experience.id}.date`)}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Experience;
