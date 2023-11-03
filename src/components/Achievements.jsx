import React from 'react'
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets/pictures";
import { SectionWrapper } from "../hoc";
import { certifications } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";

const AchievementsCard = ({
  index,
  name,
  image,
  url,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
      className=" max-w-[350px] min-w-[350px] justify-self-center"
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <Link to={url} className="">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />
          </Link>
        </div>
        <div className="mt-5">
          <h3 className=" text-white font-bold text-[24px]">{name}</h3>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Achievements...</p>
        <h2 className={styles.sectionHeadText}>Certifications.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          My certifications serve as a testament to my skills and expertise, demonstrated through real-world examples of my work.
          Each certification is backed by practical projects, showcasing my ability to solve complex problems, work with diverse technologies, and effectively manage project solutions.
          Here's a brief overview of my certified expertise:
        </motion.p>
      </div>
      <div className="mt-20 grid-full-container flex-wrap gap-7">
        {certifications.map((project, index) => (
          <AchievementsCard key={index} {...project} index={index} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Achievements, "achievements");
