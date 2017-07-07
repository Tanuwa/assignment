import React from "react";

class Counter extends React.Component{
    render(){
        return(

<div>
    <p>{this.props.counter}</p>
    <button onClick={()=>{this.props.up()}}>Up</button>
    <button>Down</button>
    </div>


        )
    }
}







export default Counter;