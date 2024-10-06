import React, { useState, useMemo } from "react";

const UseMemoExample = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (inputValue) {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const memoizedTasks = useMemo(() => tasks, [tasks]);

  return (
    <div>
      <h2>Use Memo</h2>
      <input
        type="text"
        id="task-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button id="add-task-btn" onClick={addTask}>
        Add Task
      </button>
      <ul>
        {memoizedTasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseMemoExample;
