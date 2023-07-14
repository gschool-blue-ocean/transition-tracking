import React from "react";
import Students from "./Students";
import Navbar from "./Navbar";
import '../styles/Mcsp.css'



export default function Mcsp({ cohort, students, setStudents, isDDOpen, setIsDDOpen }) {
  return (

    <div className="app">
      <Navbar cohort={cohort}
               students={students}
               setStudents={setStudents}
               isDDOpen={isDDOpen}
               setIsDDOpen={setIsDDOpen}/>
        <Students students={students} />
        </div>

  );
}