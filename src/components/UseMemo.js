import React, { useMemo } from 'react';

// Example component demonstrating useMemo usage
const UseMemo = ({ counter }) => {
  const expensiveCalculation = (num) => {
    console.log('Expensive calculation...');
    return num * 2;
  };

  const memoizedValue = useMemo(() => expensiveCalculation(counter), [counter]);

  return (
    <div>
      <h2>useMemo Example</h2>
      <p>Memoized value (counter * 2): {memoizedValue}</p>
    </div>
  );
};

export default UseMemo;
