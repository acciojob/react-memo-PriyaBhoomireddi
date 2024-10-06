import React, { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [skill, setSkill] = useState('');
  const [skills, setSkills] = useState([]);

  const addTodo = () => {
    const newTodo = `Todo ${todos.length}`; // Example, adjust as needed
    setTodos([...todos, newTodo]);
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const addSkill = () => {
    setSkills([...skills, skill]);
    setSkill(''); // Clear input after adding
  };

  return (
    <div id="main">
      <h1>Todo List</h1>
      <button id="add-todo-btn" onClick={addTodo}>Add Todo</button>
      <div>
        {todos.map((todo, index) => (
          <div key={index} id={`todo-${index}`}>
            {todo}
          </div>
        ))}
      </div>
      <button id="incr-cnt" onClick={incrementCounter}>Increment Counter</button>
      <p>{counter}</p>
      <h2>Skills</h2>
      <input
        type="text"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        id="skill-input"
      />
      <button id="skill-btn" onClick={addSkill}>Add Skill</button>
      <div>
        {skills.map((skill, index) => (
          <div key={index}>{skill}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
