import React from "react";
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
class TodoList extends React.Component {
  render() {
    return (
      <form className="TodoForm">
        <input type='text' value={this.props.formField} onChange={this.props.handleFormChange} /><button onClick={this.props.addTaskToList}>Add!</button><br/><br/>
        <button onClick={this.props.clearCompleteTasks}>Clear Completed Tasks!</button>
      </form>
    );
  }
}

export default TodoList;
