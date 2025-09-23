import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import sertifikat1 from "../assets/projects/Sertifikat1.png";
// import sertifikat2 from "../assets/projects/Sertifikat2.png";
import sertifikat3 from "../assets/projects/Sertifikat3.png";
// import sertifikat4 from "../assets/projects/Sertifikat4.png";
import sertifikat5 from "../assets/projects/Sertifikat5.jpg";
import sertifikat7 from "../assets/projects/Sertifikat7.jpg";

export const HERO_CONTENT = `I am a Software Quality Assurance professional with proven experience in ensuring application quality through comprehensive testing and system improvements. Additionally, I am a web developer skilled in front-end technologies like React JS.`;
// export const HERO_CONTENT = `Saya adalah seorang profesional di bidang Software Quality Assurance dengan pengalaman terbukti dalam memastikan kualitas aplikasi melalui pengujian yang komprehensif dan peningkatan sistem. Selain itu, saya juga seorang pengembang web yang terampil dalam teknologi front-end seperti React JS`;

export const ABOUT_TEXT = `I am a recent graduate in Information Technology from IBI Kesatuan, with a strong passion for IT and programming. I possess skills in web development using JavaScript, React JS, Node.js, Express.js, and Python. I have completed the Independent Study program at Dicoding Academy in both Front-End Web and Back-End tracks, which has strengthened my expertise in full-stack web application development. In addition, I gained valuable experience during an internship at the New Venture Businesses Division of PT Summarecon Agung as a Quality Assurance. In this role, I was responsible for ensuring the quality and performance of applications met industry standards. During the internship, I successfully collaborated with the development team to enhance product quality through comprehensive testing and system improvements. I am skilled in time management and highly adaptable, enabling me to work effectively both independently and as part of a team. I am always eager to learn new technologies and excited to take on new challenges in the IT field.`;

export const EXPERIENCES = [
  {
    year: "February 2025 - July 2025",
    role: "Junior Curriculum Developer",
    company: "PT. Anagata Sisedu Nusantara",
    description: `From February to July 2025, I worked as a Junior Curriculum Developer at PT. Anagata Sisedu Nusantara. In this role, I developed interactive learning modules for elementary and middle school students, focusing on enhancing digital learning experiences. I designed Scratch-based projects for elementary students to foster creativity and logical thinking, as well as HTML & CSS projects for middle school students to introduce the fundamentals of web programming. Additionally, I collaborated closely with the curriculum team to ensure all materials aligned with educational standards, providing meaningful contributions to the teaching and learning process.`,
    technologies: ["Canva", "HTML & CSS", "Javascript", "Scratch"],
    image: sertifikat7,
    title: "Sertifikat",
    // image: sertifikat4,
  },
  {
    year: "August 2023 - December 2023",
    role: "Quality Assurance Intern",
    company: "PT. Summarecon Agung, Tbk.",
    description: `I handled manual testing for the Summarecon Mall and Summarecon Home apps on both web and mobile platforms (Android). My tasks included creating test cases, identifying and reporting bugs, and coordinating with developers to resolve issues. I also collaborated with system analysts and product specialists to discuss feature flows and ensure high application quality throughout the development process.`,
    technologies: ["BlackBox Testing", "Manual Testing", "UAT Testing"],
    image: sertifikat3,
    title: "Sertifikat",
    // image: sertifikat4,
  },
];

