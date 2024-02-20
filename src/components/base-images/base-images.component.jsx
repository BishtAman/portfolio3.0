import { Fragment } from "react";
import topLine from "../../assets/Home page top line.png";
// import bottomLine from "../../assets/home page botton line.png";
import { PlanetImage } from "../planet-image/planet-image.component";

export const BaseImages = () => {
  return (
    <Fragment>
      <img
        className=" absolute top-[-7rem] right-0 w-[63%] h-[63%] z-[-1] max-[700px]:w-[70%] max-[700px]:h-[40%]"
        src={topLine}
        alt="this is a top line"
      />

      {/* <img
        className="absolute top-[26vh] opacity-[0.6] z-[-1]"
        src={bottomLine}
        alt="this is bottom line"
      /> */}
      <PlanetImage />
    </Fragment>
  );
};
