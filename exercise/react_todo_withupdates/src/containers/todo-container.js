import React from "react";
import autoBind from "react-autobind";

//import components
import TodoList from "../components/todo-list.js";
class TodoContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          name: "Buy Milk",
          value: ""
        }, {
          name: "Get gas",
          value: ""
        }, {
          name: "Pickup Kids",
          value: ""
        }
      ],
      inputValue: ""
    }
    autoBind(this);
  }
  click() {
    this.setState({
      ...this.state,
      items: [
        ...this.state.items,
        {
           name: this.state.inputValue,
           value: ""
        }

      ],
      inputValue: ""
    });
  }
  saveUpdate(index) {
    let items = [...this.state.items];
    items[index].name = items[index].value;
    items[index].value = "";
    this.setState({
      ...this.state,
      items: items
    });
  }
  updateValue(event) {
    this.setState({
      ...this.state,
      inputValue: event.target.value
    });
  }
  updateNameOfItem(index, event) {
    let items = [...this.state.items];
    items[index].value = event.target.value;
    this.setState({
      ...this.state,
      items: items
    });
  }
  remove(index) {
    let items = [...this.state.items];
    items.splice(index, 1);
    this.setState({
      ...this.state,
      items: items
    });
  }
  keyPress(event) {
    if (event.key === "Enter") {
      this.click();
    }
  }
  render() {
    return (
      <div>
        <input onKeyPress={this.keyPress} value={this.state.inputValue} onChange={(event) => {
          this.updateValue(event)
        }}/>
        <button onClick={() => {
          this.click()
        }}>Add</button>
      <TodoList handleSave={this.saveUpdate} handleUpdate={this.updateNameOfItem} handleRemove={this.remove} items={this.state.items}/>
      </div>
    )
  }
}

export default TodoContainer;




