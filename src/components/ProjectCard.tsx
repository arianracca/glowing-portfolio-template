import React from 'react';

interface Project {
  title: string;
  image: string;
  link: string;
}

const ProjectCard: React.FC<Project> = ({ title, image, link }) => {
  return (
    <a className="project" href={link} target="_blank">
      <img className="project-image" src={image} alt={title} />
      <p className="project-title">
        <span className="brackets">&lt;</span>
        {title}
        <span className="brackets">&#47;&gt;</span>
      </p>
    </a>
  );
};

export default ProjectCard;
