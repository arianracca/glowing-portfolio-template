import { SocialBar } from '../common/SocialBar';
import StackCard from './StackCard';
import styles from './styles.module.css';


const AboutSection = () => {
  const stackCardsData = [
    {
      title: 'Frontend',
      technologies: 
      [
        'html5',
        'css3',
        'javascript',
        'typescript',
        'jest',
        'react',
        'angular',
        'wordpress',
        'bootstrap',
        'material ui'
      ],
    },
    {
      title: 'Backend',
      technologies:
      [
        'java',
        'springboot',
        'spring',
        'junit',
        'python',
        'mysql',
        'database',
      ],
    },
    {
      title: 'Tools',
      technologies:
      [
        'git',
        'bitbucket',
        'jenkins',
        'postman',
        'swagger',
        'jira',
        'kibana'
      ],
    },
    {
      title: 'Game Dev',
      technologies:
      [
        'godot',
      ],
    }
    // Add more stack cards data as needed
  ];

  return (
    <section id="about">
    <div className={styles['about-section']}>
      <div className={`container ${styles['container-width']}`}>
        <div className='row'>
          <div className='col-lg-4'>
            {/* Imagen de perfil redonda */}
            <div className={styles['profile-image']}>
              <img src="src/assets/my-photo.webp" alt="My Photo" />
              <SocialBar />
            </div>
          </div>
          <div className='col-lg-8'>

            {/* Contenido de la columna lateral a la izquierda */}
            <div className={styles['about-info']}>
              <h2>Hello! I'm Arian</h2>
              <div className={styles['sub-heading']}>
                <h3>Full Stack Developer</h3>
                <h4>React and Java Spring Boot</h4>
              </div>
              <div className={styles['about-content']}>
                <p>
                  Currently, I'm pursuing a Technical Degree in Artificial Intelligence 🤖 to
                  satisfy my curiosity for cutting-edge technologies.
                </p>
                <p>
                  🔧 My toolkit includes Angular, TypeScript, Python, Git, and MySQL, enabling me
                  to take on a wide range of exciting challenges in web development. Whether
                  building responsive frontends or robust backends, I'm ready for the task!
                </p>
                <p>
                  👥 As a proactive and responsible team player, I thrive in collaborative
                  environments. Effective communication and kindness form the foundation of my
                  approach, ensuring seamless collaboration with my peers and delivering remarkable
                  results.
                </p>
                <p>
                  🗣️ Moreover, my background as a Psychologist plays a pivotal role in my
                  interactions with fellow team members. My lateral thinking abilities, listening
                  and interpretation skills, and human and efficient problem-solving approach are
                  qualities that allow me to effectively collaborate within the team and find
                  creative and empathetic solutions.
                </p>
                <p>
                  💡 My passion for learning drives me to stay at the forefront, constantly
                  updating my skills to keep up with the latest industry trends. I believe that
                  staying abreast of emerging technologies allows my work to reach the highest
                  quality and provide innovative solutions.
                </p>
                <p>Feel free to reach out to me for collaboration opportunities.</p>
                <p>🤝 Together, we will create exceptional experiences.</p>
                </div>
            </div>

          </div>
        </div>
        <div className={styles['grid']}>
          {stackCardsData.map((data, index) => (
            <StackCard key={index} title={data.title} technologies={data.technologies} />
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default AboutSection;
