import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Dashboard.css";

const Dashboard = ({ students }) => {
  const [red, setRed] = useState(0);
  const [yellow, setYellow] = useState(0);
  const [green, setGreen] = useState(0);
  const numberOfStudents = students.length;

  useEffect(() => {
    // Update the status counts when students prop changes
    updateStatusCounts();
  }, [students]);

  const updateStatusCounts = () => {
    let redCount = 0;
    let yellowCount = 0;
    let greenCount = 0;

    students.forEach((student) => {
      const status = student.status;

      if (status === "Seperated") {
        greenCount++;
      } else if (status === "Clearing") {
        yellowCount++;
      } else {
        redCount++;
      }
    });

    setRed(redCount);
    setYellow(yellowCount);
    setGreen(greenCount);
  };

  return (
    <div className="dashboard">
    <div className="status-board">
      <div className="status-name">STATUS</div>
      <div className="bars">
        <div className="status-bar">
          <div className="percent">{(red / numberOfStudents) * 100}%</div>
          <div className="empty-bar">
            <div
              className="color-bar"
              id="red-color-bar"
              style={{ height: `${(red / numberOfStudents) * 100}%` }}
            ></div>
          </div>
        </div>
        <div className="status-bar">
          <div className="percent">{(yellow / numberOfStudents) * 100}%</div>
          <div className="empty-bar">
            <div
              className="color-bar"
              id="yellow-color-bar"
              style={{ height: `${(yellow / numberOfStudents) * 100}%` }}
            ></div>
          </div>
        </div>
        <div className="status-bar">
          <div className="percent">{(green / numberOfStudents) * 100}%</div>
          <div className="empty-bar">
            <div
              className="color-bar"
              id="green-color-bar"
              style={{ height: `${(green / numberOfStudents) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
