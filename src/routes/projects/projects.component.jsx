import "./projects.styles.scss";

import { ProjectCard } from "../../components/project-card/project-card.component";
import PROJECTS from "../../constants/projects";
import { useState, useEffect } from "react";
import ProjectStock from '../../assets/projectsStock.png'
export const Projects = () => {
  const [loadedProjects, setloadedProjects] = useState([]);

  useEffect(() => { 
    const fetchSkills = async () => {
      const loadedProjects = await Promise.all(
        PROJECTS.map(async (skill) => {
          const imageModule = await skill.imageURL;
          return { ...skill, imageURL: imageModule.default };
        })
      );
      setloadedProjects(loadedProjects);
    };

    fetchSkills();
  }, []);
  return (
    <main className="w-full  p-[100px] max-sm:p-[20px] max-sm:flex max-sm:flex-col max-sm:items-center" id="projects">
      <h1 className="text-[60px] my-[50px] font-extrabold relative flex items-center w-fit max-sm:ml-[-50px] [@media(max-width:460px)]:text-[45px]">
        <span className="text-white heading-text tracking-wider">Projects</span>
        <img
          src={ProjectStock}
          alt="floating"
          className="floating-astro absolute right-[-83px] mt-[-15px] h-[90px] "
          // [@media(max-width:460px)]:left-[150px]
        />
      </h1>

      <div className="flex justify-between flex-wrap ">
        {loadedProjects.map(({ name, imageURL, description, link, tech }) => (
          <ProjectCard
            key={name}
            name={name}
            imageURL={imageURL}
            description={description}
            link={link}
            tech={tech}
          />
        ))}
      </div>
    </main>
  );
};
