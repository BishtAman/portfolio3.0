import Rocket from "../../assets/rocket.png";
import './skills-head.styles.scss' 
export const SkillsHead = () => {
  return (
    <h1 className="text-[60px] font-extrabold relative flex items-center [@media(max-width:520px)]:text-[50px] [@media(max-width:460px)]:text-[40px]">
      <span className="text-white heading-text tracking-wider">
        Skillset
      </span>

      <div className="rocket-img mx-[20px] -rotate-12 -space-y-2">
        <img src={Rocket} alt="rocket image" className="h-[50px]" />
        <div className="fireplace">
          <div className="blur">
            <div className="fireplace__flame_big"></div>
          </div>
        </div>
      </div>
    </h1>
  );
};
