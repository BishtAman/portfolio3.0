import Frame from "../../assets/profileFrame.png";
import Man from "../../assets/man.png";
import { motion } from "framer-motion";
 

export const AboutImg = ({num}) => {

  return (
    (num===1)?
      (<section className="relative flex justify-center [@media(max-width:900px)]:w-[0%] m-auto">
      <img
        src={Frame}
        alt="this is frame"
        className="h-[400px]  [@media(max-width:1170px)]:h-[350px]  [@media(max-width:900px)]:hidden "
      />
      <motion.img
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.3 },
        }}
        src={Man}
        alt="this is man"
        className="h-[400px] absolute top-[-40px] left-[20%] [@media(max-width:1170px)]:h-[350px] [@media(max-width:900px)]:hidden"
      />
    </section>)
    :
    (<section className="relative flex justify-center [@media(min-width:900px)]:w-[0%] mx-auto ">
      <img
        src={Frame}
        alt="this is frame"
        className="h-[300px] my-10 opacity-[0.3]  [@media(max-width:1170px)]:h-[290px]  [@media(min-width:900px)]:hidden "
      />
      <motion.img
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.3 },
        }}
        src={Man}
        alt="this is man"
        className="h-[300px] my-10 absolute top-[13px] left-[20%] [@media(max-width:1170px)]:h-[260px] [@media(min-width:900px)]:hidden"
      />
    </section>)
    
  );
};
