import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <section className={`paddings ${css.wrapper}`}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`innerWidth ${css.container}`}
        >
          <div className={css.upperElements}>
            <motion.span
              className="primaryText"
              variants={fadeIn("right", "tween", 0.2, 1)}
            >
              Hey There,
              <br />
              I'm Nitin Kumar.
            </motion.span>
            <motion.span
              className="secondaryText"
              variants={fadeIn("left", "tween", 0.4, 1)}
            >
              I'm creative developer and
              <br />
              I'm very passionate and <br />
              Dedicated to my work..
            </motion.span>
          </div>

          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className={css.person}
          >
            <motion.img
              variants={slideIn("up", "tween", 0.5, 1.3)}
              src="../../../public/person.png"
              alt=""
            />
          </motion.div>

          <a className={css.email} href="mailto:nitinofficial2001@gmail.com">
            nitinofficial2001@gmail.com
          </a>

          <div className={css.lowerElements}>
            <motion.div
              variants={fadeIn("right", "tween", 0.3, 1)}
              className={css.experience}
            >
              <div className="primaryText">01</div>
              <div className="secondaryText">
                <div>Years</div>
                <div>Experience</div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("left", "tween", 0.5, 1)}
              className={css.certificate}
            >
              <img src="./certificate.png" alt="" />
              <span>Mern Stack Developer</span>
              <span>React Developer</span>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
