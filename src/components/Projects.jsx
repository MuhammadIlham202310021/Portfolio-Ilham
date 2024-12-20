import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // Menyimpan gambar yang dipilih

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null); // Reset gambar yang dipilih saat modal ditutup
  };

  return (
    <div id="Projects" className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="lg:my-20 my-8 text-center lg:text-4xl text-3xl"
      >
        Projects
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
              <img
                src={project.image}
                width={200}
                height={200}
                alt={project.title}
                className="lg:mb-6 rounded cursor-pointer py-5"
                onClick={() => openModal(project.image)}
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h5 className="mb-2 font-semibold">{project.title}</h5>
              <p className="mb-4 text-neutral-400 text-justify">
                {project.description}
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
      </div>

      {/* Modal untuk gambar full-screen */}
      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-[90%] max-h-[90%] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="absolute top-2 right-2 text-white text-2xl font-bold cursor-pointer bg-black bg-opacity-50 px-2 py-1 rounded-full"
              onClick={closeModal}
            >
              &times;
            </span>
            <img
              src={selectedImage} // Gunakan gambar yang dipilih
              alt="Project"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
