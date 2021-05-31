import React from "react";
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"

const defaultTask = {
  task: "",
  id: 0,
  completed: false,
};

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = { tasks: [defaultTask] };
  }

  clearCompleteTasks = ev => {
    ev.preventDefault();
    console.log(ev);
    this.setState(state => {
      return {tasks: state.tasks.filter(task => {
        return task.completed === true;
      })}
    })
  }



  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList tasks={this.state.tasks}/>
        <TodoForm clearCompleteTasks={this.clearCompleteTasks}/>
      </div>
    );
  }
}

export default App;
