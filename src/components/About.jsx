import React, { useState } from 'react'

const About = (props) => {
    const [rest, setReset] = useState(0);
    const sendDataToParent = () => {
        props.sendDataToParent(rest);
      };
    return (
        <div>
            <h1>This is About Components </h1>
            <button  onClick={() => {setReset(0);sendDataToParent()} }
            >
             Reset Button
            </button>
        </div>
    )
}

export default About
