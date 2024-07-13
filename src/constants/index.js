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
  php,
  tailwind,
  nodejs,
  django,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  system,
  carrent,
  jobit,
  app,
  threejs,
  norma,
  martijn,
  demi,
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
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Developer",
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
    name: "PHP",
    icon: php,
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
    name: "Django",
    icon: django,
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
    title: "Office Assistant",
    company_name: "Landzigt, Utrecht",
    icon: starbucks,
    iconBg: "#D1BDC4",
    date: "October 2020 - February 2021",
    points: [
      "Responsible for cleaning and maintaining office spaces according to established standards and guidelines.",
      "Performed administrative tasks such as data entry, document management, and calendar management.",
      "Assisted in drafting and editing business documents such as letters, reports, and presentations.",
      "Learned to work disciplined, neatly, and carefully, and to honor my commitments.",
    ],
  },
  {
    title: "Piano/English Teacher",
    company_name: "Veldhuizen, Utrecht",
    icon: tesla,
    iconBg: "#D1BDC4",
    date: "May 2022 - Present",
    points: [
      "Provided individual and group piano lessons to students of various ages and levels.",
      "Taught English language skills to students, including grammar, vocabulary, and conversation.",
      "Developed lesson plans and adapted teaching materials to meet children's needs.",
      "Communicated effectively, patiently, and structurally.",
    ],
  },
  {
    title: "Webshop Developer",
    company_name: "Shopify, Wordpress",
    icon: shopify,
    iconBg: "#D1BDC4",
    date: "2023",
    points: [
      "Developing ecommerce webshop in Wordpress with useful plugins like Woocommerce.",
      "Applying responsive design and ensuring functionality across various web browsers.",
      "Attended module for selling high-quality products on Shopify platform.",
    ],
  },
  {
    title: "System Development",
    company_name: "GLU, Bureau",
    icon: system,
    iconBg: "#D1BDC4",
    date: "2024 - Present",
    points: [
      "Developing an advanced check-in system for teachers to track student absences. Students can easily log in via a check-in station using our system.",
      "Project realized for the Bureau department at GLU, with productive collaboration with other developers.",
      "Utilized various web technologies for optimal performance.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Ahsen is enterprising and social. She stands out for her cheerful and positive personality.",
    name: "Martijn Kunstman",
    designation: "Developing teacher",
    company: "GLU",
    image: martijn,
  },
  {
    testimonial:
      "I often got stuck during programming assignments, but fortunately Ahsen has been able to help me countless times during our studies.",
    name: "Norma Hlehel",
    designation: "Developing student",
    company: "GLU",
    image: norma,
  },
  {
    testimonial:
      "Ahsen is definitely a valuable addition to any team. Professional and her passion for coding and attention to detail makes her unique.",
    name: "Demi Fahmi",
    designation: "Developing student",
    company: "GLU",
    image: demi,
  },
];

const projects = [
  {
    name: "Netflix Clone",
    description:
      "Collaborated with another developer to design and build a Netflix clone. This streaming platform is developed to provide the same experience as Netflix, allowing users to scroll through movies, save favorites, and more!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Jabir220501/module-15",
  },
  {
    name: "MERN Chat App",
    description:
      "This is a real-time chat app made with React, Node.js, Socket.IO, MongoDB, and Express. The chat app is responsive and styled with styled components. Here you can register, log in and out, choose avatars, and send messages using sockets.",
    tags: [
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "socket.IO",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Self Help App",
    description:
      "A user-friendly application designed to support developing positive habits. Whether you want to work on your health, read more regularly, or become more productive, this web app is your personal coach. Features include setting new habits and writing daily in your personal diary.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: app,
    source_code_link: "https://github.com/Untfoubles/app",
  },
];

export { services, technologies, experiences, testimonials, projects };
