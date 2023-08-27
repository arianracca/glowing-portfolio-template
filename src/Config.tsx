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
  logo: "https://via.placeholder.com/300", // Logo path
  pageTitle: "Software Dev | Portfolio", // Website Title
  // Linked Font
  typography: {
    fontLink:
      "https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700&display=swap",
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
  nameTitle: "Software Developer",
  upSubtitle: "Hello, my name is",
  downSubtitle: "This is my Profile",
  bgImage: "https://via.placeholder.com/1280",
};

//ABOUT SECTION DATA -----------------------------------------
export const aboutMe: AboutMe = {
  imgProfile: "https://via.placeholder.com/300",
  name: "Hello! I'm John Smith",
  role: "My Role",
  mainStack: "My Main tech stack",
  // This section allows to use HTML
  content: `
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              🔧 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              👥 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              🗣️ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              💡 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>🤝
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            `,
};

// Configurable stack cards
export const stackCardsData: StackCardData[] = [
  {
    title: "Frontend",
    technologies: [
      {
        name: "html5",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
      {
        name: "c",
        description: "C Certificates Description",
        certificateUrls: ["https://via.placeholder.com/1200"],
      },
      {
        name: "cobol",
        description: "Cobol Certificates Description",
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
    link: "https://www.linkedin.com/",
  },
  {
    socialMedia: "Github",
    link: "https://github.com/",
  },
  {
    socialMedia: "Email",
    link: "mailto:example@gmail.com",
  },
  {
    socialMedia: "Whatsapp",
    link: "https://wa.me/YOUR-NUMBER-HERE/?text=I'm%20interested%20in%20your%20work!",
  },
  {
    socialMedia: "Download Resume",
    link: "https://your-resume-link-here.com",
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
