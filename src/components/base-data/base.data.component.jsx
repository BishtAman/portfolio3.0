import { ConnectButton } from "../connect-Button/connect-Button.component";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export const BaseData = () => {
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
      initial={{ y: 50, scale:0.5, opacity: 0 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: 4.5 }}
      className="phrase h-[100vh] w-[100%] flex justify-center pt-[100px] flex-col pl-[16rem] pr-[2rem] max-[1000px]:pl-[11rem] max-[1000px]:left-[75px] max-[700px]:pl-[8rem] max-[500px]:pl-[2rem] max-[500px]:pt-[10px] max-[500px]:items-center space-y-10"
    >
      <h1 className="text-[#00D9FF] text-[35px]  max-[1255px]:text-[28px] max-[1000px]:text-[24px] max-[500px]:text-[18px] max-[500px]:text-center">
        Hey, I&#39;m <span className="text-white white-phrase">Aman.</span>
      </h1>

      <p className="text-white text-[60px] font-extrabold max-[1255px]:text-[50px] max-[1000px]:text-[35px] max-[500px]:text-[37px] max-[500px]:text-center">
        Uncovering New Realms of the Digital Cosmos, where&nbsp;
        <span className=" text-[#00D9FF] white-phrase">Code</span> and&nbsp;
        <span className=" text-[#00D9FF] white-phrase">Creativity</span>
        Collide.
      </p>

      <ConnectButton />
    </motion.div>
  );
};