export const CERTIFICATIONS = [
  {
    year: "July 2025 - August 2025",
    role: "Quality Assurance Engineer Bootcamp",
    company: "PT. Sanbercode",
    description: `In July to August 2025, I participated in the Quality Assurance Bootcamp at Sanbercode, where I gained comprehensive hands-on experience in software testing. During the program, I learned how to design a comprehensive Test Plan based on real project requirements, perform both manual and automation testing to ensure software quality, and create well-structured and professional testing documentation. I also developed skills in API Testing using Postman, applied best practices of the Software Testing Life Cycle (STLC), and explored automation testing techniques to improve QA process efficiency. Furthermore, I practiced basic SQL queries (SELECT, INSERT, WHERE) to support data testing and mastered Cypress.io for web-based test automation, including actions, assertions, and intercepts. This experience has equipped me with a strong foundation to contribute as a QA professional with a systematic, efficient, and industry-oriented approach.`,
    technologies: ["Cypress", "Postman", "mySQL", "Excel/Spreadsheet"],
    image: sertifikat5,
    title: "Sertifikat",
    // image: sertifikat4,
  },
  {
    year: "August 2022 - December 2022",
    role: "Front-End & Back-End Web Developer at SIB Dicoding Batch 3",
    company: "Dicoding Indonesia",
    description: `From August to December 2022, I participated in the Certified Independent Study (SIB) program at Dicoding Academy Indonesia, where I gained comprehensive skills in programming and web development. The program covered foundational programming, Git and GitHub, basic web programming, front-end development, and JavaScript, as well as beginner-level back-end application building. It culminated in a Capstone Project, allowing me to apply and integrate these skills, solidifying my capabilities as a web developer.`,
    technologies: ["HTML", "CSS", "JavaScript", "mySQL", "Github"],
    image: sertifikat1,
    // image: sertifikat2,
  },
];

export const PROJECTS = [
  {
    title: "Automation Testing OrangeHRM Web With Cypress",
    image: project4,
    description:
      "As the final project of the QA Engineer Bootcamp at Sanbercode, I successfully implemented automation testing with Cypress on three main features of the OrangeHRM demo website: login, forgot password, and directory. By applying the Page Object Model (POM), the test code became more structured, maintainable, and scalable. In addition, the use of intercept enabled validation of API requests and responses, ensuring a more accurate and comprehensive testing process.",
    technologies: ["Cypress", "JavaScript", "VS Code"],
  },
  {
    title: "AzzaFood Web Apps",
    image: project1,
    description:
      "This restaurant web project was developed as a final assignment for the Advanced Web Programming course. It is built using JavaScript, Express JS, React JS, and MySQL. The project incorporates several business processes, including allowing users to browse through menu categories, select dishes, place orders, and make payments.",
    technologies: ["Javascript", "CSS", "React JS", "Express JS", "MySQL"],
  },
  {
    title: "Family healthing Information Web",
    image: project2,
    description:
      "FHI (Family Health Information) is a website designed to provide extensive health information for people across Indonesia, with content that is easy for the general public to understand. This application was created as part of the requirements for completing the MSIB X Dicoding program.",
    technologies: ["HTML", "CSS", "Javascript", "Php", "Bootstrap", "MySQL"],
  },
  {
    title: "Automation Testing OrangeHRM Web With Selenium IDE",
    image: project3,
    description:
      "I conducted automation testing on the OrangeHRM website, an HRMS used to manage employees and human resources. In addition to creating automation scripts, I prepared test cases in Excel and documented the testing process. The demo website https://opensource-demo.orangehrmlive.com allows users to test OrangeHRM’s features. However, like other websites, effective QA is needed to ensure proper functionality.",
    technologies: ["Python", "Selenium IDE", "Excel"],
  },
  {
    title: "End-to-End Testing on SwagLabs Website & Reqres API using Katalon Studio",
    image: project5,
    description:
      "I developed an end-to-end testing project using Katalon Studio, covering both SwagLabs (saucedemo.com) web application and Reqres API. The project includes manual, semi-automation, and full automation testing with key scenarios such as login, add to cart, checkout, product sorting, cart validation, product detail, logout, error handling, and API testing (GET, POST, DELETE).",
    technologies: ["Java", "Katalon Studio"],
  },
];

export const CONTACT = {
  address: "Jl. Parung Bogor",
  phoneNo: "0895-0627-3373",
  email: "mhmmdilhamriza03@gmail.com",
};
