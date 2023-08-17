import React from "react";
import SwiperComponent from "./SwiperComponent";
import getIconForTechnology from "../../utils/getIconForTechnology";
import styles from "./styles.module.css";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

interface Project {
  title: string;
  images: string[];
  link: string;
  repository: string;
  description: string;
  technologies: string[];
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { title, images, description, technologies } =
    project;

  return (
    <div className={styles["modal-overlay"]} onClick={onClose}>
      <div
        className={styles["modal-content"]}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles["modal-header"]}>
          <div className={styles["modal-container-title"]}>
            <h2 className={styles["modal-title"]}>{title}</h2>
            <div className={styles["modal-technologies"]}>
              {technologies.map((tech, index) => (
                <div className={styles["modal-technology-icon"]} key={index}>
                  {getIconForTechnology(tech)}
                </div>
              ))}
            </div>
          </div>
          <div className={styles["modal-close"]}>
            <button onClick={onClose}> X </button>
          </div>
        </div>
        <div className={styles["modal-description"]}>{description}</div>
        <div className={styles["modal-image-container"]}>
          <SwiperComponent images={images} />
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
