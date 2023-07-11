import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import LandingPage from "../LandingPage";
import Mcsp from "../Mcsp";
import Footer from "../Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [students, setStudents] = useState([]);
  const [cohorts, setCohorts] = useState([]);

  useEffect(() => {
    const getCohrts = async () => {
      try {
        const response = await axios.get(`/api/cohorts`);
        setCohorts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getCohorts();
  }, []);

  useEffect(() => {
    const getStudents = async (id) => {
      try {
        const response = await axios.get(`/api/cohort/${id}`);
        if (response.length > 0) {
          setStudents(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getStudents();
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/mcsp" exact element={<Mcsp students={students} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
