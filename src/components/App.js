import React, { useState } from "react";
import UseMemoExample from "./UseMemo";
import ReactMemoExample from "./ReactMemo";

const App = () => {
  const [tasks, setTasks] = useState(["New todo"]);
  const [counter, setCounter] = useState(0);

  const addTodo = () => {
    setTasks([...tasks, "New todo"]);
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <button id="add-todo-btn" onClick={addTodo}>
        Add Todo
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <button id="incr-cnt" onClick={incrementCounter}>
        Increment Counter
      </button>
      <p>Counter: {counter}</p>

      <UseMemoExample />
      <ReactMemoExample />
    </div>
  );
};

export default App;
