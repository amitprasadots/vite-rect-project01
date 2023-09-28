import { useContext} from 'react'
import { MyContext } from '../MyContext'

const Newbranchtest = (props) => {   
    const { setText } = useContext(MyContext);
    
    return (
        <div>
            <h1>This is  New branch test::  </h1>
            <button className='bg bg-blue-600 text-center drop-shadow-2xl text-white' onClick={() => setText(text=>text+1)}>
             Add Number
            </button>           
        </div>
    )
}

export default Newbranchtest
