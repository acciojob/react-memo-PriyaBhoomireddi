import React from 'react';

const ReactMemoComponent = React.memo(({ todos }) => {
  console.log('Rendering ReactMemoComponent');

  return (
    <div>
      <h3>React.memo Example</h3>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
});

export default ReactMemoComponent;
