import {useContext} from 'react'
import { MyContext } from '../MyContext'

const Change = (props) => {
  const { text } = useContext(MyContext);
    return (
        <div>
           <h1 className="bg bg-green-600 text-10xl font-bold underline rounded-md p-3">
            React Counter setup :: {text}
           </h1>
          <h1>{props.view}</h1>
        </div>
    )
}

export default Change
