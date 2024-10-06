import React, { useState } from 'react';
import TaskList from './TaskList';

const ReactMemoComponent = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleInputChange = (e) => {
        setTask(e.target.value);
    };

    const handleAddTask = () => {
        if (task.length > 5) {
            setTasks([...tasks, task]);
            setTask('');
        } else {
            alert('Task must be more than 5 characters');
        }
    };

    return (
        <div>
            <h2>React Memo Example</h2>
            <input
                id="skill-input"
                type="text"
                value={task}
                onChange={handleInputChange}
                placeholder="Enter a task"
            />
            <button id="add-skill-btn" onClick={handleAddTask}>Add Task</button>

            <TaskList tasks={tasks} />
        </div>
    );
};

export default ReactMemoComponent;
