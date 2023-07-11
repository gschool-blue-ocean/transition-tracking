import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import LandingPage from "../LandingPage";
import Mcsp from "../Mcsp";
import Footer from "../Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [cohorts, setCohorts] = useState([]);
	const [students, setStudents] = useState([]);
	const [filter, setFilter] = useState("");
	const [selectedCohort, setSelectedCohort] = useState("");

  
  useEffect(() => {
    const getCohorts = async () => {
      try{
          const resultCo =  await axios.get("/api/cohort")
          setCohorts(resultCo.data);
      } catch (error) {
        console.error(error)
      };
    };
    getCohorts();
  }, []);

  useEffect(() => {
      const getStudents = async() => {
      try{
         const resultStu = await axios.get("/api/students")
         setStudents(resultStu.data);
      } catch (error) {
        console.error(error)
      };
    };
    getStudents();
  }, []);


	const handleFilterChange = (e) => {
		setFilter(e.target.value);
		setSelectedCohort(e.target.value);
	};


  return (
    <div className="App">
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" exact element={<LandingPage /> }/>
          <Route path="/mcsp" exact element={<Mcsp 
                handleFilterChang={handleFilterChange}
                setCohorts={setCohorts} 
                setStudents={setStudents}
                />}
           />
        </Routes>
      <Footer />
    </Router>
    </div>
  );
	

};


export default App;
