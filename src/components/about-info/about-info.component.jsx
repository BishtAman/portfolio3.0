import floating from "../../assets/floating.png";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { AboutImg } from "../about-img/about-img.component";

export const AboutInfo = () => {
  const [ref, inView] = useInView();
  const hasAnimatedRef = useRef(false);
  useEffect(() => {
    if (inView && !hasAnimatedRef.current) {
      // Set hasAnimatedRef to true to prevent animation from repeating
      hasAnimatedRef.current = true;
    }
  }, [inView]);
  return (
    <section className="flex flex-col justify-between w-[50%] pl-[70px] space-y-8 [@media(max-width:900px)]:w-[100%] [@media(max-width:900px)]:px-[30px]">
      <motion.h1
        ref={ref}
        initial={{ x: -50, opacity: 0 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
        className=" flex items-center justify-center  text-[60px] font-extrabold [@media(max-width:520px)]:text-[40px]"
      >
        <span className="relative flex items-center text-white heading-text ml-[-50px] tracking-wide">ABOUT
        
        <img
          src={floating} 
          alt="floating"
          className="floating-astro absolute right-[-80px] mt-[-15px] h-[88px] [@media(max-width:460px)]:left-[150px]"
        />
        </span>
      </motion.h1>
      <AboutImg num={2} />
      <motion.p
        ref={ref}
        initial={{ x: -50, opacity: 0 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-[18px] font-light text-justify tracking-[2px] text-[#36e1ff] [@media(max-width:460px)]:text-[15px]"
      >
        Hey Everyone, I&#39;m  <span className="aboutInfo-span">Aman Bisht</span>, a self-taught <span className="aboutInfo-span">frontend developer</span> {" "}
        diving deep into the world of <span className="aboutInfo-span">React</span>. With a fervent passion for <span className="aboutInfo-span"> web3
        technology</span>, I&#39;m relentlessly exploring new horizons in web
        development. <br /> <br /> My journey is marked by relentless
        exploration of these new horizons in web development, always eager to <span className="aboutInfo-span">learn, adapt, and innovate</span>. But what truly fuels my drive is the desire
        to help others. Whether it&#39;s through sharing my knowledge, assisting
        fellow developers, or offering insights into the intricacies of web
        development, I find great joy in  <span className="aboutInfo-span">helping the community grow</span>.{" "}
      </motion.p>
    </section>
  );
};
