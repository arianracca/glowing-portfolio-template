import CarouselComponent from "./CarouselComponent";
import styles from './projects.module.css';

interface Project {
  title: string;
  images: string[];
  link: string;
  repository: string;
  description: string;
}

const ProjectCard: React.FC<Project> = ({ title, images, link, repository, description }) => {
  return (
    <div className={styles["project-card"]}>

      <div className={styles["project-image"]}>
        <CarouselComponent  images={images}/>
      </div>
      <h4 className={styles["project-title"]}>
        <span className={styles["brackets"]}>&lt;</span>
        {title}
        <span className={styles["brackets"]}>&#47;&gt;</span>
      </h4>
      <div>
        <p>
          {description}
        </p>
      </div>
      <div className={styles["project-btn"]}>
        <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`Deployed project ${title}`}>
          <button className={styles["project-buttons"]}>
            <span className={styles["brackets"]}>&lt;</span>
              Deploy 
            <span className={styles["brackets"]}>&#47;&gt;</span>
          </button>
        </a>
        <a href={repository} target="_blank" rel="noopener noreferrer" aria-label={`Repository project ${title}`}>
          <button className={styles["project-buttons"]}>
            <span className={styles["brackets"]}>&lt;</span>
              Repository 
            <span className={styles["brackets"]}>&#47;&gt;</span>
          </button>
        </a>
      </div>

    </div>
  );
};

export default ProjectCard;
