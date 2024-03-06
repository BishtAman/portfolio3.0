export const ContactHead = () => {
  return (
    <h1 className="my-[50px] flex flex-col items-center space-y-4 font-extrabold relative  [@media(max-width:460px)]:text-[45px]  max-sm:text-center ">
      <span className="text-white text-[60px] max-sm:text-[35px] heading-text tracking-wider">
        Get in Touch
      </span>
      <p className="text-white text-[20px]  font-light tracking-wider max-md:text-[15px]  max-sm:text-[13px]">
        Wanna reach me out? Just drop me a message!
      </p>
      {/* <img
          src={BlogStock}
          alt="floating"
          className="floating-astro absolute right-[-88px] mt-[-15px] h-[90px] "
          // [@media(max-width:460px)]:left-[150px]
        /> */}
    </h1>
  );
};
