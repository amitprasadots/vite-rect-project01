import { useContext , React } from 'react'
import { MyContext } from '../MyContext'

const Change = (props) => {
  const { text } = useContext(MyContext);
    return (
        <div>
          <h1>Chnage Components Used !! {text}</h1>  
        </div>
    )
}

export default Change
