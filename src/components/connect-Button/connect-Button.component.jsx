// ConnectButton component
import "./connect-Button.styles.scss";

export const ConnectButton = ({ buttonName }) => { // Destructure buttonName prop correctly
  return (
    <div className="">

      <button className="slide_from_right"><span className="btn">{buttonName}</span></button>


    </div>
  );
};
