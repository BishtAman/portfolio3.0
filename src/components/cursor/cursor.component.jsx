import { useRef, useEffect, Fragment } from "react";

export const Cursor = () => {
  const cursorRef = useRef(null);
  const cursor2Ref = useRef(null);

  function handleMouseMove(e) {
    if (cursorRef.current) {
      cursorRef.current.style.left = e.pageX + "px";
      cursorRef.current.style.top = e.pageY + "px";
    }
    setTimeout(() => {
        // cursor2Ref.current.style.transition = "left 0.1s, top 0.1s";
        cursor2Ref.current.style.left = e.pageX + 15 + "px";
        cursor2Ref.current.style.top = e.pageY + 20 + "px";
      }, 100);
  }
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return <Fragment>
    <div className="cursor" ref={cursorRef}></div>
    <div className="cursor2" ref={cursor2Ref}></div>
  </Fragment>;
};
