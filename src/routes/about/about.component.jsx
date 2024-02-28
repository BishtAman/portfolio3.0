import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import floating from '../../assets/floating.png'
import "./about.styles.scss";
import Frame from "../../assets/profileFrame.png";
import Man from "../../assets/man.png";
// import { ConnectButton } from "../../components/connect-Button/connect-Button.component";
export const About = () => {
  const [ref, inView] = useInView();
  const hasAnimatedRef = useRef(false);
  useEffect(() => {
    if (inView && !hasAnimatedRef.current) {
      // Set hasAnimatedRef to true to prevent animation from repeating
      hasAnimatedRef.current = true;
    }
  }, [inView]);

  return (
    <main id="about" className="w-[100%] h-[100vh] my-[40px] text-white space-y-[70px] flex items-center flex-col">

      <section className="flex w-[100%]">

        <section className="flex flex-col justify-between w-[50%] pl-[70px] space-y-8 [@media(max-width:900px)]:w-[100%] [@media(max-width:900px)]:px-[30px]">
          <motion.h1
            ref={ref}
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative flex items-center text-[60px] font-extrabold [@media(max-width:520px)]:text-[40px]"
          >
            <span className="text-white heading-text tracking-wide">ABOUT</span>
            <img
              src={floating}
              alt="floating"
              className="floating-astro absolute left-[230px] mt-[-15px] h-[88px] [@media(max-width:460px)]:left-[150px]"
            />
          </motion.h1>
          <motion.p
            ref={ref}
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[18px] font-light text-justify tracking-[2px] text-[#a5f2ff] [@media(max-width:460px)]:text-[15px]"
          >
            Hey Everyone, I&#39;m Aman Bisht, a self-taught frontend developer
            diving deep into the world of React. With a fervent passion for web3
            technology, I&#39;m relentlessly exploring new horizons in web
            development. <br /> <br /> My journey is marked by relentless
            exploration of these new horizons in web development, always eager
            to learn, adapt, and innovate. But what truly fuels my drive is the
            desire to help others. Whether it&#39;s through sharing my
            knowledge, assisting fellow developers, or offering insights into
            the intricacies of web development, I find great joy in helping the
            community grow.{" "}
          </motion.p>
        </section>

        <motion.section className="relative flex justify-center [@media(max-width:900px)]:w-[0%] m-auto">
          <img
            src={Frame}
            alt="this is frame"
            className="h-[400px]  [@media(max-width:1170px)]:h-[350px]  [@media(max-width:900px)]:hidden "
          />
          <img
            src={Man}
            alt="this is man"
            className="h-[400px] absolute top-[-30px] left-[6%] [@media(max-width:1170px)]:h-[350px] [@media(max-width:900px)]:hidden"
          />
        </motion.section>
        
      </section>

      <section className="flex pl-[80px] [@media(max-width:600px)]:pl-[0px] [@media(max-width:520px)]:justify-center">
        {/* <ConnectButton buttonName="Download cv" /> */}
        <div
          // ref={ref}
          // initial={{ x: -50, opacity: 0 }}
          // animate={inView ? { opacity: 1, x: 0 } : {}}
          // transition={{ duration: 0.7, delay: 0.2 }}
        >
          <button className="slide_from_right">
            <span className="btn">DOWNLOAD CV</span>
          </button>
        </div>
        {/* <div></div> */}
      </section>
    </main>
  );
};
