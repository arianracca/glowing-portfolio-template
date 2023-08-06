import React from "react";
import { SocialBar } from "../common/SocialBar";
import StackCard from "./StackCard";
import styles from "./styles.module.css";

const AboutSection: React.FC = () => {
  const stackCardsData = [
    {
      title: "Frontend",
      technologies: [
        {
          name: "html5",
          certificateUrls: ["html5-certificate-url"],
          description: "HTML5 Certificate Description",
        },
        // Agregar más tecnologías con sus certificados si es necesario
      ],
    },
    {
      title: "Backend",
      technologies: [
        {
          name: "java",
          certificateUrls: ["java-certificate-url"],
          description: "Java Certificate Description",
        },
        // Agregar más tecnologías con sus certificados si es necesario
      ],
    },
    {
      title: "Tools",
      technologies: [
        {
          name: "git",
          certificateUrls: ["git-certificate-url"],
          description: "Git Certificate Description",
        },
        // Agregar más tecnologías con sus certificados si es necesario
      ],
    },
    {
      title: "Game Dev",
      technologies: [
        {
          name: "godot",
          certificateUrls: ["godot-certificate-url"],
          description: "Godot Certificate Description",
        },
        // Agregar más tecnologías con sus certificados si es necesario
      ],
    },
    // Agregar más tarjetas de stack según sea necesario
  ];

  return (
    <section id="about">
      <div className={styles["about-section"]}>
        <div className={`container ${styles["container-width"]}`}>
          <div className="row">
            <div className="col-lg-4">
              {/* Imagen de perfil redonda */}
              <div className={styles["profile-image"]}>
                <img src="src/assets/my-photo.webp" alt="My Photo" />
                <SocialBar />
              </div>
            </div>
            <div className="col-lg-8">
              {/* Contenido de la columna lateral */}
              <div className={styles["about-info"]}>
                <h2>Hello! I'm Arian</h2>
                <div className={styles["sub-heading"]}>
                  <h3>Full Stack Developer</h3>
                  <h4>React and Java Spring Boot</h4>
                </div>
                <div className={styles["about-content"]}>
                  {/* Contenido del About */}
                </div>
              </div>
            </div>
          </div>
          <div className={styles["grid"]}>
            {stackCardsData.map((data, index) => (
              <StackCard
                key={index}
                title={data.title}
                technologies={data.technologies}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
