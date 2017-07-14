import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/";
//import components
import Counter from "../components/counter.js";

class CounterContainer extends React.Component {
  render() {
    return (
      (<Counter handleAdd={this.props.makeAddAction} counter={this.props.counter}/>)
    )
  }
}


const mapStateToProps=(state)=>{
return state;
}


const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators(actionCreators,dispatch);
}


export default connect ()(CounterContainer);

		
		