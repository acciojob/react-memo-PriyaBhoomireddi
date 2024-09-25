import React, { useState, useMemo } from 'react';
import ReactMemo from './ReactMemo';
import UseMemo from './UseMemo';     

const App = () => {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [task, setTask] = useState('');
  const [skill, setSkill] = useState('');

  // Adding a new todo
  const addTodo = () => {
    setTodos([...todos, 'New todo']);
  };

  // Increment counter
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  // Adding custom task based on input
  const addCustomTask = () => {
    if (task.length > 5) {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  // Task list rendering with useMemo
  const memoizedTodos = useMemo(() => {
    return todos;
  }, [todos]);

  return (
    <div id="main">
      <h1>React Memo Assignment</h1>

      {/* Add todo button */}
      <button id="add-todo-btn" onClick={addTodo}>
        Add todo
      </button>

      {/* Increment button */}
      <button id="incr-cnt" onClick={incrementCounter}>
        Increment Counter
      </button>

      {/* Counter */}
      <p>Counter: {counter}</p>

      {/* Custom task input */}
      <input
        id="task-input"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task (min 6 chars)"
      />
      <button id="submit-task-btn" onClick={addCustomTask}>
        Submit Task
      </button>

      {/* List of Todos */}
      <ul>
        {memoizedTodos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

      {/* React.memo Example: Skill Adding */}
      <input
        id="skill-input"
        type="text"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        placeholder="Enter a skill"
      />
      <ReactMemo skill={skill} />

      <UseMemo counter={counter} />
    </div>
  );
};

export default App;
