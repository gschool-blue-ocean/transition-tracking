import React from "react";
import Students from "./Students";
import Dropdown from "./Dropdown";


export default function Mcsp({ cohort, students, setStudents, isDDOpen, setIsDDOpen }) {
  return (
    <div>
      <Dashboard students={students} /
      <Navbar cohort={cohort}
               students={students}
               setStudents={setStudents}
               isDDOpen={isDDOpen}
               setIsDDOpen={setIsDDOpen}/>
       <Students students={students} />
    </div>
  );
}
