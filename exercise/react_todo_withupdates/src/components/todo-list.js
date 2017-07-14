import React from "react";

//import components
import TodoItem from "./todo-item.js";

class TodoList extends React.Component {
  genTodoItems() {
    //return array of TodoItem's
    return this.props.items.map((item, index) => {
      return (<TodoItem handleSave={this.props.handleSave} nameValue={item.value} handleUpdateItem={this.props.handleUpdate} index={index} handleRemove={this.props.handleRemove} key={item.name + index} text={item.name}/>);
    });
  }
  render() {
    return (
      <div>
        {this.genTodoItems()}
      </div>
    )
  }
}

export default TodoList;