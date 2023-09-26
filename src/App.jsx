import About from "./components/About"
import Newbranchtest from "./components/Newbranchtest"
import Change from "./components/change"
import { useState, React } from "react";
import { MyContext } from "./MyContext";

function App() {
  const [text, setText] = useState(0);
  const view = "Hello World"
  return (
    <>
      <MyContext.Provider value={{ text, setText }}>
      <h1>let change react:: </h1>
      <Change view={view} />      
      <About/>
      <Newbranchtest/> 
      </MyContext.Provider>
    </>
  )
}

export default App
