import React from "react";
import ReactDOM from "react-dom";
import CustomNavbar from "./navbar.js"

class App extends React.Component{
  render(){

    let myLinks =[
      "Home".
      "About",
      "Sample Post",
      "Contact"


    ];
    return(

<div> Customnavbar brand ="Ebayy" links={myLinks}</div>



)
}
}
ReactDOM.render(<App />,document, querySelector("#root"));
