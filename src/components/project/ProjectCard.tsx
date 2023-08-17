import React, { useState } from "react";
import SwiperComponent from "./SwiperComponent";
import getIconForTechnology from "../../utils/getIconForTechnology";
import styles from "./styles.module.css";
import ProjectModal from "./ProjectModal";

interface Project {
  title: string;
  images: string[];
  link: string;
  repository: string;
  description: string;
  technologies: string[];
}

const ProjectCard: React.FC<Project> = ({
  title,
  images,
  link,
  repository,
  description,
  technologies,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleButtonClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className={styles["project-card"]}>
      <div>
        <h4 className={styles["project-title"]}>
          <span className={styles["brackets"]}>&lt; </span>
          {title}
          <span className={styles["brackets"]}> &#47;&gt;</span>
        </h4>
        <div className={styles["project-image"]}>
          <SwiperComponent images={images} />
        </div>
      </div>
      <div className={styles["card-description"]}>
        <p>{description.slice(0, 120)}...</p>
        <a className={styles["more-details"]} onClick={openModal}>
          <span className={styles["brackets"]}>[</span>
          More Details
          <span className={styles["brackets"]}>]</span>
        </a>
      </div>
      <div>
        <div className={styles["project-icons"]}>
          {technologies.map((tech, index) => (
            <div className={styles["project-icon"]} key={index}>
              {getIconForTechnology(tech)}
            </div>
          ))}
        </div>
        <div className={styles["project-btn"]}>
          <button
            className={styles["project-buttons"]}
            onClick={() => handleButtonClick(link)}
            rel="noopener noreferrer"
            aria-label={`Deployed project ${title}`}
            title={`Deployed project ${title}`}
          >
            <span className={styles["brackets"]}>&lt;</span>
            Deploy
            <span className={styles["brackets"]}>&#47;&gt;</span>
          </button>
          <button
            className={styles["project-buttons"]}
            onClick={() => handleButtonClick(repository)}
            rel="noopener noreferrer"
            aria-label={`Repository project ${title}`}
            title={`Repository project ${title}`}
          >
            <span className={styles["brackets"]}>&lt;</span>
            Repository
            <span className={styles["brackets"]}>&#47;&gt;</span>
          </button>
        </div>
      </div>
      {isModalOpen && (
        <ProjectModal
          project={{
            title,
            images,
            link,
            repository,
            description,
            technologies,
          }}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ProjectCard;
