import "./blog-card.styles.scss";
import Calender from "../../assets/blogs/calender.svg";
import Visit from "../../assets/link.png";
export const BlogCard = ({ thumbnail, name, date, link }) => {
  return (
    <div className="blog-card m-[20px] w-fit max-sm:mx-auto">
      <img className="h-[65%] blog-thumbnail" src={thumbnail} alt="blog-img" />
      <div className="card-details flex flex-col h-[90px]">
        <p className="text-title mt-2">{name}</p>
        <p className="text-body flex space-x-3">
          <img className="h-[20px] opacity-[0.7]" src={Calender} />
          <span>{date}</span>
        </p>
      </div>
        <a href={link} target="_blank" rel= "noreferrer">
      <div className="card-button text-center flex space-x-3 justify-center items-center">
          <span>Visit</span>
          <img className="h-[15px] opacity-[0.5]" src={Visit} />
      </div>
        </a>
    </div>
  );
};
