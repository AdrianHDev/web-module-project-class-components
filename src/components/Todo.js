import React from "react";
class Todo extends React.Component {
  render() {
    return (
      <div
        style={{
          textDecoration: this.props.task.completed ? "line-through" : "none",
          background: "red",
          margin: "10px 0 0 0",
          padding: "10px 3px",
        }}
        title={this.props.task.id}
        onClick={(ev) => {
          ev.preventDefault();
          this.props.toggleTask(ev.target.title);
        }}
      >
        {this.props.task.task}
      </div>
    );
  }
}

export default Todo;
