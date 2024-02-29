import "./projects.styles.scss";
import Photo from "../../assets/p1.png";
import Link from "../../assets/link.png";

export const Projects = () => {
  return (
    <main className="w-full  p-[100px]">
      <h1 className="text-[60px] my-[50px] font-extrabold relative flex items-center [@media(max-width:460px)]:text-[45px]">
        <span className="text-white heading-text tracking-wider">Projects</span>
      </h1>
      <div className="border-2 border-slate-600 w-fit rounded bg-slate-900">
        <img src={Photo} />
        <section className="text-white">
          <div className="flex">
            <div className="border-2 border-slate-600 p-[5px] my-[25px] mx-[15px] rounded-md">
              Figma
            </div>
            <div className="border-2 border-slate-600 p-[5px] my-[25px] mx-[15px] rounded-md">
              React
            </div>
            <div className="border-2 border-slate-600 p-[5px] my-[25px] mx-[15px] rounded-md">
              JavaScript
            </div>
          </div>
          <p className="text-[25px] m-[15px] flex items-center">
            <span>Capstone E-Commerce Website</span>
            <a>
              <img className="h-[20px] mx-[10px]" src={Link} alt="link" />
            </a>
          </p>
        </section>
      </div>
    </main>
  );
};
