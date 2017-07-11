import React from "react";
import ReactDOM from "react-dom";
import css from "./index.css"

//import components
import ClickerContainer from "./containers/clicker-container.js";

class App extends React.Component {
  render() {
    return (
        <center>
      <div>
        <h1>CLICKCLICK</h1>
        <ClickerContainer/>
      </div>
      </center>
    )
  }
}

ReactDOM.render(
  <App/>, document.querySelector("#root"));
