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
  cisco,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Cisco",
    icon: cisco,
    iconBg: "#E6DEDD",
    date: "December 2022 - December 2023",
    points: [
      "Developed Angular UI components and designed interfaces using D3.js and Plotly.js.",
      "Integrated APIs for a summary dashboard, conducted unit testing, and identified system requirements in collaboration with the CX development team.",
      "Implemented reactive angular forms and utilized NgRx for efficient state management, optimizing system responsiveness, and data retrieval.",
      "Spearheaded the integration of Component Store and Global Store using NgRx, enhancing Angular application state management for improved efficiency, scalability, and code organization",
      "Technologies: Angular, JavaScript, Typescript, HTML, SCSS, Git, GitHub."
    ],
  },
];

const testimonials = [
  {
    testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Aashish proved me wrong.",
    name: "Aashish Ravidas",
    designation: "Tech Lead",
    company: "HCLTech",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
      testimonial:
          "I've never met a web developer who truly cares about their clients' success like Sangeeta does.",
      name: "Kaushal Chakrdhari",
      designation: "Software Engineer",
      company: "Airtel",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
      testimonial:
          "After Sangeeta optimized our website, our traffic increased by 50%. We can't thank him enough!",
      name: "Rahul Gangir",
      designation: "Software Developer",
      company: "Goldman sachs",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

  const projects = [
    {
      name: "MyBooking",
      description:
        "QuickBooking is a full-stack hotel booking application. The website’s front-end is built using CSS3, React, and React Calendar. Created an API using Node.js and Express.js and used MongoDB to store data of users, rooms, and hotels. Used Express for routing and Node.js for user authentication, authorization, and security using JWT tokens.",
      tags: [
        {
          name: "css3",
          color: "blue-text-gradient",
        },
        {
            name: "react",
            color: "blue-text-gradient",
        },
        {
            name: "react-calendar",
            color: "blue-text-gradient",
        },
        {
            name: "nodejs",
            color: "green-text-gradient",
        },
        {
            name: "expressjs",
            color: "green-text-gradient",
        },
        {
            name: "mongodb",
            color: "pink-text-gradient",
        },
        {
            name: "jwt",
            color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Sangeeta290499/MyBooking",
    },
    {
      name: "Job Portal",
      description:
      "Built a full-stack job portal using the MERN stack, implementing backend APIs with Node.js and Express.js. Utilized MongoDB for data storage, including user, company, job, and application data. Designed the frontend with React, integrated Redux Toolkit for state management, and implemented responsive interfaces using CSS3. Implemented secure authentication and authorization using JWT tokens and protected application routes.",
      tags: [
        {
          name: "mern",
          color: "blue-text-gradient",
        },
        {
            name: "react",
            color: "blue-text-gradient",
        },
        {
            name: "redux-toolkit",
            color: "green-text-gradient",
        },
        {
            name: "nodejs",
            color: "green-text-gradient",
        },
        {
            name: "expressjs",
            color: "green-text-gradient",
        },
        {
            name: "mongodb",
            color: "pink-text-gradient",
        },
        {
            name: "css3",
            color: "pink-text-gradient",
        },
        {
            name: "jwt",
            color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Sangeeta290499/Job_Portal",
    },
  {
    name: "Admin Dashboard",
    description:
    "Developed a responsive React Admin Dashboard Template with customizable components, including a sidebar, navbar, and reusable widgets, using CSS3 and Material-UI. Implemented interactive elements like progress bars, charts, and tables for data visualization. Utilized React Router Dom 6 for navigation and Context API for dark mode.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
          name: "material-ui",
          color: "blue-text-gradient",
      },
      {
          name: "css3",
          color: "pink-text-gradient",
      },
      {
          name: "chart.js",
          color: "green-text-gradient",
      },
      {
          name: "react-router-dom",
          color: "green-text-gradient",
      },
      {
          name: "context-api",
          color: "blue-text-gradient",
      },
      {
          name: "nodejs",
          color: "green-text-gradient",
      },
      {
          name: "expressjs",
          color: "green-text-gradient",
      },
      {
          name: "vercel",
          color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Sangeeta290499/react-admin-ui",
  },
];

export { services, technologies, experiences, testimonials, projects };