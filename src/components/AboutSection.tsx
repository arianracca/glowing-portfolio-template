import StackCard from './StackCard'; // Importa el componente StackCard si no lo has hecho ya

const AboutSection = () => {
  const stackCardsData = [
    {
      title: 'Stack Card 1',
      technologies: ['Technology 1', 'Technology 2', 'Technology 3'],
    },
    {
      title: 'Stack Card 2',
      technologies: ['Technology 4', 'Technology 5', 'Technology 6'],
    },
    // Add more stack cards data as needed
  ];

  const handleDownloadCV = () => {
    // URL del enlace de Google Drive
    const cvLink =
      'https://drive.google.com/file/d/1u62YhHn7AjGtYWBbCt5TK7FhOzZXSSJw/view?usp=drive_link';

    // Abrir el enlace en una nueva pestaña
    window.open(cvLink, '_blank');
  };

  return (
    <div className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            {/* Imagen de perfil redonda */}
            <div className="profile-image">
              <img src="src/assets/my-photo.webp" alt="My Photo" />
              <button className="download-btn" onClick={handleDownloadCV}>
                Download my Resume
              </button>
            </div>
          </div>
          <div className="col-lg-8 align">
            {/* Contenido de la columna lateral a la izquierda */}
            <div className="about-info">
              <h2>Hello! I'm Arian</h2>
              <br />
              <div>
                <h3>Full Stack Developer with expertise in ⚛ React and Java Spring Boot 🍃</h3>
                <br />
                <p>
                  Currently, I'm pursuing a Technical Degree in Artificial Intelligence 🤖 to
                  satisfy my curiosity for cutting-edge technologies.
                </p>
                <br />
                <p>
                  🔧 My toolkit includes Angular, TypeScript, Python, Git, and MySQL, enabling me
                  to take on a wide range of exciting challenges in web development. Whether
                  building responsive frontends or robust backends, I'm ready for the task!
                </p>
                <br />
                <p>
                  👥 As a proactive and responsible team player, I thrive in collaborative
                  environments. Effective communication and kindness form the foundation of my
                  approach, ensuring seamless collaboration with my peers and delivering remarkable
                  results.
                </p>
                <br />
                <p>
                  🗣️ Moreover, my background as a Psychologist plays a pivotal role in my
                  interactions with fellow team members. My lateral thinking abilities, listening
                  and interpretation skills, and human and efficient problem-solving approach are
                  qualities that allow me to effectively collaborate within the team and find
                  creative and empathetic solutions.
                </p>
                <br />
                <p>
                  💡 My passion for learning drives me to stay at the forefront, constantly
                  updating my skills to keep up with the latest industry trends. I believe that
                  staying abreast of emerging technologies allows my work to reach the highest
                  quality and provide innovative solutions.
                </p>
                <br />
                <p>Feel free to reach out to me for collaboration opportunities.</p>
                <p>🤝 Together, we will create exceptional experiences.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid">
          {stackCardsData.map((data, index) => (
            <StackCard key={index} title={data.title} technologies={data.technologies} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
