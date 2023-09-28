import About from "./components/About"
import Newbranchtest from "./components/Newbranchtest"
import Change from "./components/Change";
import { useState, React } from "react";
import { MyContext } from "./MyContext";
import './App.css'

function App() {
  const [text, setText] = useState(0);
  const view = "Hello World";
  const handleDataFromChild = () => text>0?setText(text-1):0;  

  return (
    <>
      <MyContext.Provider value={{ text, setText }}>
        <h1>let change react:: </h1>
        <Change view={view} />      
        <About sendDataToParent={handleDataFromChild}/>
        <Newbranchtest  /> 
      </MyContext.Provider>
    </>
  )
}

export default App
