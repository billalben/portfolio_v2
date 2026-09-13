import { PROJECT_LIST } from "@/data/projects";

import ProjectCard from "../cards/ProjectCard";

const ProjectsList = () => {
    return (
        <ul className="group/list flex flex-col gap-8">
            {PROJECT_LIST.map((project) => (
                <li key={project.id}>
                    <ProjectCard project={project} />
                </li>
            ))}
        </ul>
    );
};

export default ProjectsList;
