import logo from "../../assets/logo.svg";
import "./navigation-bar.styles.scss";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export const Navigation = () => {
  const [ref, inView] = useInView();
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimatedRef.current) {
      // Set hasAnimatedRef to true to prevent animation from repeating
      hasAnimatedRef.current = true;
    }
  }, [inView]);
  return (
    <motion.nav
    
      className="nav-bar flex justify-between items-center py-2 bg-[#060F19] fixed w-[100%] z-50 "
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1} : {}}
      transition={{ duration: 3, delay: 4.5, }}
    >
      <div className="logo  w-[100%] flex px-[180px] items-center">
        <a href="#" className="flex items-center scr">
          <img className="h-[60px]" src={logo} alt="this is the logo" />
          <span className="text-white font-extrabold text-[35px] mx-[-8px]">
            man
          </span>
        </a>
      </div>
      <ul className="flex text-[16px] text-[#00d9ff] font-normal space-x-6 pr-[2.75rem]">
        <a>
          <li>ABOUT</li>
        </a>
        <a>
          <li>SKILLS</li>
        </a>
        <a>
          <li>PROJECTS</li>
        </a>
        <a>
          <li>OTHERS</li>
        </a>
        <a>
          <li>CONTACT</li>
        </a>
      </ul>
    </motion.nav>
  );
};
