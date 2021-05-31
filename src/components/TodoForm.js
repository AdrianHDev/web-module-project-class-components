import React from "react";
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
class TodoList extends React.Component {
  render() {
    return (
      <form
        style={{
          margin: "3px 0 0 0",
        }}
        className="TodoForm"
      >
        <input
          type="text"
          style={{ width: "25%" }}
          value={this.props.formField}
          onChange={this.props.handleFormChange}
        />
        <button style={{ width: "4.5%" }} onClick={this.props.addTaskToList}>
          Add!
        </button>
        <br />
        <br />
        <button
          style={{
            color: "royalpurple",
            minWidth: "30%",
          }}
          onClick={this.props.clearCompleteTasks}
        >
          Clear Completed Tasks!
        </button>
      </form>
    );
  }
}

export default TodoList;
