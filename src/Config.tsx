// All interfaces
export interface Technology {
  name: string;
  description: string;
  certificateUrls: string[];
}

export interface StackCardData {
  title: string;
  technologies: Technology[];
}

export interface AboutMe {
  imgProfile: string;
  name: string;
  role: string;
  mainStack: string;
  content: string;
}

export interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export interface Project {
  title: string;
  index: number;
  images: string[];
  link: string;
  repository: string;
  description: string;
  technologies: string[];
}

// All configurable objects here:

//GENERAL DATA --------------------------------------
export const generalData = {
  logo: "../../assets/logo-wh.png", // Logo path
  pageTitle: "Arian Racca | Portfolio", // Website Title
  // Linked Font
  fontLink:
    "https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700&display=swap",
  typography: {
    fontFamily: "'Rajdhani', sans-serif",
  },
  colors: {
    colorDark: "#0b0707",
    colorPrimary: "#2f492d",
    colorSecondary: "#8aba85",
    colorHighlight: "#29223a",
    transparent: "#5e546780",
    colorGray: "#495A59",
    colorWhite: "#e4e4e4",
  },
};

//WELCOME SECTION DATA ------------------------------------------
export const welcomeData = {
  nameTitle: "Arian Racca",
  upSubtitle: "Hello, my name is",
  downSubtitle: "This is my Profile",
};

//ABOUT SECTION DATA -----------------------------------------
export const aboutMe: AboutMe = {
  imgProfile: "https://via.placeholder.com/300",
  name: "Hello! I'm Arian",
  role: "Full Stack Developer",
  mainStack: "Java Spring Boot & React",
  // This section allows to use HTML
  content: `
              <p>
              Currently, I'm pursuing a Technical Degree in Artificial
              Intelligence 🤖 to satisfy my curiosity for cutting-edge
              technologies.
            </p>
            <p>
              🔧 My toolkit includes Angular, TypeScript, Python, Git, and
              MySQL, enabling me to take on a wide range of exciting
              challenges in web development. Whether building responsive
              frontends or robust backends, I'm ready for the task!
            </p>
            <p>
              👥 As a proactive and responsible team player, I thrive in
              collaborative environments. Effective communication and
              kindness form the foundation of my approach, ensuring
              seamless collaboration with my peers and delivering
              remarkable results.
            </p>
            <p>
              🗣️ Moreover, my background as a Psychologist plays a pivotal
              role in my interactions with fellow team members. My lateral
              thinking abilities, listening and interpretation skills, and
              human and efficient problem-solving approach are qualities
              that allow me to effectively collaborate within the team and
              find creative and empathetic solutions.
            </p>
            <p>
              💡 My passion for learning drives me to stay at the
              forefront, constantly updating my skills to keep up with the
              latest industry trends. I believe that staying abreast of
              emerging technologies allows my work to reach the highest
              quality and provide innovative solutions.
            </p>
            <p>
              Feel free to reach out to me for collaboration
              opportunities.
            </p>
            <p>🤝 Together, we will create exceptional experiences.</p>
            `,
};

// Configurable stack cards
export const stackCardsData: StackCardData[] = [
  {
    title: "Frontend",
    technologies: [
      {
        name: "html5",
        description: "HTML5 Certificates Description",
        certificateUrls: [
          "https://via.placeholder.com/1000",
          "https://via.placeholder.com/800",
        ],
      },
      {
        name: "css3",
        description: "Css3 Certificates Description",
        certificateUrls: [
          "https://via.placeholder.com/1300",
          "https://via.placeholder.com/500",
        ],
      },
      {
        name: "javascript",
        description: "HTML5 Certificates Description",
        certificateUrls: [
          "https://via.placeholder.com/500",
          "https://via.placeholder.com/900",
        ],
      },
      // Add more technologies with their respective descriptions and certificates
    ],
  },
  {
    title: "Backend",
    technologies: [
      {
        name: "java",
        description: "Java Certificates Description",
        certificateUrls: ["https://via.placeholder.com/1000"],
      },
      {
        name: "python",
        description: "Python Certificates Description",
        certificateUrls: ["https://via.placeholder.com/1200"],
      },
      // Add more technologies with their respective descriptions and certificates
    ],
  },
  // Add more stack cards if needed for other purposes
];

// SOCIAL BAR ------------------------------------------
// Update getIconForSocialMedia with more cases if there are different socialMedia than stantard
export const socialMediaData = [
  {
    socialMedia: "LinkedIn",
    link: "",
  },
  {
    socialMedia: "Github",
    link: "",
  },
  {
    socialMedia: "Email",
    link: "",
  },
  {
    socialMedia: "Whatsapp",
    link: "",
  },
  {
    socialMedia: "Download CV",
    link: "https://drive.google.com/file/d/1u62YhHn7AjGtYWBbCt5TK7FhOzZXSSJw/view?usp=drive_link",
  },
  //Add more social Media
];

// PROJECTS SECTION ---------------------------------------
export const projectHeader = "Let me show you some of my projects";

// Array with your projects data
export const projects = [
  {
    title: "Project 1",
    images: [
      "https://via.placeholder.com/600",
      "https://via.placeholder.com/300",
    ],
    link: "https://via.placeholder.com/300",
    repository: "",
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
  // Add more projects here
];
