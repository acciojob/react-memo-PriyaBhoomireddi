import React, { useMemo, useState } from 'react';

const UseMemoComponent = () => {
    const [count, setCount] = useState(0);

    const expensiveCalculation = (num) => {
        console.log("Calculating...");
        return num * 2;
    };

    const result = useMemo(() => expensiveCalculation(count), [count]);

    return (
        <div>
            <h2>UseMemo Example</h2>
            <p>Result: {result}</p>
            <button id="incr-cnt" onClick={() => setCount(count + 1)}>Increment Count</button>
        </div>
    );
};

export default UseMemoComponent;
