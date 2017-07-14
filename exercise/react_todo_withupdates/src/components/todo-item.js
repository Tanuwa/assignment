import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <div>
        <button onClick={()=> {this.props.handleRemove(this.props.index)}}>X</button>
        <p>{this.props.text}</p>
      <input value={this.props.nameValue} onChange={(event)=> {
          this.props.handleUpdateItem(this.props.index, event);
        }}/>
      <button onClick={() => {
          this.props.handleSave(this.props.index);
        }}>Save</button>
      </div>
    )
  }
}

export default TodoItem;