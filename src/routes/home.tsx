
import { Component } from "solid-js";
const Home: Component = () => {
    return (
        <div style={{ "text-align": "center", padding : "20px"}}>
            <h2> Welcome to the home page </h2>
            <p style = {{"color": "darkblue"}}>
                This is the home page of our application. Here you can find various features and  <br/>
            information about our services. Feel free to explore and navigate through the different sections of our website. We hope you have a great experience!
            </p>
            <button style={{"background-color": "blue", "color": "white", "padding": "10px 20px", "border": "none", "border-radius": "5px", "cursor": "pointer"}}>
                Get started
            </button>
        </div>
    )
}
export default Home;