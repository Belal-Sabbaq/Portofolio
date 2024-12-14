import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate software engineer specializing in quality assurance (QA) and business analysis, with a strong foundation in web development. With hands-on experience designing and building scalable web applications, I excel in delivering secure, efficient, and user-focused solutions. My expertise spans front-end technologies like React and back-end technologies like Node.js, coupled with a deep interest in cybersecurity and system optimization. I am driven by a commitment to innovation and thrive on solving complex challenges to create impactful, resilient systems. Let’s connect to collaborate on building the future of technology!`;

export const ABOUT_TEXT = `I am a passionate software engineer with a strong foundation in web development, quality assurance (QA), and business analysis. My journey began with a curiosity for understanding how systems work and evolved into a career focused on designing secure, scalable, and user-centric solutions. I have hands-on experience with technologies like React, Node.js, MySQL, and MongoDB, and I thrive on solving complex challenges in collaborative environments. I’m always eager to learn, adapt, and contribute to innovative projects that drive meaningful impact. Outside of work, I enjoy exploring emerging technologies and staying engaged with the tech community.`;

export const EXPERIENCES = [
  {
    year: "Oct 2024 - Present",
    role: "Software Quality Assurance Intern",
    company: "Digital Egypt Pioneers Initiative - DEPI",
    description: `
      - Developing a strong foundation in software quality assurance through ISTQB Foundation Level (ISTQB FL) certification principles.
      - Designing and executing detailed manual test cases to validate software functionality, usability, and performance.
      - Gaining hands-on experience in automated testing by creating and running scripts using Java and Selenium.
      - Ensuring efficiency and accuracy in testing processes to support the delivery of high-quality software products.
      - Strengthening expertise in both manual and automated testing methodologies.
    `,
    technologies: ["Java", "Selenium", "ISTQB FL", "Manual Testing", "Automated Testing"],
  },
  {
    year: "Feb 2024 - Oct 2024",
    role: "Full Stack Engineer",
    company: "Horus BDC",
    description: `
      - Built responsive user interfaces using React.js and integrated them with APIs to deliver seamless user experiences.
      - Developed RESTful and GraphQL APIs using Node.js and Express.js, ensuring high performance and scalability.
      - Designed and maintained MongoDB databases, implementing efficient data models for complex applications.
      - Integrated third-party APIs to enhance application functionalities, ensuring secure and reliable communication between services.
      - Collaborated with cross-functional teams, including UI/UX designers, product managers, and QA engineers, to deliver high-quality projects on time.
      - Focused on optimizing application performance, debugging issues, and implementing best coding practices.
    `,
    technologies: ["React.js", "Node.js", "Express.js", "GraphQL", "MongoDB"],
  },
  {
    year: "Jun 2018 - Apr 2021",
    role: "WordPress Developer",
    company: "KonDa EG Business Development",
    description: `
      - Built and managed WordPress websites, handling theme installation, plugin customization, and performance optimization.
      - Implemented SEO strategies to improve site visibility and rankings on search engines.
      - Streamlined website operations by purchasing and configuring domains and hosting services.
      - Delivered responsive and user-friendly designs to enhance user experience and engagement.
    `,
    technologies: ["WordPress", "SEO", "Hosting", "Theme Customization"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Haram, Giza, Egypt",
  phoneNo: "+20 111 967 3555 ",
  email: "Belal.sabbaq@gmail.com",
};
