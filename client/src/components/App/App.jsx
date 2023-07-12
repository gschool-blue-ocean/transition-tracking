import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import LandingPage from "../LandingPage";
import Mcsp from "../Mcsp";
import Footer from "../Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {

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

