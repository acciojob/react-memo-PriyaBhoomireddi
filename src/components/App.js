import React, { Component } from 'react';
import UseMemoComponent from './UseMemo';
import ReactMemoComponent from './ReactMemo';

class App extends Component {
    state = {
        counter: 0,
        todos: ['Initial todo']
    };

    handleAddTodo = () => {
        this.setState((prevState) => ({
            todos: [...prevState.todos, 'New todo']
        }));
    };

    handleIncrement = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }));
    };

    render() {
        return (
            <div>
                <h1>React Memo Assignment</h1>
                <button id="add-todo-btn" onClick={this.handleAddTodo}>Add Todo</button>
                <button id="incr-cnt" onClick={this.handleIncrement}>Increment</button>
                <ul>
                    {this.state.todos.map((todo, index) => (
                        <li key={index}>{todo}</li>
                    ))}
                </ul>
                <p>Counter: {this.state.counter}</p>

                <UseMemoComponent />
                <ReactMemoComponent />
            </div>
        );
    }
}

export default App;
