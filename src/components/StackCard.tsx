import React from 'react';

interface StackCardProps {
  title: string;
  technologies: string[];
}

const StackCard: React.FC<StackCardProps> = ({ title, technologies }) => {
  return (
    <div className="stack-card">
      <div className="card-content">
        <h3>{title}</h3>
        <ul>
          {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StackCard;
