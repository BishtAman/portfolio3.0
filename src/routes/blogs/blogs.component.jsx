import "./blogs.styles.scss";
import BLOGS from "../../constants/blogs";
import BlogStock from '../../assets/blogstock.png'
import { useState, useEffect } from "react";
import { BlogCard } from "../../components/blog-card/blog-card.component";

export const Blogs = () => {
  const [loadedBlogs, setloadedBlogs] = useState([]);

  useEffect(() => { 
    const fetchSkills = async () => {
      const loadedBlogs = await Promise.all(
        BLOGS.map(async (skill) => {
          const imageModule = await skill.thumbnail;
          return { ...skill, thumbnail: imageModule.default };
        })
      );
      setloadedBlogs(loadedBlogs);
    };

    fetchSkills();
  }, []);
  return (
    <main className="w-full  p-[100px] max-sm:p-[20px] max-sm:flex max-sm:flex-col max-sm:items-center" id="blog">
      <h1 className="text-[60px] my-[50px] font-extrabold relative flex items-center w-fit max-sm:ml-[-50px] [@media(max-width:460px)]:text-[45px]">
        <span className="text-white heading-text tracking-wider">Blogs</span>
        <img
          src={BlogStock}
          alt="floating"
          className="floating-astro absolute right-[-88px] mt-[-15px] h-[90px] "
          // [@media(max-width:460px)]:left-[150px]
        />
      </h1>

      <div className="flex justify-between flex-wrap  ">
        {loadedBlogs.map(({ thumbnail, name, date, link }) => (
          <BlogCard
            key={name}
            thumbnail={thumbnail}
            name={name}
            date={date}
            link={link}
          />
        ))}
      </div>
    </main>
  );
};
