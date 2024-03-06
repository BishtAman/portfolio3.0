import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactBodyRight = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_yqq9uhd", "template_67ttrmr", form.current, {
        publicKey: "LOIZneVALhATQn7zr",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
    toast("Your message has been sent!");
  };
  return (
    <div className="write-message bg-slate-200 w-[60%] px-[30px] max-lg:px-[5px] flex flex-col justify-center max-md:w-[100%] max-md:py-[40px] max-md:px-[20px] max-sm:py-[30px] max-sm:px-[6px]">
      <form ref={form} onSubmit={sendEmail} className="items-center">
        <div className="flex justify-between max-lg:flex-col items-center max-md:px-[23px]">
          <div className="form-control m-[30px] max-lg:m-[10px] bg-white relative  w-[300px] max-lg:w-[400px] max-md:w-full rounded-md h-[60px] flex  items-center">
            <input
              id="fname"
              name="user_name_one"
              className="outline-none w-full p-[3px] border-b-2 border-gray-400 "
              required=" "
              placeholder="First name"
            />
          </div>
          <div className="form-control m-[30px] max-lg:m-[10px] bg-white relative  w-[300px] max-lg:w-[400px] max-md:w-full rounded-md h-[60px] flex  items-center">
            <input
              id="lname"
              name="user_name_two"
              className="outline-none w-full p-[3px] border-b-2 border-gray-400 "
              required=" "
              placeholder="Second name"
            />
          </div>
        </div>

        <div className="flex justify-between max-lg:flex-col items-center max-md:px-[23px]">
          <div className="form-control m-[30px] max-lg:m-[10px]  bg-white relative  w-[300px] max-lg:w-[400px] max-md:w-full rounded-md h-[60px] flex  items-center">
            <input
              id="email"
              name="user_email"
              className="outline-none w-full p-[3px] border-b-2 border-gray-400 "
              required=" "
              placeholder="Email"
              type="email"
            />
          </div>
          <div className="form-control m-[30px] max-lg:m-[10px]   bg-white relative  w-[300px] max-lg:w-[400px] max-md:w-full rounded-md h-[60px] flex  items-center">
            <input
              id="phone"
              name="user_phone"
              type="text"
              className="outline-none w-full p-[3px] border-b-2 border-gray-400 "
              placeholder="Contact (optional)"
            />
          </div>
        </div>
        <div className="flex justify-between my-[25px] max-lg:flex-col items-center px-[25px]">
          <input
            name="message"
            className=" outline-none  w-full rounded-md p-[16px] border-b-2 border-gray-400 max-md:h-[100px] "
            required=" "
            placeholder="Your Message"
          />
        </div>

        <div className="max-md:flex justify-center">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="form-submit-button mx-[30px]"
            type="submit"
            value="Send"
          >
            <span className="form-submit-button-span ">Send Message</span>
          </motion.button>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};
