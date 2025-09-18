import ProjectCard from "../ProjectCard";

const Projects = () => {
  const PROJECTS = [
    {
      id: 1,
      title: "Project One",
      description: "This is a brief description of Project One.",
      imageUrl: "/images/project1.png",
      projectUrl: "https://example.com/project-one",
      skills: ["React", "TypeScript", "CSS"],
    },
    {
      id: 2,
      title: "Project Two",
      description: "This is a brief description of Project Two.",
      imageUrl: "/images/project2.png",
      projectUrl: "https://example.com/project-two",
      skills: ["Next.js", "Tailwind CSS", "GraphQL"],
    },
  ];
  return (
    <div>
      {PROJECTS.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.imageUrl}
          link={project.projectUrl}
          skills={project.skills}
        />
      ))}
    </div>
  );
};

export default Projects;
