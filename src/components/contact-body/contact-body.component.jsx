import { ContactBodyLeft } from "./contact-body-left.component";
import { ContactBodyRight } from "./contact-body-right.component";

export const ContactBody = () => {
  return (
    <div className="contact-main flex justify-between flex-wrap max-md:flex-col ">
      <ContactBodyLeft />

      <ContactBodyRight />
    </div>
  );
};
