import { useTranslations } from "next-intl";

import ProjectCard from "../ProjectCard";

const Projects = () => {
  const PROJECTS = [
    {
      id: "project1",
      image: "/images/p1.png",
      url: "https://github.com/you/project1",
      skills: ["React", "TypeScript", "Next.js"],
    },
    {
      id: "project2",
      image: "/images/p2.png",
      url: "https://github.com/you/project2",
      skills: ["JavaScript", "CSS", "HTML"],
    },
  ];

  const t = useTranslations("Projects");

  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      {PROJECTS.map((project) => (
        <ProjectCard
          key={project.id}
          title={t(`${project.id}.name`)}
          description={t(`${project.id}.description`)}
          image={project.image}
          link={project.url}
          skills={project.skills}
        />
      ))}
    </section>
  );
};

export default Projects;
