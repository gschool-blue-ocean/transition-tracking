import React from "react";
import Students from "./Students";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import "../styles/Mcsp.css";

export default function News({
  cohort,
  students,
  setStudents,
  isDDOpen,
  setIsDDOpen,
}) {
  return (
    <div className="app">
    <div>
      <Navbar
        cohort={cohort}
        students={students}
        setStudents={setStudents}
        isDDOpen={isDDOpen}
        setIsDDOpen={setIsDDOpen}
      />
      </div>
      <div>
      {students.map((student) => (
            <div key={student.id}>
              <h4>{`${student.first_name} ${student.last_name}`}</h4>
              <div className="comment">
                {Object.entries(student.comment)
                  ? Object.entries(student.comment).map(([key, value]) => (
                      <p key={key}>
                        {key}: {value}
                      </p>
                    ))
                  : null}
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}
