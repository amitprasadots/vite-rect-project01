import {useContext} from 'react'
import { MyContext } from '../MyContext'

const Change = (props) => {
  const { text } = useContext(MyContext);
    return (
        <div>
           <h1 className="text-3xl font-bold underline">
           Hello world!
           </h1>
          <h1>{props.view}</h1>
        </div>
    )
}

export default Change
