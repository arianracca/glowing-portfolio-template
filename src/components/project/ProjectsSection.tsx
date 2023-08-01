import React from 'react';
import ProjectCard from './ProjectCard';
import styles from './projects.module.css';

const ProjectsSection: React.FC = () => {
  // Array de proyectos con sus detalles
  const projects = [
    { title: 'Project 1', images: ['../../assets/bg-eye.webp', '../../assets/bg-eye.webp'], link: 'URL del proyecto 1 completo', repository: 'Url repo', description: 'description' },
    { title: 'Project 2', images: ['URL de la imagen del proyecto 2'], link: 'URL del proyecto 2 completo', repository: 'Url repo', description: 'description'  },
    // Agregar más proyectos si es necesario
  ];

  return (
    <section id="projects" >
      <div className={`container ${styles["projects-section"]}`}>
        <h2 className={styles["projects-header"]}>Let me show you some of my projects</h2>
        <div className={styles["projects-grid"]}>
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
