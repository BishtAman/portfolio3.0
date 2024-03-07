import "./project-card.styles.scss";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
// import Link from "../../assets/link.png";
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
      initial={{ y: 100, opacity: 0 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.9 }}
      className="flex justify-between flex-wrap  max-sm:flex-col max-sm:m-auto"
    >
      <div className="project-card relative flex w-full max-w-[26rem] flex-col rounded-xl   bg-clip-border text-white shadow-lg my-[25px]">
        <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <img src={imageURL} alt="ui/ux review check" />
          <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h5 className=" text-[24px] antialiased font-bold leading-snug tracking-wide text-blue-gray-900">
              {name}
            </h5>
            <p className=""></p>
          </div>
          <p className="block  text-[15px] text-justify antialiased font-light leading-relaxed text-white tracking-wide
          ">
            {description}
          </p>
          {tech.map((item) => (
            <ProjectTechButton key={item} tech={item} />
          ))}
        </div>
        <div className="p-6 pt-3">
          <a href={link} target="_blank" rel="noreferrer">
            <div className="block w-full select-none rounded-lg bg-gray-950 py-3.5 px-7 text-center align-middle  text-sm font-bold tracking-[3px] uppercase text-white">
              Visit
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

{
  /* <div className="card project-card-holder w-[615px] h-[404px] max-sm:w-[335px] max-sm:h-[245px] max-sm:my-[20px]">
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

      <div className="front-content font-extralight text-[16px] max-sm:text-[8px]">
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
</div> */
}
