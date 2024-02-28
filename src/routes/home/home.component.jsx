import { Loading } from "../../components/loading-text/loading-text.component";
import { Curtains } from "../../components/opening-curtains/opening-curtains.component";
import { About } from "../about/about.component";
import { Base } from "../base/base.component";
import { Navigation } from "../navigation/navigation-bar.component";
import { Skills } from "../skills/skills.component";
import "./home.styles.scss";

export const Home = () => {
  return (
    <div className="App">
      <Loading />
      <Curtains />
      <Navigation />
      <Base />
      {/* <div className="h-[100vh] w-[100%] bg-slate-700"></div> */}
      <div id="about" className="h-[70px] mt-[30px]"></div>
      <About />
      <div id="about" className="h-[70px] mt-[30px] max-[450]:h-[30px]"></div>
      <Skills/>
    </div>
  );
};

// import { motion } from "framer-motion";
// import { useEffect, useRef } from "react";
// import { useInView } from "react-intersection-observer";

// const [ref, inView] = useInView();
// const hasAnimatedRef = useRef(false);

// useEffect(() => {
//   if (inView && !hasAnimatedRef.current) {
//     // Set hasAnimatedRef to true to prevent animation from repeating
//     hasAnimatedRef.current = true;
//   }
// }, [inView]);
// <motion.div
// ref={ref}
// initial={{ y: 50, scale:0.5, opacity: 0 }}
// animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
// transition={{ duration: 1, delay: 0.2 }}
//  className="h-[100vh] w-[100%] bg-slate-700">

// </motion.div>
