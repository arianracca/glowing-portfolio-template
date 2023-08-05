import React from 'react';
import getIconForTechnology from '../../utils/getIconForTechnology';
import styles from './styles.module.css';

interface StackCardProps {
  title: string;
  technologies: string[];
}

const StackCard: React.FC<StackCardProps> = ({ title, technologies }) => {
  return (
    <div className={styles['stack-card']}>
      <h3 className={styles['stack-title']}>{title}</h3>
      <br />
      <div className={styles['stack-icons']}>
        {technologies.map((tech, index) => (
          <div title={tech} aria-label={tech} key={index} className={styles[`icon-${index + 1}`]}>
            {getIconForTechnology(tech)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackCard;
