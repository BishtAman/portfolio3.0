import topLine from "../../assets/Home page top line.png";
// import bottomLine from "../../assets/home page botton line.png";
import { PlanetImage } from "../planet-image/planet-image.component";

export const BaseImages = () => {
  return (
    <div className="">
      <img
        className=" absolute top-[-18rem] right-[-7rem] w-[63%] h-[63%] z-[-1]"
        src={topLine}
        alt="this is a top line"
      />

      {/* <img
        className="absolute top-[26vh] opacity-[0.6] z-[-1]"
        src={bottomLine}
        alt="this is bottom line"
      /> */}
      <PlanetImage />
    </div>
  );
};
