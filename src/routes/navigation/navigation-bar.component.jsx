import logo from "../../assets/logo.svg";
import "./navigation-bar.styles.scss";
import { motion } from "framer-motion";
import { Fragment, useEffect, useRef } from "react";
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
    <Fragment>
      <nav className=" nav-bar flex flex-row justify-between items-center py-2 bg-[#060F19] fixed w-[100%]  z-50  [@media(max-width:520px)]:w-[100vw]">
        <div role="navigation" className="[@media(min-width:600px)]:hidden">
          <div id="menuToggle">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
              <a href="#about">
                <li>ABOUT</li>
              </a>
              <a href="#skills">
                <li>SKILLS</li>
              </a>
              <a href="#projects">
                <li>PROJECTS</li>
              </a>
              <a href="#blog">
                <li>BLOGS</li>
              </a>
              <a href="#contact">
                <li>CONTACT</li>
              </a>
            </ul>
          </div>
        </div>
        <motion.div
          className="logo w-[100%] flex px-[180px] items-center [@media(max-width:1000px)]:px-[100px] [@media(max-width:700px)]:px-[80px] [@media(max-width:600px)]:px-[10px] [@media(max-width:520px)]:relative [@media(max-width:520px)]:right-0 [@media(max-width:520px)]:w-[20%] [@media(max-width:450px)]:w-[25%] [@media(max-width:600px)]:justify-end"
          ref={ref}
          initial={{ y: 50, scale: 0.5, opacity: 0 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 4.5 }}
        >
          <a href="#" className="flex items-center scr">
            <img
              className="h-[60px] [@media(max-width:1255px)]:h-[40px] "
              src={logo}
              alt="this is the logo"
            />
            <span className="text-white font-extrabold text-[25px] mx-[-8px] [@media(max-width:1255px)]:text-[18px] [@media(max-width:1255px)]:mx-[-5px]">
              man
            </span>
          </a>
        </motion.div>

        <ul className="flex text-[16px] text-[#00d9ff] font-normal space-x-6 pr-[2.75rem]  [@media(max-width:1255px)]:text-[12px]   [@media(max-width:600px)]:hidden ">
          <a href="#about">
            <li>ABOUT</li>
          </a>
          <a href="#skills">
            <li>SKILLS</li>
          </a>
          <a href="#projects">
            <li>PROJECTS</li>
          </a>
          <a href="#blog">
            <li>BLOGS</li>
          </a>
          <a href="#contact">
            <li>CONTACT</li>
          </a>
        </ul>
      </nav>
    </Fragment>
  );
};
