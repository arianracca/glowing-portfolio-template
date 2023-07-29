import React from 'react';
import ProjectCard from './ProjectCard'

const ProjectsSection: React.FC = () => {
  // Array de proyectos con sus detalles
  const projects = [
    { title: 'Project 1', image: 'URL de la imagen del proyecto 1', link: 'URL del proyecto 1 completo' },
    { title: 'Project 2', image: 'URL de la imagen del proyecto 2', link: 'URL del proyecto 2 completo' },
    // Agregar más proyectos si es necesario
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-header">Let me show you some of my projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      <a className="buttons buttons-show-all" href="PENDIENTE" target="_blank">
        Show all
        <i className="fas fa-chevron-right"></i>
      </a>
    </section>
  );
};

export default ProjectsSection;
