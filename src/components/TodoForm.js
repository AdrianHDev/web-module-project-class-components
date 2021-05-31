import React from 'react'
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
class TodoList extends React.Component {

    render() {
        return (
            <form className="TodoForm">
                <button onClick={this.props.clearCompleteTasks}>Update State</button>
            </form>
        )
    }
}

export default TodoList;