import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "../Navbar";
import LandingPage from "../LandingPage";
import Mcsp from "../Mcsp";
import Footer from "../Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [cohort, setCohort] = useState([]);
  const [students, setStudents] = useState([]);
  const [isDDOpen, setIsDDOpen] = useState(false);

  useEffect(() => {
    console.log("from app: ", setStudents);
    fetch("/api/cohort")
      .then((res) => res.json())
      .then((cohort) => {
        setCohort(cohort);
      });
  }, []);

  return (
    <div className="App">
      <Router>
      {/* <Navbar /> */}
        <Routes>
          <Route
            path="/"
            exact
            element={
              <LandingPage
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
                students={students}
                setStudents={setStudents}
                isDDOpen={isDDOpen}
                setIsDDOpen={setIsDDOpen}
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
