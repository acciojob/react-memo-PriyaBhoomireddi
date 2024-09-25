import React from 'react';

// This component will only re-render if the 'skill' prop changes
const ReactMemo = React.memo(({ skill }) => {
  return (
    <div>
      <h2>React.memo Example</h2>
      <p>Current skill: {skill}</p>
    </div>
  );
});

export default ReactMemo;
