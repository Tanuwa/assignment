import React from "react";
import ReactDOM from "react-dom";

import Navbar from "./navbar.js";
import Footer from "./footer.js";
import Content from "./content.js"
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div>w
        <Navbar
          brand="CatBabes"
          links={[
          {
            text: "Upper Right",
            link: "google.com"
          }, {
            text: "Blog",
            link: "http://yahoo.com"
          }, {
            text: "Title",
            link: "http://atom.io"
          }
        ]}/>
        <Content>
          <h1>something</h1>
        </Content>

        <Footer/>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>, document.querySelector("#root"));
