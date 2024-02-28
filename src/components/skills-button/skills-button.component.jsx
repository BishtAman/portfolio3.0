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
      transition={{ duration: 0.6 }}
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.6 }}
      className={`raise mx-[10px] my-[15px] skill-button flex items-center bg-[#${color}] ${className} space-x-[5px] rounded-lg w-fit px-[15px] py-[9px] max-[450px]:mx-[7px] max-[450px]:my-[12px] max-[400px]:px-[12px] max-[400px]:py-[7px]`}
    >
      <img className="h-[20px] max-[450px]:h-[17px]" src={imageURL} alt={name} />
      <span className="text-white font-bold  max-[450px]:font-normal tracking-widest text-[12px]">{name}</span>
    </motion.div>
  );
};
