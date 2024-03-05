import { Fragment } from "react";
import { BaseImages } from "../../components/base-images/base-images.component";
import { BaseData } from "../../components/base-data/base.data.component";
// import { CapaImg } from "../../components/base-images/base-img2.component";
import Top from '../../assets/top.png'
import { motion } from "framer-motion";
export const Base = () => {
  return (
    <Fragment>
      <BaseImages />
      <BaseData />
      {/* <CapaImg/> */}
      <a href="#">
      <motion.img
      // ref={ref}
        initial={{scale:0}}
        animate={{scale:1}}
        transition={{ duration: 0.7, delay: 5.5 }}
        className="fixed z-[9999999] bottom-[10px] right-[10px] "
        src={Top}
        alt="go-to-top"
      />
      </a>
    </Fragment>
  );
};
