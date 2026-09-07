import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox"; 
import "yet-another-react-lightbox/styles.css";
import { useLang } from "../context/LangContext";
import { t } from "../data/Translations";

const Projects = () => {
    const { lang } = useLang();
    const [open, setOpen] = useState(false);
    const [slides, setSlides] = useState([]);
    const [slideIndex, setSlideIndex] = useState(0);
  
    const openLightbox = (images, startIndex = 0) => {
      setSlides(images.map(src => ({ src })));
      setSlideIndex(startIndex);
      setOpen(true);
    };

  return (
    <div id="Projects" className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="lg:my-20 my-8 text-center lg:text-4xl text-3xl"
      >
        {t[lang].projects_title}
      </motion.h1>

      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap-reverse lg:justify-center"
          >

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4"
            >
              {/* <img
                src={project.image}
                width={200}
                height={200}
                alt={project.title}
                className="lg:mb-6 rounded cursor-pointer py-5"
                onClick={() => openLightBox(project.image)}
              /> */}
              <div className="flex flex-wrap gap-5 mt-4">
                {project.images.map((img, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={img}
                    width={200}
                    height={200}
                    alt={`${project.title} ${imgIndex + 1}`}
                    className="object-cover rounded cursor-pointer
                               hover:opacity-80 transition-opacity"
                    onClick={() => openLightbox(project.images, imgIndex)}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h5 className="mb-2 font-semibold">{project.title}</h5>

              <p className="mb-4 text-neutral-400 text-justify">
                {t[lang].project_descriptions[index] ?? project.description}
              </p>

              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded text-neutral-900 px-1 lg:px-2 py-1 text-xs lg:text-sm font-medium bg-slate-300"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          index={slideIndex}
        />
      </div>
    </div>
  );
};

export default Projects;
