type Skill = {
  icon: string;
  name: string;
};

const skills: Skill[][] = [
  [  
    { icon: "/SkillLogo/icons8-c-sharp-logo.svg", name: "C#" },
    { icon: "/SkillLogo/icons8-javascript.svg", name: "JavaScript" },
    { icon: "/SkillLogo/icons8-typescript.svg", name: "TypeScript" },
    { icon: "/SkillLogo/icons8-php.svg", name: "PHP" },
    { icon: "/SkillLogo/icons8-python.svg", name: "Python" },

    { icon: "/SkillLogo/icons8-html-5.svg", name: "HTML5" },
    { icon: "/SkillLogo/icons8-css.svg", name: "CSS" },
  ],
  [
    { icon: "/SkillLogo/dotnet.svg", name: ".NET" },
    { icon: "/SkillLogo/icons8-nodejs.svg", name: "Node.js" },
    { icon: "/SkillLogo/icons8-react-native.svg", name: "React" },
    { icon: "/SkillLogo/icons8-next-js.svg", name: "Next.js" },
    // { icon: "/SkillLogo/icons8-vue-js.svg", name: "Vue.js" },
    { icon: "/SkillLogo/icons8-bootstrap.svg", name: "Bootstrap" },
    { icon: "/SkillLogo/icons8-tailwind-css.svg", name: "Tailwind" },
  ],
  [
    
    { icon: "/SkillLogo/icons8-microsoft-sql-server.svg", name: "SQL Server" },
    { icon: "/SkillLogo/icons8-mysql-logo.svg", name: "MySQL" },
    { icon: "/SkillLogo/icons8-postgresql.svg", name: "PostgreSQL" },

    { icon: "/SkillLogo/icons8-docker.svg", name: "Docker" },
    { icon: "/SkillLogo/icons8-git.svg", name: "Git" },
    { icon: "/SkillLogo/postman-icon-svgrepo-com.svg", name: "Postman" },
    // { icon: "/SkillLogo/figma-1-logo-svgrepo-com.svg", name: "Figma" },
    { icon: "/SkillLogo/icons8-vs-2022.svg", name: "VS 2022" },
    // { icon: "/SkillLogo/icons8-vs-code.svg", name: "VS Code" },
  ]
];
  
export default skills;