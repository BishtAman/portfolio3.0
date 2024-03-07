import "./blog-card.styles.scss";
import Calender from "../../assets/calendar.png";
import Read from "../../assets/read.png";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export const BlogCard = ({
  thumbnail,
  name,
  subtitle,
  date,
  link,
  read,
  tag,
}) => {

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
      initial={{ y: 50,  opacity: 0 }}
      animate={inView ? { opacity: 1,  y: 0 } : {}}
      transition={{ duration: 0.7 }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.9 }}
      className="blog-card  text-white rounded-lg flex flex-col px-[20px] py-[10px] w-[630px] my-[14px] max-md:w-[490px] max-sm:w-[380px] max-sm:py-[8px] max-sm:px-[10px]"
    >
      <a href={link} target="_blank" rel="noreferrer">
        <div className="flex">
          <section className="blog-details w-[65%] flex flex-col justify-evenly">
            <h1 className="blog-title font-bold text-[20px] max-md:text-[17px] max-sm:text-[15px]">
              {name}
            </h1>
            <p className="blog-subtitle font-extralight text-[14px] max-md:text-[11px]  max-sm:text-[9px]">
              {subtitle}
            </p>
          </section>

          <section className="blog-img  w-[35%]">
            <img src={thumbnail} className=" rounded-2xl" />
          </section>
        </div>

        <div
          className="flex justify-between items-center
      m-[8px]"
        >
          <section className="flex font-extralight">
            <span className="flex justify-between items-center">
              <img
                src={Calender}
                className="invert h-[15px] mr-[5px] opacity-[0.3] max-md:h-[12px] max-sm:h-[9px]"
              />
              <span className="text-[13px] max-md:text-[11px] max-sm:text-[8px]">
                {date}
              </span>
              &nbsp; &#183;
            </span>
            &nbsp;
            <span className="flex justify-between items-center">
              <img
                src={Read}
                className="invert h-[15px] mr-[5px] opacity-[0.3] max-md:h-[12px] max-sm:h-[9px]"
              />
              <span className="text-[13px]  max-md:text-[11px] max-sm:text-[8px]">
                {" "}
                {read}
              </span>
            </span>
          </section>

          <section className="bg-slate-600 text-gray-300 py-[6px] px-[12px] rounded-full opacity-[0.8] text-[13px] max-md:text-[10px]  max-sm:text-[8px]">
            {tag}
          </section>
        </div>
      </a>
    </motion.div>
  );
};
