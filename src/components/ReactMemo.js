import React, { useState } from "react";

const ReactMemoExample = () => {
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);

  const addSkill = () => {
    if (skill) {
      setSkills([...skills, skill]);
      setSkill("");
    }
  };

  return (
    <div>
      <h2>React Memo Example</h2>
      <input
        type="text"
        id="skill-input"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />
      <button id="add-skill-btn" onClick={addSkill}>
        Add Skill
      </button>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(ReactMemoExample);
