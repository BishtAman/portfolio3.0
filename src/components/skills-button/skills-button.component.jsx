import "./skills-button.styles.scss";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
export const SkillButton = ({ name, imageURL, color, className }) => {
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
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.6 }}
      className={`raise mx-[10px] my-[15px] skill-button flex items-center bg-[#${color}]  space-x-[5px] rounded-lg w-fit px-[15px] py-[9px]   ${className}  [@media(max-width:450px)]:mx-[7px] [@media(max-width:450px)]:my-[12px] [@media(max-width:400px)]:px-[12px] [@media(max-width:400px)]:py-[7px]`}
    >
      <img
        className="h-[20px]"
        src={imageURL}
        alt={name}
      />
      <span className="text-white skill-text font-normal  tracking-widest ">
        {name}
      </span>
    </motion.div>
  );
};
