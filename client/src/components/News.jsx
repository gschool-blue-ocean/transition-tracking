import React from "react";
import Students from "./Students";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import "../styles/News.css";

export default function News({
  cohort,
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
      <div>
        <Navbar
          cohort={cohort}
          students={students}
          setStudents={setStudents}
          isDDOpen={isDDOpen}
          setIsDDOpen={setIsDDOpen}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          handleItemClick={handleItemClick}
        />
      </div>
      <div className="calendar-container">
        {students.map((student) => (
          <div key={student.id} className="calendar-item">
            <div className="date">{`${student.first_name} ${student.last_name}`}</div>
            {Object.entries(student.comment)
              ? Object.entries(student.comment).map(([key, value]) => {
                  // Check if the comment starts with "Clearing Appointment"
                  if (value.startsWith("Clearing Appointment:")) {
                    const [_, date, time, eventDescription] = value.split(": ");
                    return (
                      <div key={key}>
                        <div className="time">{time}</div>
                        <div className="event-description">{eventDescription}</div>
                      </div>
                    );
                  } else {
                    // Render other comments as usual
                    return (
                      <p key={key} className="comment">
                        {key}: {value}
                      </p>
                    );
                  }
                })
              : null}
          </div>
        ))}
      </div>
    </div>
  );
}

