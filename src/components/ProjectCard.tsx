import Image from "next/image";

type TProps = {
  image?: string;
  title?: string;
  description?: string;
  link?: string;
  skills?: string[];
};

const ProjectCard = ({ image, title, description, link, skills }: TProps) => {
  return (
    <div>
      <h2>{title}</h2>
      {image && <Image src={image} width={500} height={300} alt={title || "Project Image"} />}
      <p>{description}</p>
      {link && <a href={link}>View Project</a>}
      {skills && (
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectCard;
