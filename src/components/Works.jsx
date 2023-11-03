import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets/pictures";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  examples_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
      className=" max-w-[450px] min-w-[450px] justify-self-center"
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <Link to={examples_link} className="">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />
          </Link>
          <div className="absolute top-[-5px] right-[-5px] w-max h-max justify-end gap-1 m-3 card-img_hover">
            {source_code_link.map((source_link, index) => (
              <div
                title="Github Repository"
                key={index}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer relative z-50 hover:shadow-card"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(source_link, "_blank");
                }}
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5">
          <h3 className=" text-white font-bold text-[24px]">{name}</h3>
          <p className=" mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-row gap-2">
          {tags.map((tag, index) => (
            <p key={index} className={`text-[14px] ${tag.color}`}>
              {tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work...</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects solutions effectively.
        </motion.p>
      </div>
      <div className="mt-20 grid-container flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
