import "./contact.styles.scss";

import { ContactHead } from "../../components/contact-head/contact-head.component";
import { ContactBody } from "../../components/contact-body/contact-body.component";
// import { useEffect, useRef } from "react";
// import { useInView } from "react-intersection-observer";

export const Contact = () => {
  // const [ref, inView] = useInView();
  // const hasAnimatedRef = useRef(false);
  // useEffect(() => {
  //   if (inView && !hasAnimatedRef.current) {
  //     // Set hasAnimatedRef to true to prevent animation from repeating
  //     hasAnimatedRef.current = true;
  //   }
  // }, [inView]);
  return (
    <main
      className="w-full  p-[100px] max-sm:p-[20px] max-sm:flex max-sm:flex-col "
      id="contact"
    >
      <ContactHead />

      <ContactBody />
    </main>
  );
};
