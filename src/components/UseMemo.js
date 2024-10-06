import React, { useMemo } from 'react';

const UseMemoComponent = ({ counter }) => {
  const expensiveCalculation = useMemo(() => {
    console.log('Calculating...');
    return counter * 2;
  }, [counter]);

  return (
    <div>
      <h3>UseMemo Example</h3>
      <p>Expensive calculation result: {expensiveCalculation}</p>
    </div>
  );
};

export default UseMemoComponent;
