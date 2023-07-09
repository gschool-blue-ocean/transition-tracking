import React, { useEffect, useState } from "react";
import c from "./App.module.css";
import axios from "axios";

const App = () => {
	const [cohorts, setCohorts] = useState([]);
	const [students, setStudents] = useState([]);
	const [filter, setFilter] = useState("");
	const [selectedCohort, setSelectedCohort] = useState("");

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

	const handleFilterChange = (e) => {
		setFilter(e.target.value);
		setSelectedCohort(e.target.value);
	};

	// Filter the cohorts based on the filter state
	const filteredCohort = cohorts.find((cohort) => cohort.cohort_id === filter);

	const filteredStudents = students.filter((student) => student.cohort_id === selectedCohort);

	console.log(students);

	return (
		<main>
			<h1>Transition Tracker</h1>
			<div>
				<label htmlFor="cohortSelect">Select a Cohort:</label>
				<select id="cohortSelect" value={selectedCohort} onChange={handleFilterChange}>
					<option value="">Cohorts</option>
					{cohorts.map(({ id, cohort_id }) => (
						<option key={id} value={cohort_id}>
							{cohort_id}
						</option>
					))}
				</select>
			</div>
			{selectedCohort ? (
				<div className={c.container}>
					{filteredCohort ? (
						<div key={filteredCohort.id} className={c.container}>
							<h2>Cohort: {filteredCohort.cohort_id}</h2>
							<p>
								<strong>Start date:</strong> {filteredCohort.start_date}
							</p>
							<div className={c.container}>
								<h3>Instructor(s)</h3>
								{filteredCohort.instructor}
							</div>
						</div>
					) : (
						<span>No Cohort found.</span>
					)}
				</div>
			) : null}
			{selectedCohort ? (
				<div className={c.container}>
					<h3>Students(s)</h3>
					{filteredStudents.length > 0 ? (
						filteredStudents.map(({ id, first_name, last_name }) => (
							<div key={id}>
								<span>
									{first_name} {last_name}
								</span>
							</div>
						))
					) : (
						<span>No students found for the selected cohort.</span>
					)}
				</div>
			) : null}
		</main>
	);
};

export default App;
