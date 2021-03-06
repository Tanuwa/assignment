import React from "react";

class Form extends React.Component{
    genNames(){
        this.nameListItem = this.props.names.map((item,index) => {
            return(
            <li  onClick={()=>{
                this.props.handleRemove(index)
            }}
                key={item + index}>
                {item}
            </li>
            );
        });

    }
    
    render(){
     this.genNames();  
return(
<div >
    <h1>{this.props.brand}</h1>
    <input value={this.props.nameValue} onChange={this.props.handleInput}></input>
    <button className="btn btn-danger" onClick={ ()=>{
        this.props.submitHandler()
    }}>Submit</button>
    <ul key="this.name">
        {this.nameListItem}
    </ul>
    
</div>
        );
    }
}

export default Form;