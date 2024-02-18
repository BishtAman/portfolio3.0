import { Fragment } from "react"
import { Home } from "./routes/home/home.component"
import { Cursor } from "../src/components/cursor/cursor.component";


const App = () => {


  return (
    <Fragment>
      <Home/> 
      <Cursor />
    </Fragment>
  )
}

export default App
