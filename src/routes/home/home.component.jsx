import { Loading } from "../../components/loading-text/loading-text.component";
import { Curtains } from "../../components/opening-curtains/opening-curtains.component";
import { Base } from "../base/base.component";
import { Navigation } from "../navigation/navigation-bar.component";
import "./home.styles.scss";
export const Home = () => {
  return (
    <div className="App">
    
      <Loading />
      <Curtains />
      <Navigation />
      <Base />
      <div className="h-[100vh] w-[100%] bg-slate-700">

      </div>  
      
    </div>
  );
};
