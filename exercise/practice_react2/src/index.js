import React from "react";
import ReactDOM from "react-dom";
import CounterContainer from "./containers/counter-container";



class App extends React.Component{
    render(){
        return(


         <CounterContainer />
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
