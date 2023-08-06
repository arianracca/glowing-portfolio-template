import React from "react";
import styles from "./styles.module.css";

interface TechnologyModalProps {
  technology: Technology;
  onClose: () => void;
}

interface Technology {
  name: string;
  certificateUrls: string[];
  description: string;
}

const TechnologyModal: React.FC<TechnologyModalProps> = ({
  technology,
  onClose,
}) => {
  return (
    <div className={styles["modal-overlay"]} onClick={onClose}>
      <div
        className={styles["modal-content"]}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{technology.name}</h2>
        <p>{technology.description}</p>
        <div className={styles["certificate-container"]}>
          {technology.certificateUrls.map((url, index) => (
            <img key={index} src={url} alt={`Certificate ${index + 1}`} />
          ))}
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default TechnologyModal;
