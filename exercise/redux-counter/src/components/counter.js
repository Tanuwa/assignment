	import React from "react";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.counter}</h3>
        <button onClick={this.props.handleAdd}>+</button>
        <button onClick={this.props.handleSub}>-</button>
      </div>
    )
  }
}

export default Counter;