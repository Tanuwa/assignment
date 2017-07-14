import React from "react";
import ReactDOM from "react-dom";

//import the components
import TodoContainer from "./containers/todo-container.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <TodoContainer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));


