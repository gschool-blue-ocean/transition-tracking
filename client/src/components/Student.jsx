import React, { useEffect, useState } from "react";


const Student = ({ students }) => {
  return (
    // student.branch
    // Tayla's added code with html

    <div>
      {students.map((student) => {
        <div key={student.id}>
          <h2>
            {student.first_name} {student.last_name}
          </h2>
          <p>Email: {student.email}</p>
          <p>Phone: {student.phone}</p>
          <p>Branch: {student.branch}</p>
          <p>ETS: {student.ets}</p>
        </div>;
      })}
    </div>
  );
};

export default Student;
