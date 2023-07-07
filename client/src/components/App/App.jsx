import React, { useEffect, useState } from "react";
import c from "./App.module.css";
import axios from "axios";

const App = () => {
	const [cohorts, setCohorts] = useState([]);
	const [students, setStudents] = useState([]);

	const getCohorts = () => {
		axios.get("/api/cohort").then((res) => {
			setCohorts(res.data);
		});
	};

	const getStudents = () => {
		axios.get("/api/students").then((res) => {
			setStudents(res.data);
		});
	};

	useEffect(getCohorts, []);
	useEffect(getStudents, []);

	return (
		<main>
			<h1>Cohorts</h1>
			<div className={c.cohorts}>
				{cohorts.length > 0 ? (
					cohorts.map(({ id, instructor }) => (
						<div key={id}>
							<label>
								<h3>Instructor(s)</h3>
							</label>
							<span>{instructor}</span>
						</div>
					))
				) : (
					<span>No Instructor found.</span>
				)}
			</div>
			<div className={c.cohorts}>
				{students.length > 0 ? (
					students.map(({ id, first_name, last_name }) => (
						<div key={id}>
							<label>
								<h3>Students(s)</h3>
							</label>
							<span>
								{first_name} {last_name}
							</span>
						</div>
					))
				) : (
					<span>No students found.</span>
				)}
			</div>
		</main>
	);
};

export default App;
