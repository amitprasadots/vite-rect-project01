import { useContext , React } from 'react'
import { MyContext } from '../MyContext'

const Change = (props) => {
  let newvalue = props.newvalue;
  console.log(newvalue);
  const { text,setText } = useContext(MyContext);
  // if(newvalue===0){
  //   setText(newvalue);
  //   newvalue=null
  // }  
    return (
        <div>
          <h1>Chnage Components Used !! {text}</h1>  
          <h2>{props.view}</h2>
        </div>
    )
}

export default Change
