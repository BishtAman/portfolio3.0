import "./about.styles.scss";
import amanbisht from '../../assets/amanbisht.pdf'
import { AboutInfo } from "../../components/about-info/about-info.component";
import { AboutImg } from "../../components/about-img/about-img.component";


export const About = () => {
  return (
    <main
      id="about"
      className="w-[100%] h-[100%] my-[80px] text-white space-y-[70px] flex items-center flex-col"
    >
      <section className="flex w-[100%]">
        <AboutInfo />
        <AboutImg num={1} />
      </section>

      <section className="flex pl-[80px] [@media(max-width:600px)]:pl-[0px] [@media(max-width:520px)]:justify-center">
        <div>
          <a href={amanbisht} download>
          <button className="slide_from_right">
            <span id="skills" className="btn">DOWNLOAD RESUME</span>
          </button>
          </a>
        </div>
      </section>

    </main>
  );
};
