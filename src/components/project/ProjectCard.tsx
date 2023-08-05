import React from 'react';
import SwiperComponent from "./SwiperComponent";
import styles from './styles.module.css';

interface Project {
  title: string;
  images: string[];
  link: string;
  repository: string;
  description: string;
}

const ProjectCard: React.FC<Project> = ({ title, images, link, repository, description }) => {

  const handleButtonClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className={styles["project-card"]}>

      <div className={styles["project-image"]}>
        <SwiperComponent images={images} />
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
        <button
          className={styles["project-buttons"]}
          onClick={() => handleButtonClick(link)}
          rel="noopener noreferrer"
          aria-label={`Deployed project ${title}`}
          title={`Deployed project ${title}`}>
          <span className={styles["brackets"]}>&lt;</span>
          Deploy
          <span className={styles["brackets"]}>&#47;&gt;</span>
        </button>
        <button
          className={styles["project-buttons"]}
          onClick={() => handleButtonClick(repository)}
          rel="noopener noreferrer"
          aria-label={`Repository project ${title}`}
          title={`Repository project ${title}`}>
          <span className={styles["brackets"]}>&lt;</span>
          Repository
          <span className={styles["brackets"]}>&#47;&gt;</span>
        </button>
      </div>

    </div>
  );
};

export default ProjectCard;
