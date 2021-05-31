import React from "react";
import Todo from "./Todo";
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
class TodoList extends React.Component {
  render() {
    return (
      <>
        {this.props.tasks.map((task) => {
          return (
            <Todo
              toggleTask={this.props.toggleTask}
              key={task.id}
              task={task}
            />
          );
        })}
      </>
    );
  }
}

export default TodoList;
