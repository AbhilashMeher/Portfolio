import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin } from "@tabler/icons-react";

const Info = {
    name: "Abhilash Meher",
    stack: ["Software Engineer", "Full Stack Developer", "Competitive Programmer", "Freelancer", "Open Source Contributor"],
    bio: "I'm a passionate software engineer specialized in crafting efficient and scalable solutions, deliver top-notch web applications, and provide freelance services that exceed client expectations. Let's connect and create something amazing together!"
}
const ProjectInfo=[
    {
        title:"E-COMMERCE APP",
        desc:"It provides a user-friendly interface for browsing products, adding items to a cart, and completing the checkout process. Key Features: Home Page with Hero Section, Categories, and Top Products. Cart Page with Order Summary and Checkout Flow Billing, Shipping, and Payment Interfaces Order Confirmation and Tracking Options. Product Search and Filtering Functionality State Management with Redux Toolkit.",
        image:"E-COMMERCE-APP.png",
        live: true,
        technologies:["React.js", "Vite","Tailwind CSS","Redux"],
        link:"https://abhi-e-commerce-app.netlify.app/",
        github:"https://github.com/AbhilashMeher/E-Commerce-App"

    },
    {
        title:"MOVIE-APP",
        desc:"This React.js-based movie app fetches movie data from an API, offers personalized favorites, and provides advanced search/filtering. It’s designed for a seamless user experience.The app’s primary interface, the home page, dynamically fetches and displays movie information from an external API.Users can create their own collection of favorite movies, creating a personalized viewing experience.",
        image:"MOVIE-APP.png",
        live:true,
        technologies:["React.js","Tailwind CSS","Redux","API"],
        link:"https://movie-app-abhi.netlify.app/",
        github:"https://github.com/AbhilashMeher/Movie-app"

    },
    {
        title:"CREDIT-CARD-APP",
        desc:"As users input their credit card details, the information is instantly reflected on a simulated credit card.The form includes validation mechanisms to ensure accurate and secure input, preventing invalid entries. • Leveraging Tailwind CSS, the form is designed with a sleek and modern aesthetic, aligning with contemporary web design standards.",
        image:"CREDIT-CARD-APP.png",
        live: true,
        technologies:["React.js","Tailwind CSS","Redux"],
        link:"https://abhi-credit-card-app.netlify.app/",
        github:"https://github.com/AbhilashMeher/credit-card-app"
    },
    {
        title:"PASSWORD-GENERATOR-APP",
        desc:"This React.js-based password generator app empowers users to create robust, customized passwords. The app features a strength meterthat visually indicates the password’s security level based on its complexity. Provide a dedicated button or icon to easily copy the generated password to the user's clipboard with a single click.",
        image:"PASSWORD-GENERATOR-APP.png",
        live:true,
        technologies:["React.js","CSS"],
        link:"https://abhilashmeher.github.io/Password-Generator-app/",
        github:"https://github.com/AbhilashMeher/Password-Generator-app"

    },
    {
        title:"Rock-paper-Scissors",
        desc:"A classic game of Rock Paper Scissors, now playable against the computer! This web-based project, developed using JavaScript, HTML, and CSS, provides an interactive and engaging experience. Players can choose between Rock, Paper, and Scissors, and the computer will make a random selection. 1  The game keeps track of the score and displays the winner of each round.",
        image:"ROCK-PAPER-SCISSORS.png",
        live:true,
        technologies:["JavaScript","HTML","CSS"],
        link:"https://abhilashmeher.github.io/Rock-paper-Scissors/",
        github:"https://github.com/AbhilashMeher/Rock-paper-Scissors"

    },
    {
        title:"Note-Taking-App",
        desc:"This user-friendly note-taking app empowers users to experience seamless note-taking by effortlessly creating, editing, and deleting notes, all while enjoying the power of a lightning-fast search function to instantly find the information they need.",
        image:"Note-Taking-App.png",
        live:true,
        technologies:["JavaScript","HTML","CSS"],
        link:"https://note-taking-app-eight.vercel.app/",
        github:"https://github.com/AbhilashMeher/Note-Taking-App"

    },

]

const SkillInfo =[
    {
        title: "Frontend",
        skills: ["HTML","CSS","JavaScript","TypeScript","React.Js","Angular","Redux","PHP",
            "Tailwind CSS","Material UI", "SAAS" , "Bootstrap",   
        ]
    },
    {
        title: "Backend",
        skills: ["Node JS","Express JS","MySQL","MongoDB","Firebase"]
    },
    {
        title: "Languages",
        skills: ["C","C++","Java","JavaScript","TypeScript","Python"]
    },
    {
        title: "Tools",
        skills: ["Window","Vs Code","Github","MongoDB Compass"]
    }
]
const InternshipInfo=[
    {
        role:"Java Full Stack",
        company:"Wipro",
        date:"May-2023 to Sept-2023",
        desc:"This comprehensive program equips you with the foundational and advanced knowledge of Java, along with essential front-end and back-end technologies to build robust and scalable full-stack applications.",
        skills:["Java"]
    },
    {
        role:"Data Analytics",
        company:"Lagozon Edutech Pvt.Ltd",
        date:"16th-May-2022 to 27th-june-2022",
        desc:"Lagozon EduTech, a leading Indian EdTech company, offers a dynamic Data Analytics internship program designed to equip you with practical experience and industry-relevant skills. Join us and be at the forefront of educational technology, helping us revolutionize learning through data-driven insights.",
        skills:["Python","R","SQL","Data Visualization","Power BI"]
    },
    {
        role:"MEAN Intern",
        company:"MCAPL",
        date:"May-2021 to june-2022",
        desc:"As a MEAN Stack Intern at MCAPL, you will gain valuable hands-on experience in developing and maintaining web applications using the MEAN stack (MongoDB, Express.js, Angular/React, Node.js). You will work closely with our experienced development team on real-world projects, contributing to the development of innovative and impactful solutions.",
        skills:["Mongo DB","Express.js","Angular","Node.js"]
    }
]
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
const socialLinks = [
    {link:"https://github.com/AbhilashMeher",icon:IconBrandGithub},
    {link:"https://www.linkedin.com/in/abhilash-meher-263a9b1b6/",icon:IconBrandLinkedin},
    {link:"https://www.instagram.com/abhi.lash_meher/",icon:IconBrandInstagram},
    {link:"https://www.facebook.com/abhilash.meher.963/",icon:IconBrandFacebook},
    {link:"https://leetcode.com/u/AbhilashMeher/",icon:IconBrandLeetcode},
];

export {Info,ProjectInfo,SkillInfo,InternshipInfo,Slugs,socialLinks};