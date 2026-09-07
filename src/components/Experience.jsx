import React, { useState } from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useLang } from "../context/LangContext";
import { t } from "../data/Translations";

const Experience = () => {
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
    <div id="Experience" className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="lg:my-20 my-8 text-center lg:text-4xl text-3xl"
      >
        {t[lang].experience_title}
      </motion.h1>

      <div>
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="lg:mb-2 mb-3 lg:font-semibold lg:text-neutral-100 text-neutral-400">
                {exp.year}
              </p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 lg:font-semibold font-normal text-neutral-100">
                {exp.role} -{" "}
                <span className="lg:font-semibold font-normal text-neutral-100">
                  {exp.company}
                </span>
              </h6>

              {/* Deskripsi dari translations, fallback ke constants */}
              <p className="mb-4 text-neutral-400 text-justify">
                {t[lang].exp_descriptions[index] ?? exp.description}
              </p>

              {exp.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="mr-2 rounded text-neutral-900 px-1 lg:px-2 py-1 text-xs lg:text-sm font-medium bg-slate-300"
                >
                  {tech}
                </span>
              ))}

              {/* Thumbnail semua gambar */}
              <div className="flex flex-wrap gap-3 mt-4">
                {exp.images.map((img, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={img}
                    alt={`${exp.title} ${imgIndex + 1}`}
                    className="w-24 h-24 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => openLightbox(exp.images, imgIndex)}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Satu Lightbox di luar loop, data diisi via state */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={slideIndex}
      />
    </div>
  );
};

export default Experience;