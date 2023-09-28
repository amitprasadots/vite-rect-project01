
const About = (props) => {
    const sendDataToParent = () => {
        props.sendDataToParent();
      };
    return (
        <div>
            <h1 className="text-3xl font-bold underline">This is About Components </h1>
            <button className="bg bg-blue-600 text-center drop-shadow-2xl text-white"  onClick={() => {sendDataToParent()} }
            >
             Decrease Number
            </button>
        </div>
    )
}

export default About
