import About from "./components/About"
import Newbranchtest from "./components/Newbranchtest"
import Change from "./components/change"
import { useState, React } from "react";
import { MyContext } from "./MyContext";

function App() {
  const [text, setText] = useState(0);
  const view = "Hello World"
  const [dataFromChild, setDataFromChild] = useState(null);
  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };
  return (
    <>
      <MyContext.Provider value={{ text, setText }}>
      <h1>let change react::{dataFromChild} </h1>
      <Change view={view} newvalue={dataFromChild}/>      
      <About sendDataToParent={handleDataFromChild}/>
      <Newbranchtest  /> 
      </MyContext.Provider>
    </>
  )
}

export default App
