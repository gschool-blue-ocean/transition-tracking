import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import Dropdown from "./Dropdown";

function Navbar({ cohort, students, setStudents, isDDOpen, setIsDDOpen }) {
  const [activeItem, setActiveItem] = useState("dashboard"); // Initial active item is set to 'dashboard'
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div clasName="header">
      <div className="nav">
        <div className="logo"></div>
        <div className="nav-bar">
          <div className="nav-items">
            <div
              className={`nav-item1 ${
                activeItem === "dashboard" ? "active" : ""
              }`}
              onClick={() => handleItemClick("dashboard")}
            >
              Dashboard
            </div>
            <div
              className={`nav-item2 ${activeItem === "news" ? "active" : ""}`}
              onClick={() => handleItemClick("news")}
            >
              News
            </div>
            <div
              className={`nav-item3 ${activeItem === "help" ? "active" : ""}`}
              onClick={() => handleItemClick("help")}
            >
              Help
            </div>
          </div>
        </div>
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
            </ul>
          )}
        </div>
      </div>

      <div>
        <button className="mx-12">Modal</button>
      </div>
    </div>
  );
}

export default Navbar;
