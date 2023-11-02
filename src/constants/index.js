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
  sql
} from "../assets/pictures";
import Logo  from '../assets/pictures/logoicon.png'
import ALogo from '../assets/pictures/alephengineering.png'
import GLogo from '../assets/pictures/gulftreamicon.png'
import MIcon from '../assets/pictures/movilmundoicon.png'

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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
