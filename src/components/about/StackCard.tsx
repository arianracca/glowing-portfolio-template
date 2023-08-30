import { useState } from "react";
import getIconForTechnology from "../../utils/getIconForTechnology";
import styles from "./styles.module.css";
import TechnologyModal from "./TechnologyModal";

interface StackCardProps {
  title: string;
  technologies: Technology[];
}

interface Technology {
  name: string;
  certificateUrls: string[];
  description: string;
}

const StackCard: React.FC<StackCardProps> = ({ title, technologies }) => {
  const [selectedTechnology, setSelectedTechnology] =
    useState<Technology | null>(null);

  const handleIconClick = (technology: Technology) => {
    setSelectedTechnology(technology);
  };

  const handleCloseModal = () => {
    setSelectedTechnology(null);
  };

  return (
    <div className={styles["stack-card"]}>
      <h3 className={styles["stack-title"]}>{title}</h3>
      <br />
      <div className={styles["stack-icons"]}>
        {technologies.map((tech, index) => (
          <div
            title={tech.name.toUpperCase()}
            aria-label={tech.name}
            key={index}
            className={styles[`icon-${index + 1}`]}
            onClick={() => handleIconClick(tech)}
          >
            {getIconForTechnology(tech.name)}
          </div>
        ))}
      </div>
      {selectedTechnology && (
        <TechnologyModal
          technology={selectedTechnology}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default StackCard;
