import React, { useEffect, useState } from "react";
import axios from "axios";

const Student = ({ students }) => {
  // student.branch
  // Tayla's added code with html
  return (
    <div className="students">
      {students.map((student) => (
        <div key={student.id} className="student">
          <h2>
            {student.first_name} {student.last_name}
          </h2>
          <p>Email: {student.email}</p>
          <p>Phone: {student.phone}</p>
          <p>Branch: {student.branch}</p>
          <p>ETS: {student.ets.split("T")[0]}</p>
          <p>Status: {student.status}</p>
          <p>LinkedIn: {student.linkedin}</p>
          <p>GitHub: {student.github}</p>
          <div className="comment">
            {student.comment
              ? student.comment
                  .split("%")
                  .map((comment, index) => <p key={index}>{comment}</p>)
              : ""}
          </div>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Student;
