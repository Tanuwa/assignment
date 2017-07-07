import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//
import Navbar from "./navbar.js";
import Footer from "./footer.js";
import Content from "./content.js";

class App extends React.Component {
    render() {
        return ( 
            <div>
                <Navbar brand="CatBabies" links={
                [{
                text: "Upper Right",
                link: "http://google.com"
                },
                {
                text: "Blog",
                link: "http://yahoo.com"
                },
                {
                text: "Titles",
                link: "http://atom.io"
                }]
                }/>
                <Content>
                    <h1 className="title"> Hello hello I don't know you say goodbye</h1> 
                    <p> I don't know everything</p>
                </Content>
                <Footer />
            </div>
        );
    }
}

ReactDOM.render( < App / > , document.querySelector("#root"));