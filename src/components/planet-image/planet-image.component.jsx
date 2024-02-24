import { Fragment, useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import planet from "../../assets/home page planet.png";
import { motion } from "framer-motion";
import "./planet-image.styles.scss";

export const PlanetImage = () => {
  const constraintsRef = useRef(null);
  const [ref, inView] = useInView();
  const [animationDelay, setAnimationDelay] = useState(5); // State to manage animation delay
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimatedRef.current) {
      // Set hasAnimatedRef to true to prevent animation from repeating
      hasAnimatedRef.current = true;
      setAnimationDelay(0.3); // Update delay for subsequent animations
    }
  }, [inView]);

  return (
    <Fragment>
      <motion.div
        className="drag-area absolute top-[29vh] left-[-96px]  max-[700px]:left-[-166px] max-[500px]:left-[-156px] max-[500px]:w-[230px] max-[500px]:h-[230px] max-[500px]:top-[7vh] max-[1350px]:top-[7vh] -z-10"
        ref={constraintsRef}
      />
      <motion.img
        ref={ref}
        initial={{ y: 50, scale: 0.2, opacity: 0 }}
        animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: animationDelay }} // Use dynamic delay
        drag
        dragConstraints={constraintsRef}
        className="dragged-object absolute top-[25vh] left-[-96px] max-[1000px]:left-[-156px] max-[500px]:w-[230px] max-[500px]:h-[230px] max-[500px]:top-[7vh] "
        src={planet}
        alt="this is planet"
      />
    </Fragment>
  );
};
