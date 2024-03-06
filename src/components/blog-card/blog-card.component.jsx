import "./blog-card.styles.scss";
import Calender from "../../assets/blogs/calender.svg";
import Visit from "../../assets/link.png";
export const BlogCard = ({ thumbnail, name, date, link }) => {
  return (
    <div className="blog-card m-[20px] max-sm:mx-auto h-[265px] w-fit md:h-[280px] [@media(max-width:400px)]:h-[215px]">
      <img className="h-[182px] blog-thumbnail [@media(max-width:400px)]:h-[135px]" src={thumbnail} alt="blog-img" />
      <div className="card-details flex flex-col h-[90px]">
        <p className="text-title mt-2 text-[25px] max-md:text-[20px] [@media(max-width:400px)]:text-[16px]">{name}</p>
        <p className="text-body flex space-x-3 text-[18px] max-md:text-[15px] [@media(max-width:400px)]:text-[11px]">
          <img
            className="h-[20px] max-md:h-[15px] opacity-[0.7] [@media(max-width:400px)]:h-[13px]"
            src={Calender}
          />
          <span>{date}</span>
        </p>
      </div>
      <div className="card-button text-center flex space-x-3 justify-center items-center text-[20px] [@media(max-width:400px)]:text-[15px] tracking-widest">
        <a href={link} target="_blank" rel="noreferrer" className="flex space-x-3 justify-center items-center">
          <span>Visit</span>
          <img className="h-[15px] opacity-[0.5] [@media(max-width:400px)]:h-[12px]" src={Visit} />
        </a>
      </div>
    </div>
  );
};
