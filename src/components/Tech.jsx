import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap gap-10 justify-center">
      {technologies.map((tech, index) => (
        <div className="w-28 h-28" key={tech.name}>
          <BallCanvas icon={tech.icon}/>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "")