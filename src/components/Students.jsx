import React, { useState } from "react";
export default function Students() {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState();
  const handleSubmit = () => {
    setStudents([...students, student]);
  };
  return (
    <div>
      <h2>Students</h2>
      <p>
        <input type="text" onChange={(e) => setStudent(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
      </p>
      <div>
        {students &&
          students.map((value, index) => <li key={index}>{value}</li>)}
      </div>
    </div>
  );
}
