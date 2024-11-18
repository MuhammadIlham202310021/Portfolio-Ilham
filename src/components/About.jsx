import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const About = () => {
  return (
    <div id="About" className="border-b border-neutral-900 pb-4 mt-14">
      <div className="flex flex-col lg:items-center">
        <motion.h1
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="lg:pb-5 pb-3 text-4xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
        >
          Muhammad Ilham
        </motion.h1>
        <motion.span
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl lg:text-3xl tracking-tight text-transparent"
        >
          Software Quality Assurance & Web Developer React JS
        </motion.span>
        <motion.p
          variants={container(1)}
          initial="hidden"
          animate="visible"
          className="my-2 lg:px-36 lg:py-10 py-4 font-medium text-sm lg:text-xl tracking-tighter lg:text-center text-justify"
        >
          {HERO_CONTENT}
        </motion.p>
      </div>
    </div>
  );
};

export default About;
