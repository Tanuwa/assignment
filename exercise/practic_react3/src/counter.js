import React from "react";

class Counter extends React.Component{

    constructor(){
        super();
        this.state={
            counter:10
        };
        
    }
    up(){
        this.setState({
            counter:this.state.counter + 1
        });
    }
    down(){
        this.setState({
            counter:this.state.counter - 1
        });
    }
    render(){
        return(
<div> 
<h3>{this.state.counter}</h3>
<button onClick={()=>{this.up()}}>Up</button>
<button onClick={()=>{this.down()}}>Down</button>


 </div> 
        )
    }
}
export default Counter;