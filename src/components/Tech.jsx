import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Some of my techs...</p>
        <h2 className={styles.sectionHeadText}>Technical Stack.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          My proficiency in a diverse range of technologies forms the backbone
          of my expertise. Through hands-on experience and practical
          applications, I've mastered a robust tech stack, enabling me to tackle
          complex challenges and deliver innovative solutions. Here's an
          overview of my key technical skills:
        </motion.p>
      </div>
      <div className="flex flex-row mt-20 flex-wrap gap-10 justify-center">
        {technologies.map((tech, index) => (
          <div className="w-28 h-28" key={tech.name}>
            <BallCanvas key={index} icon={tech.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech_stack");
