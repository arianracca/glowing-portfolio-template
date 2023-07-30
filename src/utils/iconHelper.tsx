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
    FaFontAwesome
} from 'react-icons/fa';
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
    SiSqlite
} from 'react-icons/si';
import IconMaterialUi from './icons/IconMaterialUi';
import IconBrandDjango from './icons/IconBrandDjango';
import IconGodotengine from './icons/IconGodotengine';


const getIconForTechnology = (technology: string) => {
    switch (technology.toLowerCase()) {
        case 'html5':
            return <FaHtml5 />;
        case 'react':
            return <FaReact />;
        case 'jest':
            return <SiJest />;
        case 'angular':
            return <FaAngular />;
        case 'node.js':
            return <FaNode />;
        case 'bash script' || 'bash':
            return <FaTerminal />;
        case 'java':
            return <FaJava />;
        case 'junit':
            return <SiJunit5 />;
        case 'springboot':
            return <SiSpringboot />;
        case 'spring':
            return <SiSpring />;
        case 'python':
            return <FaPython />;
        case 'django':
            return <IconBrandDjango />;
        case 'css3':
            return <FaCss3Alt />;
        case 'bootstrap':
            return <FaBootstrap />;
        case 'material ui':
            return <IconMaterialUi />;
        case 'npm':
            return <FaNpm />;
        case 'git':
            return <FaGitAlt />;
        case 'docker':
            return <FaDocker />;
        case 'database':
            return <FaDatabase />;
        case 'unity':
            return <FaUnity />;
        case 'godot':
            return <IconGodotengine />;
        case 'font awesome':
            return <FaFontAwesome />;
        case 'postman':
            return <SiPostman />;
        case 'kibana':
            return <SiKibana />;
        case 'tensorflow':
            return <SiTensorflow />;
        case 'fastapi':
            return <SiFastapi />;
        case 'mariadb':
            return <SiMariadb />;
        case 'swagger':
            return <SiSwagger />;
        case 'express':
            return <SiExpress />;
        case 'nest.js':
            return <SiNestjs />;
        case 'next.js':
            return <SiNextdotjs />;
        case 'wordpress':
            return <SiWordpress />;
        case 'typescript':
            return <SiTypescript />;
        case 'javascript':
            return <SiJavascript />
        case 'jira':
            return <FaJira />
        case 'jenkins':
            return <FaJenkins />
        case 'bitbucket':
            return <FaBitbucket />
        case 'bitbucket':
            return <FaSlack />
        case 'mysql':
            return <SiMysql />
        case 'postgresql':
            return <SiPostgresql />
        case 'sqlite':
            return <SiSqlite />
        default:
            return null;
    }
};

export default getIconForTechnology;
