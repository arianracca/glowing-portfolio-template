import getIconForTechnology from '../utils/getIconForTechnology';

interface StackCardProps {
  title: string;
  technologies: string[];
}

const StackCard: React.FC<StackCardProps> = ({ title, technologies }) => {
  return (
    <div className="stack-card">
      <h3 className="stack-title">{title}</h3>
      <br />
      <div className="stack-icons">
        {technologies.map((tech, index) => (
          <div key={index} className={`icon-${index + 1}`}>
            {getIconForTechnology(tech)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackCard;
