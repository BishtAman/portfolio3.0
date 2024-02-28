import Frame from "../../assets/profileFrame.png";
import Man from "../../assets/man.png";
export const AboutImg = () => {
  return (
    <section className="relative flex justify-center [@media(max-width:900px)]:w-[0%] m-auto">
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
    </section>
  );
};
