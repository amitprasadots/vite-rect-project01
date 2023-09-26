import { useContext , React } from 'react'
import { MyContext } from '../MyContext'


const Newbranchtest = () => {
   
    const { text, setText } = useContext(MyContext);
    return (
        <div>
            <h1>This is  New branch test::  </h1>
            <button onClick={() => setText(text=>text+1)}>
             Click me
            </button>
        </div>
    )
}

export default Newbranchtest
