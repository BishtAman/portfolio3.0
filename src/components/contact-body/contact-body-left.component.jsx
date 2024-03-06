import Mail from "../../assets/contact/mail.png";
import Call from "../../assets/contact/call.png";
import Location from "../../assets/contact/location.png";

export const ContactBodyLeft = () => {
  return (
    <div className="personal-details  bg-slate-900 text-white flex flex-col justify-between  w-[40%] p-[40px] max-lg:px-[20px] max-md:p-[40px] max-md:w-[100%] max-md:h-[60vh]">
      <h1 className="text-[30px] max-lg:text-[23px] font-semibold max-md:text-[40px] max-md:text-center  max-sm:text-[35px]">
        Contact Information
      </h1>

      <div className="space-y-5 tracking-wider font-extralight">
        <div className="flex space-x-7 max-lg:space-x-4 max-md:space-x-7 ">
          <img
            src={Call}
            className="h-[20px] max-lg:h-[15px] max-md:h-[24px] max-sm:h-[20px]"
            alt="Call"
          />
          <p className="max-lg:text-[14px] max-md:text-[17px] max-sm:text-[14px]">
            +91 8439498169
          </p>
        </div>

        <div className="flex space-x-7 max-lg:space-x-4 max-md:space-x-7">
          <img
            src={Mail}
            className="h-[20px] max-lg:h-[15px] max-md:h-[24px] max-sm:h-[20px]"
            alt="Mail"
          />
          <p className="max-lg:text-[14px] max-md:text-[17px] max-sm:text-[14px]">
            uk.amanbisht@gmail.com
          </p>
        </div>

        <div className="flex space-x-7 max-lg:space-x-4 max-md:space-x-7">
          <img
            src={Location}
            className="h-[20px] max-lg:h-[15px] max-md:h-[24px] max-sm:h-[20px]"
            alt="Location"
          />
          <p className="max-lg:text-[14px] max-md:text-[17px] max-sm:text-[14px]">
            Haridwar Uttarakhand 249408 India
          </p>
        </div>
      </div>

      <div></div>
    </div>
  );
};
