import { useState, useEffect } from "react";
import { SkillButton } from "../../components/skills-button/skills-button.component";
import { SkillsHead } from "../../components/skills-head/skills-head.component";
import SKILLS from "../../constants/skills";
import "./skills.styles.scss";

export const Skills = () => {
  const [loadedSkills, setLoadedSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const loadedSkills = await Promise.all(
        SKILLS.map(async (skill) => {
          const imageModule = await skill.imageURL;
          return { ...skill, imageURL: imageModule.default };
        })
      );
      setLoadedSkills(loadedSkills);
    };

    fetchSkills();
  }, []);

  return (
    <div id="skills" className=" w-full h-full px-10  flex items-center flex-col">
      <SkillsHead />
      <div className="flex flex-wrap justify-center mt-[70px] max-[450px]:mt-[40px]">
        {loadedSkills.map(({ name, imageURL, color, className }) => (
          <SkillButton
            key={name}
            name={name}
            imageURL={imageURL}
            color={color}
            className={className}
          />
        ))}
      </div>
    </div>
  );
};
