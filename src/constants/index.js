import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  java,
  softwareeng,
  angular,
  dotnet,
  sql,
  gulftream,
  affilianet,
  mathattack,
  flexsport,
  drones,
  fitgames,
  shieldbearer
} from "../assets/pictures";
import Logo from "../assets/pictures/logoicon.png";
import ALogo from "../assets/pictures/alephengineering.png";
import GLogo from "../assets/pictures/gulftreamicon.png";
import MIcon from "../assets/pictures/movilmundoicon.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer.",
    icon: web,
  },
  {
    title: "Game Developer.",
    icon: mobile,
  },
  {
    title: "Software Engineer.",
    icon: softwareeng,
  },
  {
    title: "Clouds Architect.",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Microsoft .NET",
    icon: dotnet,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "ASP .Net Developer",
    company_name: "Soft-Logics",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "March 2007 - December 2009",
    points: [
      "Upgrading and maintaining web applications using ASP .NET and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "ASP .Net Developer",
    company_name: "Gulfstream Training Academy",
    icon: GLogo,
    iconBg: "#383E56",
    date: "January 2010 - February 2011",
    points: [
      "Developing and maintaining a new web application, from the scratch using using ASP .NET and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Game Developer",
    company_name: "Movil World",
    icon: MIcon,
    iconBg: "#E6DEDD",
    date: "January 2012 - January 2014",
    points: [
      "Developing and Deploy a multi platform video game using UNITY",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing cross-platform compatibility for Windows, Linux, MAcOs and Android.",
      "Participating in assets design and code reviews",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Exagon-Soft",
    icon: Logo,
    iconBg: "#383E56",
    date: "March 2015 - August 2022",
    points: [
      "Developing and maintaining web applications using React.js, Angular, PHP, Java, ASP .NET, ASP .NET CORE and other related technologies.",
      "Collaborating with cross-functional Companies teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Applying modern code syntax and complex algorithms",
      "Implementing Cloud Architecture",
      "Modeling Data Base Architecture and ORM Relations",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Aleph Engineering",
    icon: ALogo,
    iconBg: "#E6DEDD",
    date: "September 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Angular, PHP, Java, ASP .NET, ASP .NET CORE and other related technologies.",
      "Collaborating with cross-functional Companies teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Applying modern code syntax and complex algorithms",
      "Implementing Cloud Architecture",
      "Modeling Data Base Architecture and ORM Relations",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Gulftream Academy",
    description:
      "Academy 147 serves a worldwide audience and is composed of staff based in Malta and the USA, together with a team of instructors, each strategically positioned in order to efficiently provide training around the globe.",
    tags: [
      {
        name: "Asp .NET",
        color: "blue-text-gradient",
      },
      {
        name: "SQL Server",
        color: "blue-sky-gradient",
      },
      {
        name: "NHibernate",
        color: "pink-text-gradient",
      },
    ],
    image: gulftream,
    source_code_link: [""],
    examples_link: "https://www.academy147.com",
  },
  {
    name: "Affilia-Net",
    description:
      "Web platform for an online affiliate network focus in the online gaming industry and the finance market. With more than 15 years of experience in these industries, Affilia-Net offers a wide variety of affiliate campaigns for these markets, such as sports betting campaigns, casinos, bingo, forex, binary, and even payment solutions.",
    tags: [
      {
        name: "Asp .Net",
        color: "blue-text-gradient",
      },
      {
        name: "SQL Server",
        color: "blue-sky-gradient",
      },
      {
        name: "CSS",
        color: "css-text-gradient",
      },
    ],
    image: affilianet,
    source_code_link: [""],
    examples_link: "https://www.affilia-net.com",
  },
  {
    name: "Math Attack",
    description:
      "Tech Game demo for an educational Game, it proposes a mental agility tool, designed to exercise arithmetic operations in children, while having fun.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "Gimp II",
        color: "green-text-gradient",
      },
    ],
    image: mathattack,
    source_code_link: ["https://github.com/exagonsoft/Math-Attack"],
    examples_link: "https://exagonsoft.itch.io/math-attack",
  },
  {
    name: "FlexSport",
    description:
      "FlexSport Fitness Group, platform admin Site, designed to manage the hole FexSport System.",
    tags: [
      {
        name: "Angular",
        color: "red-text-gradient",
      },
      {
        name: "Django",
        color: "olive-green",
      },
      {
        name: "AWS Cloud",
        color: "aws-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-sky-gradient",
      },
    ],
    image: flexsport,
    source_code_link: [""],
    examples_link: "",
  },
  {
    name: "FlexSport Landing",
    description:
      "Landing Page from the FlexSport Fitness Trainers Group, acting as portal for the FlexSport Fitness platform.",
    tags: [
      {
        name: "React JS",
        color: "blue-sky-gradient",
      },
      {
        name: "CSS",
        color: "css-text-gradient",
      },
      {
        name: "AWS Cloud",
        color: "aws-text-gradient",
      }
    ],
    image: fitgames,
    source_code_link: [""],
    examples_link: "https://www.flexsport.de",
  },
  {
    name: "Drones Management Board",
    description:
      "The system provides a user-friendly interface for managing a fleet of drones, monitoring their status, and ensuring seamless communication between drones and ground control.",
    tags: [
      {
        name: "React JS",
        color: "blue-sky-gradient",
      },
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "css-text-gradient",
      },
      {
        name: "Java SpringBoot",
        color: "red-text-gradient",
      },
      {
        name: "H2 inMemory",
        color: "orange-text-gradient",
      },
    ],
    image: drones,
    source_code_link: ["https://github.com/exagonsoft/Drones-Managment-Board", "https://github.com/exagonsoft/drones-management-board-backend"],
    examples_link: "",
  },
  {
    name: "ShieldBearer",
    description:
      "ShieldBearer is a lightweight JavaScript library for seamless JSON Web Token (JWT) handling. This minimalistic library provides essential methods to sign, decode, and validate tokens effortlessly.",
    tags: [
      {
        name: "JavaScript",
        color: "yellow-sun-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-sky-gradient",
      },
      {
        name: "Node",
        color: "olive-green",
      },
      {
        name: "Shell",
        color: "shell-console",
      },
    ],
    image: shieldbearer,
    source_code_link: ["https://github.com/exagonsoft/ShieldBearer"],
    examples_link: "https://www.npmjs.com/package/shieldbearer",
  },
];

export { services, technologies, experiences, testimonials, projects };
