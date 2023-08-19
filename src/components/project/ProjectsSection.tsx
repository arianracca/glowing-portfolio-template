import ProjectCard from "./ProjectCard";
import styles from "./styles.module.css";

const ProjectsSection: React.FC = () => {
  // Array de proyectos con sus detalles
  const projects = [
    {
      title: "Project1",
      images: ["src/assets/bg-eye.webp", "src/assets/logo.png"],
      link: "URL del proyecto 1 completo",
      repository: "Url repo",
      description:
        "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. <br> È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum. Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum. Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum. Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.",
      technologies: ["React", "HTML5"],
    },
    {
      title: "Project2",
      images: ["src/assets/bg-eye.webp", "src/assets/logo.png"],
      link: "URL del proyecto 2 completo",
      repository: "Url repo",
      description: "description",
      technologies: ["React", "HTML5"],
    },
    {
      title: "Project3",
      images: ["src/assets/bg-eye.webp", "src/assets/logo.png"],
      link: "URL del proyecto 2 completo",
      repository: "Url repo",
      description: "description",
      technologies: ["React", "HTML5"],
    },
    {
      title: "Project4",
      images: ["src/assets/bg-eye.webp", "src/assets/logo.png"],
      link: "URL del proyecto 2 completo",
      repository: "Url repo",
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
