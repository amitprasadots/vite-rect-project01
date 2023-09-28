
const About = (props) => {
    const sendDataToParent = () => {
        props.sendDataToParent();
      };
    return (
        <div>
            <h1 className="text-3xl font-bold underline">This is About Components </h1>
            <button  onClick={() => {sendDataToParent()} }
            >
             Decrease Number
            </button>
        </div>
    )
}

export default About
