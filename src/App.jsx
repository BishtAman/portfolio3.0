import { Fragment } from "react";
import { Home } from "./routes/home/home.component";
// import { Cursor } from "../src/components/cursor/cursor.component";

const App = () => {
  return (
    <Fragment>
      <Home />
      {/* <Cursor /> */}
      <div className="toast-box">
        <h1 className="toast-heading">This website is currently under development</h1>
      </div>
    </Fragment>
  );
};

export default App;
