import React from 'react';

const ReactMemoComponent = React.memo(({ counter }) => {
  console.log('ReactMemoComponent rendered');
  return (
    <div>
      <h3>React Memo Component</h3>
      <p>Counter Value: {counter}</p>
    </div>
  );
});

export default ReactMemoComponent;
