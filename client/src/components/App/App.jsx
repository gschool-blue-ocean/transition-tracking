import React, { useEffect, useState } from "react";
// import axios from "axios";
import Navbar from "../Navbar";
import LandingPage from "../LandingPage";
import Mcsp from "../Mcsp";
import Footer from "../Footer";
import News from "../News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [cohort, setCohort] = useState([]);
  const [students, setStudents] = useState([]);
  const [isDDOpen, setIsDDOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");

  useEffect(() => {
    console.log("from app: ", setStudents);
    fetch("/api/cohort")
      .then((res) => res.json())
      .then((cohort) => {
        setCohort(cohort);
      });
  }, []);

  const handleItemClick = (item) => {
    setActiveItem(item);
    console.log("activeItem: ", activeItem);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <LandingPage
                setCohort={setCohort}
                cohort={cohort}
                students={students}
                setStudents={setStudents}
                isDDOpen={isDDOpen}
                setIsDDOpen={setIsDDOpen}
              />
            }
          />
          <Route
            path="/mcsp"
            exact
            element={
              <Mcsp
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
            }
          />
          <Route
            path="/news"
            exact
            element={
              <News
                cohort={cohort}
                students={students}
                setStudents={setStudents}
                isDDOpen={isDDOpen}
                setIsDDOpen={setIsDDOpen}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                handleItemClick={handleItemClick}
              />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
