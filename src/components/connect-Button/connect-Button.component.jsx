// ConnectButton component
import "./connect-Button.styles.scss";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export const ConnectButton = ({ buttonName }) => {
  // Destructure buttonName prop correctly
  const [ref, inView] = useInView();
  const hasAnimatedRef = useRef(false);
  const [animationDelay, setAnimationDelay] = useState(4.5);

  useEffect(() => {
    if (inView && !hasAnimatedRef.current) {
      hasAnimatedRef.current = true;
      setAnimationDelay(0);
    }
  }, [inView]);

  return (

    <motion.div
      ref={ref}
      initial={{ y: 150, opacity: 0 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: animationDelay }}
    >
      <button className="slide_from_right">
        <span className="btn">{buttonName}</span>
      </button>
    </motion.div>
    
  );
};
