import ProjectCard from "./ProjectCard";
import styles from "./styles.module.css";

const ProjectsSection: React.FC = () => {
  // Array de proyectos con sus detalles
  const projects = [
    {
      title: "Project 1",
      images: [
        "https://via.placeholder.com/600",
        "https://via.placeholder.com/300",
      ],
      link: "https://via.placeholder.com/300",
      repository: "https://via.placeholder.com/300",
      description:
        "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. <br> È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum. Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum. Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum. Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.",
      technologies: ["React", "HTML5"],
    },
    {
      title: "Project 2",
      images: [
        "https://via.placeholder.com/1200",
        "https://via.placeholder.com/300",
      ],
      link: "https://via.placeholder.com/300",
      repository: "https://via.placeholder.com/300",
      description: "description",
      technologies: ["React", "HTML5"],
    },
    {
      title: "Project 3",
      images: [
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
      ],
      link: "https://via.placeholder.com/300",
      repository: "https://via.placeholder.com/300",
      description: "description",
      technologies: ["React", "HTML5"],
    },
    {
      title: "Project4",
      images: [
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
      ],
      link: "https://via.placeholder.com/300",
      repository: "https://via.placeholder.com/300",
      description: "description",
      technologies: ["React", "HTML5"],
    },
    // Agregar más proyectos si es necesario
  ];

  return (
    <section id="projects">
      <div className={`container ${styles["projects-section"]}`}>
        <h2 className={styles["projects-header"]}>
          Let me show you some of my projects
        </h2>
        <div className={styles["projects-grid"]}>
          {projects.map((project, index) => (
            <ProjectCard key={project.title} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
