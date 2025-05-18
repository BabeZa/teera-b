interface Experience {
    icon: string;
    date: string;
    title: string;
    desc: string[];
    stack: string[];
  }

const exps: Experience[] = [
    { 
        icon: "/AIS.png", 
        date: "Jan 2024 - Present",
        title: "Full Stack Developer - Advanced Info Service Public Company Limited",
        desc: [
            "Developed Web Applications, Web APIs, Windows Forms, and Windows Services for client-side health check systems and for collecting data from all company computers.",
            "Developed a Web Application that allows users to monitor their computer status, perform basic repairs, and receive images and announcements through the application.",
            "Created Windows Services to collect client device data such as hardware/software changes and login/logout timestamps.",
            "Improved and developed the organization’s internal IT Asset Management system.",
            "Utilized C# (.NET Framework), JavaScript, and jQuery for application development, and designed databases using MS SQL Server.",
            "Designed and developed RESTful APIs for client–server communication, supporting connections from over 15,000 devices per day.",
            "Implemented protection against SQL Injection and Cross-Site Scripting (XSS).",
            "Established robust access control and authentication management.",
            "Obfuscated executable files using ConfuserEx.",
            "Installed and configured Windows Server to deploy Web Applications and APIs using IIS.",
            "Used Git for source code version control and SonarQube for code quality analysis.",
        ],
        stack: ["c#","SQL",".NET","ASP.NET","JavaScript","HTML","CSS","SQL Server","Git","IIS","Postman"]
    },
    { 
        icon: "/NTN.png", 
        date: "Jul 2021 - Sep 2022",
        title: "Web Developer - NTN Solution Co., Ltd",
        desc: [
            "Developed and maintained POS and ERP systems.",
            "Enhanced front-end functionality with JavaScript and extended database features using MS SQL Server to meet evolving business requirements.",
            "Fixed website errors based on reported bugs.",
            "Performed system testing and error checking before deploying to production.",
            "Migrated legacy VBScript and PHP codebases to JavaScript for full Chrome and Safari support.",
            "Engineered RegEx-powered automation tools to streamline and accelerate the code conversion process."
        ],
        stack: ["SQL","ASP.NET","JavaScript","HTML","CSS","SQL Server"]
    },
  ];
  
export default exps;