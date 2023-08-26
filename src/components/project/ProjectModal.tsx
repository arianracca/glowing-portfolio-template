import React from "react";
import SwiperComponent from "./SwiperComponent";
import getIconForTechnology from "../../utils/getIconForTechnology";
import styles from "./styles.module.css";
import { FaTimes } from "react-icons/fa";
import { ProjectModalProps } from "../../Config";

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { title, images, description, technologies } = project;

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
            <button onClick={onClose}>
              <FaTimes />
            </button>
          </div>
        </div>
        <div className={styles["modal-description"]}>{description}</div>
        <div className={styles["modal-image-container"]}>
          <SwiperComponent images={images} index={0} />
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
