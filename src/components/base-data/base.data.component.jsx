// BaseData component
import { ConnectButton } from "../connect-Button/connect-Button.component";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import "./base-data.component.scss";

export const BaseData = () => {
  const [ref, inView] = useInView();
  const hasAnimatedRef = useRef(false);
  const [animationDelay, setAnimationDelay] = useState(4.5);

  useEffect(() => {
    if (inView && !hasAnimatedRef.current) {
      hasAnimatedRef.current = true;
      setAnimationDelay(0);
    }
  }, [inView]);

  const buttonName = "lets Connect"; // Define buttonName here

  return (
    <div  className="phrase h-screen w-full flex flex-col items-center justify-center py-12 px-4 sm:px-4 lg:px-7 space-y-14">
      <motion.h1
        ref={ref}
        initial={{ y: 150, opacity: 0 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: animationDelay }}
        className="text-[#00D9FF] text-3xl sm:text-5xl lg:text-4xl leading-tight text-center"
      >
        Hey, I&#39;m <span className="text-white">Aman.</span>
      </motion.h1>
      <motion.p
        ref={ref}
        initial={{ y: 150, opacity: 0 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: animationDelay }}
        className="text-white text-4xl sm:text-3xl lg:text-6xl text-center max-[450px]:text-left font-extrabold max-w-6xl"
      >
        Uncovering New Realms of the Digital Cosmos, where{" "}
        <span className="text-[#00D9FF]">Code</span> and{" "}
        <span className="text-[#00D9FF]">Creativity</span> Collide.
      </motion.p>
      <ConnectButton buttonName={buttonName} />
    </div>
  );
};
