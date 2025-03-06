/**
 * @typedef {Object} Project
 * @property {number} id - Unique identifier for the project.
 * @property {string} name - The name of the project.
 * @property {string} title - The project category or type.
 * @property {string} image - The URL or path to the project's image.
 * @property {string} description - A detailed description of the project.
 * @property {string} descriptionSmall - A short summary of the project.
 * @property {string[]} skills - An array of technologies used in the project.
 * @property {string} demoLink - The URL of the live project demo.
 * @property {string} codeLink - The URL to the project's source code repository.
 */

/**
 * An array of projects showcasing different development works.
 * @type {Project[]}
 */


const projects = [
  {
    id: 1,
    name: "Holidaze",
    title: "Project Exam 2",
    image: "/Holidaze.jpg",
    description: "Holidaze is a modern, user-friendly holiday venue booking platform I built as part of my final exam in Front-End Development at Noroff. The goal of the project was to demonstrate my ability to create dynamic, responsive web applications using React and Tailwind CSS. The platform allows users to browse various holiday destinations and make bookings directly through the site. I integrated API calls for fetching venue data, and focused on creating a clean, responsive user interface with smooth transitions.",
    descriptionSmall: "A user-friendly holiday venue booking platform built with React and Tailwind CSS, featuring dynamic API integration for browsing and booking venues.",
    skills: ["React", "Tailwind", "Vite", "API"],
    demoLink: "https://holidaze-pe2-rh.netlify.app/",
    codeLink: "https://github.com/renahashimi/holidaze-pe2.git",
  },
  {
    id: 2,
    name: "Lunaura",
    title: "JavaScript Frameworks",
    image: "/Lunaura.jpg",
    description: "Lunaura is a fully functional eCommerce website I developed during my intensive React learning module. This project required integrating an external API, implementing dynamic routing, and managing state efficiently with React. The store offers various beauty products, with features like filtering, a detailed product view, and a smooth checkout process.",
    descriptionSmall: "An eCommerce beauty store built using React, featuring API integration, filtering, and a seamless checkout experience.",
    skills: ["React", "Tailwind", "Styled Components", "API"],
    demoLink: "https://lunaura-jsf-rh.netlify.app/",
    codeLink: "https://github.com/renahashimi/lunaura-jsf.git",
  },
  {
    id: 3,
    name: "Midas Touch",
    title: "Semester Project 2",
    image: "/midastouch.jpeg",
    description: "This is my Semester Project 2, where I applied the skills I’ve developed over the past three semesters to create an auction website. The project involves building a platform where users can list items for auction and place bids on items posted by others. Upon registration, new users receive 1,000 credits to participate in the bidding process. Users can earn more credits by selling items and spend credits by purchasing them. While non-registered users can browse the listings, only registered users are allowed to place bids.",
    descriptionSmall: "An online auction platform where users can list, bid, and buy items using a credit-based system.",
    skills: ["HTML", "SASS", "JavaScript", "Bootstrap"],
    demoLink: "https://midastouch-rh-sp2.netlify.app/",
    codeLink: "https://github.com/renahashimi/SemesterProject2.git",
  },
  {
    id: 4,
    name: "Buta Cuisine",
    title: "Project Exam 1",
    image: "/Buta Cuisine.jpg",
    description: "This is my project exam 1, where we were tasked with creating a blog page with an optional theme and some mandatory features such as 12 posts, a carousel, and a modal. I chose to create a food blog with recipes from my home country. In this project, I showcased the skills I learned during my first year of study, including API integration and dynamic content rendering.",
    descriptionSmall: "A food blog featuring authentic recipes, built with HTML, CSS, JavaScript, and WordPress API integration.",
    skills: ["HTML", "CSS", "JavaScript", "WordPress", "API"],
    demoLink: "https://butacuisine-rh-pe1.netlify.app",
    codeLink: "https://github.com/Noroff-FEU-Assignments/project-exam-1-renahashimi.git",
  },
  {
    id: 5,
    name: "Rainydays",
    title: "Cross-Course Project",
    image: "/Rainydays.jpg",
    description: "Rainydays is my cross-course project, a website that I developed and improved throughout my first year at Noroff. Initially built with only HTML and CSS, I later enhanced it by adding JavaScript functionality. The final version was developed as an e-commerce site using WordPress and API integration. Rainydays is a fictional online store that sells rain jackets for men and women, targeting customers aged 30-50.",
    descriptionSmall: "An evolving e-commerce website for rain jackets, built with HTML, CSS, JavaScript, and WordPress API integration.",
    skills: ["HTML", "CSS", "JavaScript", "WordPress", "API"],
    demoLink: "https://rainydays-cms-renahashimi.netlify.app",
    codeLink: "https://github.com/renahashimi/cms-rainydays.git",
  },
  {
    id: 6,
    name: "Treasure of Pangea",
    title: "Semester Project 1",
    image: "/Treasures of Pangea.jpg",
    description: "This is my Noroff Semester Project 1. In this project, I was tasked with creating a website for a museum that was to be opened in my town - 'Community Science Museum'. My website for the project/museum is called 'Treasures of Pangea' and is designed to be engaging and educational, particularly for children and their families. The project focused on building a structured and visually appealing site using only HTML and CSS.",
    descriptionSmall: "A museum website designed for families and children, focusing on an engaging and informative experience.",
    skills: ["HTML", "CSS"],
    demoLink: "https://sp1-renahashimi.netlify.app",
    codeLink: "https://github.com/renahashimi/semesterproject1.git",
  }
];

export default projects;