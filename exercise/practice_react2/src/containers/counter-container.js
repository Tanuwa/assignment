import React from "react";
import Counter from "../components/counter";

class CounterContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 100
        }
        this.up = this.up.bind(this);
    }
    up() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (<Counter up={this.up} counter={this.state.counter}/>)
    }
}
export default CounterContainer;