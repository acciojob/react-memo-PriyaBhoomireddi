import React, { useState, useMemo } from 'react';
import UseMemoComponent from './UseMemo';
import ReactMemoComponent from './ReactMemo';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [counter, setCounter] = useState(0);
  const [customTask, setCustomTask] = useState('');

  // Adds a new task "New todo"
  const addNewTodo = () => {
    setTasks((prevTasks) => [...prevTasks, 'New todo']);
  };

  // Increment the counter
  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  // Handle custom task input change
  const handleInputChange = (e) => {
    setCustomTask(e.target.value);
  };

  // Add the custom task to the list if it's valid
  const addCustomTask = () => {
    if (customTask.length > 5) {
      setTasks((prevTasks) => [...prevTasks, customTask]);
      setCustomTask(''); // Clear input after submission
    } else {
      alert('Task must be more than 5 characters long');
    }
  };

  const memoizedTasks = useMemo(() => tasks, [tasks]);

  return (
    <div>
      <h1>Todo List with React Memo and useMemo</h1>
      <button onClick={addNewTodo}>Add New Todo</button>
      <button onClick={incrementCounter}>Increment Counter</button>
      <p>Counter: {counter}</p>

      <input
        type="text"
        placeholder="Enter custom task"
        value={customTask}
        onChange={handleInputChange}
      />
      <button onClick={addCustomTask}>Submit</button>

      <h2>Tasks:</h2>
      <ul>
        {memoizedTasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>

      <UseMemoComponent tasks={memoizedTasks} />
      <ReactMemoComponent counter={counter} />
    </div>
  );
};

export default App;
