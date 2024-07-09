const navigation = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Skills", path: "/skills" }
];
export default navigation

import { SiHtml5, DiCss3, DiJavascript1, DiReact, DiNextjs, SiGit, SiJava, SiPython } from 'react-icons/si';

export const skills = [
  {
    id: 1,
    icon: <SiHtml5 />, 
    title: "HTML"
  },
  {
    id: 2,
    icon: <DiCss3 />,
    title: "CSS"
  },
  {
    id: 3,
    icon: <DiJavascript1 />,
    title: "JavaScript"
  },
  {
    id: 4,
    icon: <DiReact />,
    title: "React"
  },
  {
    id: 5,
    icon: <DiNextjs />,
    title: "Next.js"
  },
  {
    id: 6,
    icon: <SiGit />,
    title: "Git"
  },
  {
    id: 7,
    icon: <SiJava />,
    title: "Java"
  },
  {
    id: 8,
    icon: <SiPython />,
    title: "Python"
  }
];