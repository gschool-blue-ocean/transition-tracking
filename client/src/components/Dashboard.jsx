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
      } else if (status === "more than 6 months prior ETS") {
        redCount++;
      } else {
        yellowCount++;
      }
    });

    setRed(redCount);
    setYellow(yellowCount);
    setGreen(greenCount);
  };

  const colorBarHeight = (count) => {
    if (numberOfStudents === 0) {
      return 0;
    } else {
      return Math.floor((count / numberOfStudents) * 100);
    }
  };

  return (
    <div className="dashboard">
      <div className="status-board">
        <div className="status-name">STATUS</div>
        <div className="bars">
          <div className="status-bar">
            <div className="percent">{colorBarHeight(red)}%</div>
            <div className="empty-bar">
              <div
                className="color-bar"
                id="red-color-bar"
                style={{
                  height: `${colorBarHeight(red)}%`,
                }}
              ></div>
            </div>
          </div>
          <div className="status-bar">
            <div className="percent">{colorBarHeight(yellow)}%</div>
            <div className="empty-bar">
              <div
                className="color-bar"
                id="yellow-color-bar"
                style={{
                  height: `${colorBarHeight(yellow)}%`,
                }}
              ></div>
            </div>
          </div>
          <div className="status-bar">
            <div className="percent">{colorBarHeight(green)}%</div>
            <div className="empty-bar">
              <div
                className="color-bar"
                id="green-color-bar"
                style={{
                  height: `${colorBarHeight(green)}%`,
                }}
              ></div>
            </div>
          </div>

        </div>
      </div>
      <div className="ref">
        <div className="yellow">
          <p>within 6 months prior ETS</p>
          <div className="dot1"> 
          </div>
        </div>
        <div className="red">
          <p>more than 6 months prior ETS</p>
          <div className="dot2"> 
          </div>
        </div>
        <div className="green">
          <p>has received DD214</p>
          <div className="dot3"> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
