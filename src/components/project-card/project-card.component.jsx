import "./project-card.styles.scss";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Link from "../../assets/link.png";
import { ProjectTechButton } from "../project-tech-button/project-tech-button.component";


export const ProjectCard = ({ name, imageURL, description, link, tech }) => {
 
    
  const [ref, inView] = useInView();
  const hasAnimatedRef = useRef(false);
  useEffect(() => {
    if (inView && !hasAnimatedRef.current) {
      // Set hasAnimatedRef to true to prevent animation from repeating
      hasAnimatedRef.current = true;
    }
  }, [inView]);


  return (
    <motion.div
      ref={ref}
      initial={{ y: 100,  opacity: 0 }}
      animate={inView ? { opacity: 1,  y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="flex justify-between flex-wrap max-sm:flex-col max-sm:m-auto"
    >
      <div className="card project-card-holder w-[615px] h-[404px] max-sm:w-[335px] max-sm:h-[245px] max-sm:my-[20px]">
        <div className="content">
          <div className="back">
            <div className="back-content max-sm:gap-[17px]">
              <img className="h-[300px] max-sm:h-[166px] rounded-sm" src={imageURL} />
              <p className="text-[20px]">{name}</p>
            </div>
          </div>
          <div className="front">
            <div className="img">
              <div className="circle"></div>
              <div className="circle" id="right"></div>
              <div className="circle" id="bottom"></div>
            </div>

            <div className="front-content font-extralight text-[18px] max-sm:text-[8px]">
              <div className="front-details">
                <div className="description">
                  <div className="title text-justify font-light ">
                    {description}
                  </div>
                </div>

                <div className="flex space-x-[10px]">
                  {tech.map((item) => (
                    <ProjectTechButton key={item} tech={item} />
                  ))}
                </div>

                <div className="project-visit-link">
                  <a
                    href={link}
                    target="_blank"
                    className=" flex justify-center items-center space-x-[10px]"
                  >
                    <p className="">Visit</p>
                    <img className="invert h-[15px]" src={Link} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
