import About from "./components/About"
import Newbranchtest from "./components/Newbranchtest"
import Change from "./components/change"

function App() {

  function hello(){
    return "Hello World..."
  }
  return (
    <>
      <h1>let change react:: {hello()}</h1>
      <Change/>      
      <About/>
      <Newbranchtest/> 
    </>
  )
}

export default App
