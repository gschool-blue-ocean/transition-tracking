import React, { useEffect, useState } from "react";
import axios from "axios";

const Student = ({ students }) => {
  console.log(students[0]);
  // student.branch
  // Tayla's added code with html
  return (
    <div className="students">
      Students
      {students.map((student) => (
        <div key={student.id} className="student">
          <h2>
            {student.first_name} {student.last_name}
          </h2>
          <p>Email: {student.email}</p>
          <p>Phone: {student.phone}</p>
          <p>Branch: {student.branch}</p>
          <p>ETS: {student.ets}</p>
        </div>
      ))}
    </div>
  );
};

export default Student;
