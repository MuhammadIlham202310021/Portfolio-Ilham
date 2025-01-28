import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import sertifikat1 from "../assets/projects/Sertifikat1.png";
// import sertifikat2 from "../assets/projects/Sertifikat2.png";
import sertifikat3 from "../assets/projects/Sertifikat3.png";
// import sertifikat4 from "../assets/projects/Sertifikat4.png";

export const HERO_CONTENT = `I am a Software Quality Assurance professional with proven experience in ensuring application quality through comprehensive testing and system improvements. Additionally, I am a web developer skilled in front-end technologies like React JS.`;
// export const HERO_CONTENT = `Saya adalah seorang profesional di bidang Software Quality Assurance dengan pengalaman terbukti dalam memastikan kualitas aplikasi melalui pengujian yang komprehensif dan peningkatan sistem. Selain itu, saya juga seorang pengembang web yang terampil dalam teknologi front-end seperti React JS`;

export const ABOUT_TEXT = `I am a recent graduate in Information Technology from IBI Kesatuan, with a strong passion for IT and programming. I possess skills in web development using JavaScript, React JS, Node.js, Express.js, and Python. I have completed the Independent Study program at Dicoding Academy in both Front-End Web and Back-End tracks, which has strengthened my expertise in full-stack web application development. In addition, I gained valuable experience during an internship at the New Venture Businesses Division of PT Summarecon Agung as a Quality Assurance. In this role, I was responsible for ensuring the quality and performance of applications met industry standards. During the internship, I successfully collaborated with the development team to enhance product quality through comprehensive testing and system improvements. I am skilled in time management and highly adaptable, enabling me to work effectively both independently and as part of a team. I am always eager to learn new technologies and excited to take on new challenges in the IT field.`;

export const EXPERIENCES = [
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
    title: "Automation Testing OrangeHRM Web ",
    image: project3,
    description:
      "I conducted automation testing on the OrangeHRM website, an HRMS used to manage employees and human resources. In addition to creating automation scripts, I prepared test cases in Excel and documented the testing process. The demo website https://opensource-demo.orangehrmlive.com allows users to test OrangeHRM’s features. However, like other websites, effective QA is needed to ensure proper functionality.",
    technologies: ["Python", "Selenium IDE", "Excel"],
  },
];

export const CONTACT = {
  address: "Jl. Parung Bogor",
  phoneNo: "0895-0627-3373",
  email: "mhmmdilhamriza03@gmail.com",
};
