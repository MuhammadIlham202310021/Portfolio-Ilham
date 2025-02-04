import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 lg:mb-35">
      <div className="w-full">
        <div className="flex flex-col items-center">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-10 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
          >
            Muhammad Ilham
          </motion.h1>
          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
          >
            Web Developer & Quality Assurance Spesialist
          </motion.span>
          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-10 font-light tracking-tighter text-justify"
          >
            {HERO_CONTENT}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
