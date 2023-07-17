import React from "react";
import Students from "./Students";
import Dashboard from "./Dashboard";
import Dropdown from "./Dropdown";
import CreateCohort from "./CreateCohort";

export default function Mcsp({
  cohort,
  students,
  setStudents,
  isDDOpen,
  setIsDDOpen,
}) {
  return (
    <div>
      <Dashboard students={students} />
      <Students students={students} setStudents={setStudents} />
      <div className="btn-group">
        <button onClick={() => setIsDDOpen((prev) => !prev)}>MCSP..</button>

        {isDDOpen && (
          <ul className="dropdown-menu">
            <Dropdown
              cohort={cohort}
              students={students}
              setStudents={setStudents}
              isDDOpen={isDDOpen}
              setIsDDOpen={setIsDDOpen}
            />

            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" id="createCohort" href="/mcsp">
                <CreateCohort />
              </a>
            </li>
          </ul>
        )}
        <Students students={students} setStudents={setStudents} />
      </div>
    </div>
  );
}
