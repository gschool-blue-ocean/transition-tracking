import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Dropdown({ cohort, setStudents, isDDOpen, setIsDDOpen }) {
  const handleClick = (id) => {
    fetch(`api/cohort/${id}`)
      .then((res) => res.json())
      .then((students) => {
        setStudents(students);
      });

    setIsDDOpen(false);
  };

  return (
    <div className="cohort">
      {cohort.map((cohorts) => (
        <Link key={cohorts.cohort_id} to="/mcsp">
          <div className="cohorts">
            <button
              className="cohortBtn"
              onClick={() => handleClick(cohorts.cohort_id)}
            >
              {cohorts.cohort_id}
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Dropdown;
