import About from "./components/About"
import Newbranchtest from "./components/Newbranchtest"
import Change from "./components/change"

function App() {

 const view = "Hello World"
  return (
    <>
      <h1>let change react:: </h1>
      <Change view={view} />      
      <About/>
      <Newbranchtest/> 
    </>
  )
}

export default App
