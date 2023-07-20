import React from "react";
import Students from "./Students";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import "../styles/Mcsp.css";

export default function Mcsp({
  cohort,
  setCohort,
  students,
  setStudents,
  isDDOpen,
  setIsDDOpen,
  activeItem,
  setActiveItem,
  handleItemClick,
}) {
  return (
    <div className="app">
      <Navbar
        cohort={cohort}
        setCohort={setCohort}
        students={students}
        setStudents={setStudents}
        isDDOpen={isDDOpen}
        setIsDDOpen={setIsDDOpen}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        handleItemClick={handleItemClick}
      />
      <div className="dash">
        <Dashboard students={students} />
        <Students students={students} setStudents={setStudents} />
      </div>
    </div>
  );
}
