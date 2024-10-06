import React from 'react';

const TaskList = React.memo(({ tasks }) => {
    console.log("Rendering TaskList...");
    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>{task}</li>
            ))}
        </ul>
    );
});

export default TaskList;
