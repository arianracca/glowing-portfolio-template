import {
  FaHtml5,
  FaReact,
  FaAngular,
  FaNode,
  FaJava,
  FaPython,
  FaCss3Alt,
  FaBootstrap,
  FaNpm,
  FaGitAlt,
  FaDocker,
  FaDatabase,
  FaUnity,
  FaJenkins,
  FaJira,
  FaBitbucket,
  FaTerminal,
  FaSlack,
  FaFontAwesome,
  FaPhp,
  FaWindows,
  FaLinux,
  FaApple,
  FaUbuntu,
  FaAndroid,
} from "react-icons/fa";
import {
  SiPostman,
  SiKibana,
  SiTensorflow,
  SiFastapi,
  SiMariadb,
  SiSwagger,
  SiExpress,
  SiNestjs,
  SiNextdotjs,
  SiWordpress,
  SiTypescript,
  SiJavascript,
  SiSpringboot,
  SiSpring,
  SiJest,
  SiJunit5,
  SiMysql,
  SiPostgresql,
  SiSqlite,
} from "react-icons/si";
import IconMaterialUi from "./icons/IconMaterialUi";
import IconDjango from "./icons/IconDjango";
import IconGodotengine from "./icons/IconGodotengine";

const getIconForTechnology = (technology: string) => {
  switch (technology.toLowerCase()) {
    // Programming Languages
    case "html5":
      return <FaHtml5 />;
    case "typescript":
      return <SiTypescript />;
    case "javascript":
      return <SiJavascript />;
    case "bash script" || "bash":
      return <FaTerminal />;
    case "java":
      return <FaJava />;
    case "python":
      return <FaPython />;
    case "php":
      return <FaPhp />;
    case "css3":
      return <FaCss3Alt />;

    // Frameworks
    case "junit":
      return <SiJunit5 />;
    case "springboot":
      return <SiSpringboot />;
    case "spring":
      return <SiSpring />;
    case "react":
      return <FaReact />;
    case "jest":
      return <SiJest />;
    case "angular":
      return <FaAngular />;
    case "node.js":
      return <FaNode />;
    case "express":
      return <SiExpress />;
    case "nest.js":
      return <SiNestjs />;
    case "next.js":
      return <SiNextdotjs />;
    case "wordpress":
      return <SiWordpress />;
    case "django":
      return <IconDjango />;
    case "tensorflow":
      return <SiTensorflow />;
    case "fastapi":
      return <SiFastapi />;
    case "bootstrap":
      return <FaBootstrap />;
    case "material ui":
      return <IconMaterialUi />;

    // Game Dev
    case "unity":
      return <FaUnity />;
    case "godot":
      return <IconGodotengine />;

    // Tools
    case "postman":
      return <SiPostman />;
    case "kibana":
      return <SiKibana />;
    case "swagger":
      return <SiSwagger />;
    case "jira":
      return <FaJira />;
    case "jenkins":
      return <FaJenkins />;
    case "bitbucket":
      return <FaBitbucket />;
    case "slack":
      return <FaSlack />;
    case "npm":
      return <FaNpm />;
    case "git":
      return <FaGitAlt />;
    case "font awesome":
      return <FaFontAwesome />;

    // Database
    case "database":
      return <FaDatabase />;
    case "mysql":
      return <SiMysql />;
    case "postgresql":
      return <SiPostgresql />;
    case "sqlite":
      return <SiSqlite />;
    case "mariadb":
      return <SiMariadb />;

    // DevOps
    case "docker":
      return <FaDocker />;

    // Operative Systems
    case "windows":
      return <FaWindows />;
    case "linux":
      return <FaLinux />;
    case "ubuntu":
      return <FaUbuntu />;
    case "apple" || "mac":
      return <FaApple />;
    case "android":
      return <FaAndroid />;
    default:
      return null;
  }
};

export default getIconForTechnology;
