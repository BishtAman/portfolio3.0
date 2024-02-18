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
      initial={{ opacity: 0, scale: 0.2, y: 50 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 1.5, delay: 4.5, ease: [0, 0.71, 0.2, 1.01], }}
      className="phrase h-[100vh] w-[100vw] flex justify-center align-middle flex-col pl-[16rem] pr-[4rem] space-y-7"
    >
      <h1 className="text-[#00D9FF] text-[35px]">
        Hey, I&#39;m <span className="text-white white-phrase">Aman.</span>
      </h1>

      <p className="text-white text-[70px] font-extrabold">
        Uncovering New Realms of the Digital Cosmos, where&nbsp;
        <span className=" text-[#00D9FF] white-phrase">Code</span>and&nbsp;
        <span className=" text-[#00D9FF] white-phrase">Creativity</span>{" "}
        Collide.
      </p>

      <ConnectButton />
    </motion.div>
  );
};

// import "./styles.css";

// export default function App() {

//   return (
//     <>
//       <motion.div
//         className="App1"
//         ref={ref}
//         initial={{ opacity: 0, scale: 0.2, y: 50 }}
//         animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
//         transition={{ duration: 1.5, delay: 0.1, ease: [0, 0.71, 0.2, 1.01] }}
//       />
//       <motion.div
//         className="App2"
//         ref={ref}
//         initial={{ opacity: 0, scale: 0.2, y: 50 }}
//         animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
//         transition={{ duration: 1.5, delay: 0.1, ease: [0, 0.71, 0.2, 1.01] }}
//       />
//       <motion.div
//         className="App3"
//         ref={ref}
//         initial={{ opacity: 0, scale: 0.2, y: 50 }}
//         animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
//         transition={{ duration: 1.5, delay: 0.1, ease: [0, 0.71, 0.2, 1.01] }}
//       />
//     </>
//   );
// }
