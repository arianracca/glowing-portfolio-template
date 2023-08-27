// You can add more icons using the reference on:
// https://react-icons.github.io/react-icons/
// Add the import, add the case, use the icon where you need it.

import {
  FaHtml5,
  FaReact,
  FaAngular,
  FaNode,
  FaCss3Alt,
  FaBootstrap,
  FaNpm,
  FaGitAlt,
  FaDocker,
  FaUnity,
  FaJenkins,
  FaSlack,
  FaFontAwesome,
  FaWindows,
  FaApple,
  FaUbuntu,
  FaAndroid,
  FaDatabase,
  FaSwift,
  FaRProject,
  FaLinux,
  FaVuejs,
  FaQuestion,
} from "react-icons/fa";
import {
  SiAngularjs,
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
  SiCplusplus,
  SiCsharp,
  SiVisualstudio,
  SiFortran,
  SiLua,
  SiJulia,
  SiPowershell,
  SiGnubash,
  SiKotlin,
  SiAssemblyscript,
  SiReactrouter,
  SiAmazonaws,
  SiPandas,
  SiNumpy,
  SiAlpinelinux,
  SiApachetomcat,
  SiApachemaven,
  SiGradle,
  SiGraphql,
  SiGutenberg,
  SiGodotengine,
  SiGitkraken,
  SiGitlab,
  SiAkamai,
  SiPytorch,
  SiKeras,
  SiScikitlearn,
  SiAxios,
  SiRedux,
  SiCodemirror,
  SiFlask,
  SiVuetify,
  SiNuxtdotjs,
  SiMobx,
  SiGatsby,
  SiPostcss,
  SiTailwindcss,
  SiWebpack,
  SiBabel,
  SiDotnet,
  SiElectron,
  SiSvelte,
  SiKubernetes,
  SiGooglecloud,
  SiMicrosoftazure,
  SiUnrealengine,
  SiWebstorm,
  SiYarn,
  SiSublimetext,
  SiPycharm,
  SiEclipseide,
  SiEslint,
  SiIntellijidea,
  SiPhpstorm,
  SiAndroidstudio,
  SiCypress,
  SiDatadog,
  SiDigitalocean,
  SiDropbox,
  SiFigma,
  SiFirefox,
  SiGrafana,
  SiInkscape,
  SiInsomnia,
  SiNginx,
  SiOracle,
  SiMicrosoftsqlserver,
  SiPrettier,
  SiRedis,
  SiSelenium,
  SiSketch,
  SiSonarqube,
  SiSourcetree,
  SiAdobephotoshop,
  SiWireshark,
  SiXampp,
  SiAnsible,
  SiCircleci,
  SiCloudflare,
  SiElastic,
  SiGithubactions,
  SiJfrog,
  SiNetlify,
  SiOpenstack,
  SiPuppet,
  SiRancher,
  SiTerraform,
  SiTravisci,
  SiVagrant,
  SiVercel,
  SiArchlinux,
  SiCentos,
  SiDebian,
  SiFedora,
  SiFreebsd,
  SiKalilinux,
  SiLinuxmint,
  SiManjaro,
  SiRaspberrypi,
  SiRedhat,
  SiSuse,
  SiCpanel,
  SiElixir,
  SiDelphi,
  SiCakephp,
  SiPhpmyadmin,
  SiDrupal,
  SiPrestashop,
  SiShopify,
  SiWoocommerce,
  SiOpenai,
  SiApachecassandra,
  SiVirtualbox,
} from "react-icons/si";
import {
  DiAtom,
  DiBackbone,
  DiBitbucket,
  DiBower,
  DiChrome,
  DiClojureAlt,
  DiCodeigniter,
  DiCoffeescript,
  DiCompass,
  DiDart,
  DiDojo,
  DiEmber,
  DiErlang,
  DiFirebase,
  DiFsharp,
  DiGo,
  DiGroovy,
  DiGrunt,
  DiGulp,
  DiHaskell,
  DiJava,
  DiJira,
  DiJqueryLogo,
  DiKrakenjs,
  DiLaravel,
  DiLess,
  DiMeteor,
  DiMongodb,
  DiMootools,
  DiNetbeans,
  DiPerl,
  DiPhp,
  DiProlog,
  DiPython,
  DiRequirejs,
  DiRor,
  DiRuby,
  DiRust,
  DiSass,
  DiScala,
  DiScrum,
  DiSpark,
  DiStylus,
  DiSymfony,
  DiTrello,
  DiVim,
} from "react-icons/di";
import { TbBrandReactNative, TbBrandThreejs } from "react-icons/tb";
import { GrSolaris } from "react-icons/gr";
import IconMaterialUi from "./icons/IconMaterialUi";
import IconDjango from "./icons/IconDjango";
import IconCobol from "./icons/IconCobol";

