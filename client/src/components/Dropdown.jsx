import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Dropdown({ cohort, setStudents, isDDOpen, setIsDDOpen}) {

  
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
        <Link to="/mcsp">
          <div key={cohorts.cohort_id} className="cohorts">
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
