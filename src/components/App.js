import React, { useState, useEffect } from 'react';
import UseMemoComponent from './UseMemo';
import ReactMemoComponent from './ReactMemo';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [customTask, setCustomTask] = useState('');

  // Add a new todo task "New todo"
  const addTodo = () => {
    setTodos([...todos, 'New todo']);
  };

  // Increment the counter
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  // Handle custom task input
  const handleCustomTaskInput = (e) => {
    setCustomTask(e.target.value);
  };

  // Add custom task to the list
  const submitCustomTask = () => {
    if (customTask.length > 5) {
      setTodos([...todos, customTask]);
      setCustomTask('');
    } else {
      alert('Task must be more than 5 characters');
    }
  };

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <button onClick={addTodo}>Add todo</button>
      <button onClick={incrementCounter}>Increment</button>
      <p>Counter: {counter}</p>

      <input
        type="text"
        placeholder="Enter custom task"
        value={customTask}
        onChange={handleCustomTaskInput}
      />
      <button onClick={submitCustomTask}>Submit</button>

      <h2>Tasks:</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

      <UseMemoComponent counter={counter} />
      <ReactMemoComponent todos={todos} />
    </div>
  );
};

export default App;
