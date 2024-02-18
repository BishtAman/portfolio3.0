import { Fragment, useRef } from "react";
import planet from "../../assets/home page planet.png";
import { motion } from "framer-motion";
import './planet-image.styles.scss'
export const PlanetImage = () => {
  const constraintsRef = useRef(null);
  return (
    <Fragment>
      <motion.div
        className="drag-area absolute top-[29vh] left-[-6rem]"
        ref={constraintsRef}
      />
      <motion.img
        drag
        dragConstraints={constraintsRef}
        className="dragged-object absolute top-[25vh] left-[-6rem]"
        src={planet}
        alt="this is planet"
      />
    </Fragment>
  );
};
