import React from "react";
class Todo extends React.Component {
  render() {
    return (
      <div
        style={{
          textDecoration: this.props.task.completed ? "line-through" : "    ",
        }}
        title={this.props.task.id}
        onClick={ev => {
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
