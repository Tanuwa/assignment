import React from "react";
import ReactDOM from "react-dom";

 import "./index.css"
// import Forms "./components/forms"
import FormContainer from "./container/forms-container";



class App extends React.Component{
    render(){
        return(
            <div>

             
                <FormContainer />
                </div>
        )
    }
}

ReactDOM.render(<App />,document.querySelector("#root"));