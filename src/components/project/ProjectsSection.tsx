import ProjectCard from "./ProjectCard";
import styles from "./styles.module.css";
import { projects, projectHeader } from "../../Config";

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects">
      <div className={`container ${styles["projects-section"]}`}>
        <h2 className={styles["projects-header"]}>{projectHeader}</h2>
        <div className={styles["projects-grid"]}>
          {projects.map((project, index) => (
            <ProjectCard key={project.title} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
