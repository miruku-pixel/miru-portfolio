import { FaReact, FaHtml5, FaCss3, FaNodeJs, FaJs, FaInstagram } from "react-icons/fa";
import { TbBrain } from "react-icons/tb";
import { HiUserGroup } from "react-icons/hi"; //
import { SiExpress, SiPostgresql } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaGitAlt, FaXTwitter } from "react-icons/fa6";

import PROJECT_IMG_1 from "../assets/images/project-1.jpg";
import PROJECT_IMG_2 from "../assets/images/project-2.jpg";

export const MENU_LINKS = [
  { id: "01", label: "Home", offset: -100, to: "hero" },
  { id: "02", label: "Skills", offset: -80, to: "skills" },
  { id: "03", label: "About Me", offset: -80, to: "about" },
  { id: "04", label: "Projects", offset: -80, to: "projects" },
  { id: "05", label: "Contact", offset: -80, to: "contact" },
];

export const TEXT_ROTATE = [
  'Full Stack Developer',
  'Front-End Developer',
  'Back-End Developer',
];

export const SKILL_TABS = [
  { id: "01", label: "All", value: "all" },
  { id: "02", label: "Frontend", value: "frontend" },
  { id: "03", label: "Backend", value: "backend" },
  { id: "04", label: "Tools", value: "tools" },
  { id: "05", label: "Skills", value: "soft-skills" },
];

export const SKILLS = [
  {
    id: '01',
    icon: FaReact,
    skill: 'React JS',
    progress: 85,
    type: 'frontend',
    description:
      'Proficient in building dynamic and interactive user interfaces using React.js. Experienced in state management, component lifecycle, and integrating APIs.',
  },
  {
    id: '02',
    icon: FaHtml5,
    skill: 'HTML',
    progress: 95,
    type: 'frontend',
    description:
      'Expert in semantic HTML5 markup, ensuring accessible and well-structured web content for optimal performance and SEO.',
  },
  {
    id: '03',
    icon: FaCss3,
    skill: 'CSS',
    progress: 85,
    type: 'frontend',
    description:
      'Skilled in crafting responsive and visually appealing layouts with CSS3, including animations, transitions, and modern layout techniques like Flexbox and Grid.',
  },
  {
    id: '04',
    icon: FaJs,
    skill: 'Javascript',
    progress: 90,
    type: 'frontend',
    description:
      'Strong understanding of modern JavaScript (ES6+) and its application in creating interactive web applications. Experienced in DOM manipulation, asynchronous programming, and working with APIs.',
  },
  {
    id: '05',
    icon: FaNodeJs,
    skill: 'Node.js',
    progress: 95,
    type: 'backend',
    description:
      'Extensive experience in building scalable and efficient server-side applications with Node.js. Proficient in creating RESTful APIs and working with asynchronous operations.',
  },
  {
    id: '06',
    icon: SiExpress,
    skill: 'Express.js',
    progress: 95,
    type: 'backend',
    description:
      'Highly skilled in developing robust and maintainable web applications using Express.js. Experienced in routing, middleware, and creating efficient APIs.',
  },
  {
    id: '07',
    icon: SiPostgresql,
    skill: 'PostgreSQL',
    progress: 90,
    type: 'backend',
    description:
      'Experienced in designing and managing relational databases using PostgreSQL, with a strong ability to write efficient SQL queries and optimize database performance.',
  },
  {
    id: '08',
    icon: FaGitAlt,
    skill: 'Git & GitHub',
    progress: 75,
    type: 'tools',
    description:
      'Familiar with version control using Git and GitHub for collaborative development. Experienced in branching, merging, and managing code repositories.',
  },
  {
    id: '09',
    icon: VscVscode,
    skill: 'Visual Studio Code',
    progress: 90,
    type: 'tools',
    description:
      'Highly proficient in using Visual Studio Code as a development environment. Experienced with extensions, debugging tools, and optimizing workflow.',
  },
  {
    id: '10',
    icon: TbBrain,
    skill: 'Problem-Solving',
    progress: 85,
    type: 'soft-skills',
    description:
      'Strong analytical and problem-solving skills, able to break down complex issues into manageable tasks and find effective solutions.',
  },
  {
    id: '11',
    icon: HiUserGroup,
    skill: 'Collaboration',
    progress: 85,
    type: 'soft-skills',
    description:
      'Excellent collaborative skills, able to work effectively in team environments, communicate clearly, and contribute to shared goals.',
  },

];

export const ABOUT_ME = {
  content: `
    Hi! I'm a driven web developer bringing a unique blend of tech industry leadership and fresh coding enthusiasm to the table. 
    My journey into web development is fueled by a passion for creating impactful online experiences, and I'm rapidly building a solid foundation in React and full-stack development.

    My previous experience as a central manager in a tech company equipped me with exceptional project management, strategic planning, and problem-solving skills. These skills are directly transferable to web development, allowing me to approach projects with a structured and efficient mindset.

    I'm committed to continuous learning and actively building my portfolio with projects that showcase my growing expertise. 
    I'm eager to collaborate with experienced developers and contribute to innovative web solutions. 
    My dedication and adaptability make me a valuable asset to any team.

    Let's connect and explore how my unique perspective and technical skills can bring your web projects to life.
  `,
  SocialLinks: [
    { id: "01", label: "X", icon: FaXTwitter, link: "#" },
    { id: "02", label: "Instagram", icon: FaInstagram, link: "#" },
    { id: "03", label: "Github", icon: FaGitAlt, link: "#" },
  ],
  email: "miruku.pixel@gmail.com",
  phone: "+62 853 5882 xxxx",
  website: "https://www.mirukupixel.com",
};

export const PROJECTS = [
    {
        id:1,
        title: "Full-Stack E-Commerce Platform with Next.js, Prisma, and Tailwind CSS",
        image: PROJECT_IMG_1,
        tags : ["Full-Stack", "Next.js", "Prisma", "Tailwind CSS", "ShadCN UI"]
    },
    {
        id:2,
        title: "Modern Responsive Restaurant Website with React and Tailwind CSS",
        image: PROJECT_IMG_2,
        tags : ["Frontend", "React", "Tailwind CSS"]
    },
    

];

