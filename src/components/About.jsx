
const About = (props) => {
    const sendDataToParent = () => {
        props.sendDataToParent();
      };
    return (
        <div>
            <h1>This is About Components </h1>
            <button  onClick={() => {sendDataToParent()} }
            >
             Decrease Number
            </button>
        </div>
    )
}

export default About