const getIconForTechnology = (technology: string) => {
  switch (technology.toLowerCase()) {
    // Programming Languages
    case "assembly language":
      return <SiAssemblyscript />;
    case "bash":
    case "bash script":
      return <SiGnubash />;
    case "c#":
      return <SiCsharp />;
    case "c++":
    case "c plus plus":
      return <SiCplusplus />;
    case "clojure":
      return <DiClojureAlt />;
    case "cobol":
      return <IconCobol />;
    case "coffeescript":
      return <DiCoffeescript />;
    case "css":
    case "css3":
      return <FaCss3Alt />;
    case "dart":
      return <DiDart />;
    case "delphi":
      return <SiDelphi />;
    case "elixir":
      return <SiElixir />;
    case "erlang":
      return <DiErlang />;
    case "fortran":
      return <SiFortran />;
    case "fsharp":
      return <DiFsharp />;
    case "go":
      return <DiGo />;
    case "groovy":
      return <DiGroovy />;
    case "haskell":
      return <DiHaskell />;
    case "html":
    case "html5":
      return <FaHtml5 />;
    case "java":
      return <DiJava />;
    case "javascript":
      return <SiJavascript />;
    case "julia":
      return <SiJulia />;
    case "kotlin":
      return <SiKotlin />;
    case "lua":
      return <SiLua />;
    case "perl":
      return <DiPerl />;
    case "php":
      return <DiPhp />;
    case "prolog":
      return <DiProlog />;
    case "python":
      return <DiPython />;
    case "r":
    case "r-project":
    case "r project":
      return <FaRProject />;
    case "ruby":
      return <DiRuby />;
    case "rust":
      return <DiRust />;
    case "scala":
      return <DiScala />;
    case "shell":
      return <SiPowershell />;
    case "swift":
      return <FaSwift />;
    case "typescript":
      return <SiTypescript />;

    // Frameworks - libraries - preprocessors - cms
    case ".net":
    case "dot net":
    case "dotnet":
    case "puntonet":
    case "punto net":
      return <SiDotnet />;
    case "angular":
      return <FaAngular />;
    case "angular.js":
    case "angularjs":
    case "angular legacy":
      return <SiAngularjs />;
    case "apache maven":
    case "maven":
      return <SiApachemaven />;
    case "axios":
      return <SiAxios />;
    case "babel":
    case "babel.js":
    case "babeljs":
      return <SiBabel />;
    case "backbone":
      return <DiBackbone />;
    case "bootstrap":
      return <FaBootstrap />;
    case "bower":
      return <DiBower />;
    case "cake php":
    case "cakephp":
      return <SiCakephp />;
    case "codemirror":
    case "codemirror.js":
    case "codemirrorjs":
      return <SiCodemirror />;
    case "codeigniter":
      return <DiCodeigniter />;
    case "compass":
      return <DiCompass />;
    case "cypress":
      return <SiCypress />;
    case "django":
      return <IconDjango />;
    case "dojo":
      return <DiDojo />;
    case "drupal":
      return <SiDrupal />;
    case "electron":
      return <SiElectron />;
    case "ember":
      return <DiEmber />;
    case "express":
      return <SiExpress />;
    case "fastapi":
      return <SiFastapi />;
    case "firebase":
      return <DiFirebase />;
    case "flask":
      return <SiFlask />;
    case "gastby":
      return <SiGatsby />;
    case "gradle":
      return <SiGradle />;
    case "grunt":
      return <DiGrunt />;
    case "gulp":
      return <DiGulp />;
    case "gutemberg":
      return <SiGutenberg />;
    case "jest":
      return <SiJest />;
    case "jquery":
      return <DiJqueryLogo />;
    case "junit":
      return <SiJunit5 />;
    case "keras":
      return <SiKeras />;
    case "krakenjs":
      return <DiKrakenjs />;
    case "laravel":
      return <DiLaravel />;
    case "less":
      return <DiLess />;
    case "material ui":
      return <IconMaterialUi />;
    case "meteor":
      return <DiMeteor />;
    case "mobx":
    case "mobx.js":
    case "mobxjs":
      return <SiMobx />;
    case "mootools":
      return <DiMootools />;
    case "nest":
    case "nest.js":
    case "nestjs":
      return <SiNestjs />;
    case "next":
    case "next.js":
    case "nextjs":
      return <SiNextdotjs />;
    case "node":
    case "node.js":
    case "nodejs":
      return <FaNode />;
    case "numpy":
      return <SiNumpy />;
    case "nuxt":
    case "nuxt.js":
    case "nuxtjs":
      return <SiNuxtdotjs />;
    case "on rails":
    case "onrails":
    case "ror":
    case "ruby on rails":
      return <DiRor />;
    case "pandas":
      return <SiPandas />;
    case "php my admin":
    case "phpmyadmin":
      return <SiPhpmyadmin />;
    case "postcss":
      return <SiPostcss />;
    case "prestashop":
      return <SiPrestashop />;
    case "pytorch":
      return <SiPytorch />;
    case "react":
    case "react.js":
    case "reactjs":
      return <FaReact />;
    case "react native":
    case "react-native":
    case "reactnative":
      return <TbBrandReactNative />;
    case "react router":
    case "reactrouter":
      return <SiReactrouter />;
    case "redux":
    case "redux.js":
    case "reduxjs":
      return <SiRedux />;
    case "requirejs":
      return <DiRequirejs />;
    case "sass":
      return <DiSass />;
    case "scikit learn":
    case "scikit-learn":
    case "sci kit learn":
      return <SiScikitlearn />;
    case "selenium":
      return <SiSelenium />;
    case "shopify":
      return <SiShopify />;
    case "spark":
      return <DiSpark />;
    case "spring":
      return <SiSpring />;
    case "springboot":
      return <SiSpringboot />;
    case "stylus":
      return <DiStylus />;
    case "svelte":
      return <SiSvelte />;
    case "symfony":
      return <DiSymfony />;
    case "tailwind":
    case "tailwindcss":
      return <SiTailwindcss />;
    case "tensorflow":
      return <SiTensorflow />;
    case "three":
    case "threejs":
      return <TbBrandThreejs />;
    case "vue":
    case "vuejs":
      return <FaVuejs />;
    case "vuetify":
      return <SiVuetify />;
    case "webpack":
      return <SiWebpack />;
    case "woocommerce":
      return <SiWoocommerce />;
    case "wordpress":
      return <SiWordpress />;

    // Game Dev
    case "godot":
      return <SiGodotengine />;
    case "unity":
      return <FaUnity />;
    case "unreal":
    case "unreal engine":
      return <SiUnrealengine />;

    // Tools - Extras
    case "android studio":
      return <SiAndroidstudio />;
    case "atom":
      return <DiAtom />;
    case "scrum":
      return <DiScrum />;
    case "chrome":
      return <DiChrome />;
    case "datadog":
      return <SiDatadog />;
    case "dropbox":
      return <SiDropbox />;
    case "eclipse":
      return <SiEclipseide />;
    case "eslint":
      return <SiEslint />;
    case "figma":
      return <SiFigma />;
    case "firefox":
      return <SiFirefox />;
    case "grafana":
      return <SiGrafana />;
    case "inkscape":
      return <SiInkscape />;
    case "insomnia":
      return <SiInsomnia />;
    case "intellij":
    case "intellij idea":
      return <SiIntellijidea />;
    case "netbeans":
    case "apache netbeans":
      return <DiNetbeans />;
    case "photoshop":
      return <SiAdobephotoshop />;
    case "phpstorm":
      return <SiPhpstorm />;
    case "postman":
      return <SiPostman />;
    case "prettier":
      return <SiPrettier />;
    case "pycharm":
      return <SiPycharm />;
    case "sketch":
      return <SiSketch />;
    case "trello":
      return <DiTrello />;
    case "kibana":
      return <SiKibana />;
    case "swagger":
      return <SiSwagger />;
    case "jira":
      return <DiJira />;
    case "jenkins":
      return <FaJenkins />;
    case "bitbucket":
      return <DiBitbucket />;
    case "slack":
      return <FaSlack />;
    case "sonarqube":
      return <SiSonarqube />;
    case "sourcetree":
      return <SiSourcetree />;
    case "sublime text":
      return <SiSublimetext />;
    case "npm":
      return <FaNpm />;
    case "git":
      return <FaGitAlt />;
    case "gitkraken":
    case "git kraken":
      return <SiGitkraken />;
    case "gitlab":
    case "git lab":
      return <SiGitlab />;
    case "font awesome":
      return <FaFontAwesome />;
    case "vim":
      return <DiVim />;
    case "vscode":
    case "vs code":
    case "visual studio":
    case "visual studio code":
    case "vsc":
      return <SiVisualstudio />;
    case "webstorm":
      return <SiWebstorm />;
    case "yarn":
      return <SiYarn />;

    // AI software and tools
    case "gpt":
    case "chat-gpt":
    case "chat-gpt 4":
    case "chat-gpt 3.5":
      return <SiOpenai />;

    // Database
    case "database":
      return <FaDatabase />;
    case "cassandra":
    case "apache cassandra":
      return <SiApachecassandra />;
    case "graphql":
      return <SiGraphql />;
    case "mariadb":
      return <SiMariadb />;
    case "mongodb":
      return <DiMongodb />;
    case "mysql":
      return <SiMysql />;
    case "oracle":
      return <SiOracle />;
    case "postgresql":
      return <SiPostgresql />;
    case "redis":
      return <SiRedis />;
    case "sql server":
      return <SiMicrosoftsqlserver />;
    case "sqlite":
      return <SiSqlite />;

    // DevOps - Cloud - Servers
    case "akamai":
      return <SiAkamai />;
    case "amazon web services":
    case "aws":
    case "amazon ws":
      return <SiAmazonaws />;
    case "ansible":
      return <SiAnsible />;
    case "apache tomcat":
    case "tomcat":
    case "apachetomcat":
      return <SiApachetomcat />;
    case "azure":
    case "microsoft azure":
    case "microsoft-azure":
    case "ms azure":
      return <SiMicrosoftazure />;
    case "circleci":
      return <SiCircleci />;
    case "cloudflare":
      return <SiCloudflare />;
    case "cpanel":
    case "c panel":
    case "c-panel":
      return <SiCpanel />;
    case "digital ocean":
      return <SiDigitalocean />;
    case "docker":
      return <FaDocker />;
    case "elasticsearch":
      return <SiElastic />;
    case "github actions":
      return <SiGithubactions />;
    case "google cloud":
    case "googlecloud":
      return <SiGooglecloud />;
    case "jfrog":
      return <SiJfrog />;
    case "kubernetes":
      return <SiKubernetes />;
    case "netlify":
      return <SiNetlify />;
    case "nginx":
      return <SiNginx />;
    case "openstack":
      return <SiOpenstack />;
    case "puppet":
      return <SiPuppet />;
    case "rancher":
      return <SiRancher />;
    case "terraform":
      return <SiTerraform />;
    case "travis":
    case "travis ci":
      return <SiTravisci />;
    case "vagrant":
      return <SiVagrant />;
    case "vercel":
      return <SiVercel />;
    case "virtual box":
    case "virtualbox":
      return <SiVirtualbox />;
    case "wireshark":
      return <SiWireshark />;
    case "xampp":
      return <SiXampp />;

    // Operative Systems
    case "alpine":
    case "alpine linux":
    case "alpinelinux":
      return <SiAlpinelinux />;
    case "android":
      return <FaAndroid />;
    case "apple":
    case "mac":
      return <FaApple />;
    case "arch":
    case "arch linux":
      return <SiArchlinux />;
    case "centos":
      return <SiCentos />;
    case "debian":
      return <SiDebian />;
    case "fedora":
      return <SiFedora />;
    case "freebsd":
      return <SiFreebsd />;
    case "kali":
    case "kali linux":
      return <SiKalilinux />;
    case "linux":
      return <FaLinux />;
    case "manjaro":
      return <SiManjaro />;
    case "mint":
    case "linux mint":
      return <SiLinuxmint />;
    case "raspbian":
    case "raspberrypi":
    case "raspberry pi":
      return <SiRaspberrypi />;
    case "red hat":
    case "redhat":
      return <SiRedhat />;
    case "solaris":
      return <GrSolaris />;
    case "suse":
      return <SiSuse />;
    case "ubuntu":
      return <FaUbuntu />;
    case "windows":
      return <FaWindows />;

    // Others
    default:
      return <FaQuestion />;
  }
};

export default getIconForTechnology;
