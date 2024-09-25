import React, { useMemo } from 'react';

const UseMemoComponent = ({ tasks }) => {
  // Calculate the number of tasks (example use of useMemo)
  const taskCount = useMemo(() => {
    return tasks.length;
  }, [tasks]);

  return (
    <div>
      <h3>UseMemo Component</h3>
      <p>Number of tasks: {taskCount}</p>
    </div>
  );
};

export default UseMemoComponent;
