import React from "react";
import Students from "./Students";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import "../styles/Mcsp.css";

export default function Mcsp({
  cohort,
  students,
  setStudents,
  isDDOpen,
  setIsDDOpen,
}) {
  return (
    <div className="app">
      <Navbar
        cohort={cohort}
        students={students}
        setStudents={setStudents}
        isDDOpen={isDDOpen}
        setIsDDOpen={setIsDDOpen}
      />
      <Dashboard students={students} />
      <Students students={students} />
    </div>
  );
}
