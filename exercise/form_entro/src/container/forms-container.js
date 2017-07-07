import React from "react";
import Form from "../components/forms.js";
import autoBind from "react-autobind";
class FormContainer extends React.Component{
constructor(){
    super();
    this.state={
        names: ["Jordan","Mike","Mike"],
        nameValue:""

        }
    autoBind(this);
}

input(event){
this.setState({
    ...this.state,
    nameValue:event.target.value
});
    



}
submit(){
this.setState({
    ...this.state,
    names:[...this.state.names, this.state.nameValue],
    nameValue:""
});
}
remove(index){
    let oldName=[...this.state.names];
    oldName.splice(index,1);
this.setState({
    ...this.state,
    names:oldNames
});

}
    render(){
        return(
      <div class="container">      
<center>
    <Form nameValue={this.state.nameValue} handleInput={this.input} brand="Enter Your Name Please If You Hate Atom" 
    
    names={this.state.names} submitHandler={this.submit}></Form>
    
 </center>
 </div>
        );
    }
}

export default FormContainer;