import React, { useState } from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant } from "../../utils/motion";

// Modal Component
const Modal = ({ show, onClose, project }) => {
  if (!show) return null;

  return (
    <div className={css.modalBackdrop} onClick={onClose}>
      <div className={css.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>{project.title}</h2>
        <div className={css.modalButtons}>
          <a
            href={project.viewLink}
            target="_blank"
            rel="noreferrer"
            className={css.button}
          >
            View
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className={css.button}
          >
            GitHub
          </a>
        </div>
        <button onClick={onClose} className={css.closeButton}>
          Close
        </button>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      imgSrc: "../../../public/Header.png",
      title: "Project 1",
      viewLink: "https://restaurent-five.vercel.app/",
      // githubLink: "https://github.com/NitinKumar311/food-app",
    },
    {
      imgSrc: "./showCase2.png",
      title: "Project 2",
      viewLink: "https://gym-six-ruby.vercel.app/",
      // githubLink: "https://github.com/NitinKumar311/Quotes",
    },
    {
      imgSrc: "../../../public/robot.png",
      title: "Project 3",
      viewLink: "https://hoobank-liart-pi.vercel.app/",
      // githubLink: "https://github.com/NitinKumar311/Hoobank",
    },
  ];

  const handleImageClick = (project) => {
    if (selectedProject === project && showModal) {
      setShowModal(false);
      setSelectedProject(null);
    } else {
      setSelectedProject(project);
      setShowModal(true);
    }
  };

  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div
          variants={textVariant(0.4)}
          className={`flexCenter ${css.heading}`}
        >
          <div>
            <span className="primaryText">My Latest Works</span>
            <p style={{ marginTop: "10px" }}>
              Perfect solution for digital experience
            </p>
          </div>
          <span className="secondaryText">Explore More Works</span>
        </motion.div>

        <motion.div className={`flexCenter ${css.showCase}`}>
          {projects.map((project, index) => (
            <motion.img
              key={index}
              variants={fadeIn("up", "tween", 0.5 + index * 0.2, 0.6)}
              src={project.imgSrc}
              alt={project.title}
              className={css.projectImage}
              onClick={() => handleImageClick(project)}
            />
          ))}
        </motion.div>
      </div>

      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        project={selectedProject}
      />
    </motion.section>
  );
};

export default Portfolio;
