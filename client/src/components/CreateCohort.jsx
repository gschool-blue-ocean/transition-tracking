import React, { useState } from "react";
import axios from "axios";
import "../styles/CreateCohort.css";

const CreateCohort = ({ setCohort }) => {
	const [isModalOpen, setModalOpen] = useState(false);
	const [cohortName, setCohortName] = useState("");

	const openModal = () => {
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};

	console.log(isModalOpen);

	const handleChange = (e) => {
		setCohortName(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);

		axios
			.post("/api/cohort", {
				cohort_id: formData.get("cohort"),
				instructor: formData.get("instructor"),
				start_date: formData.get("start_date"),
				end_date: formData.get("end_date"),
			})
			.then((response) => {
				// Handle successful response if needed
				console.log("Request successful!", response.data);

				setCohort((cohorts) => {
					return [...cohorts, response.data];
				});
			})
			.catch((error) => {
				// Handle errors
				console.error("Error sending POST request:", error);
			});

		closeModal(); // Close the modal after submitting
	};

	return (
		<div>
			<button className="create-cohort-btn" onClick={openModal}>
				Create a cohort
			</button>
			{isModalOpen && (
				<div className="modal">
					<div className="modal-content">
						<span className="close" onClick={closeModal}>
							&times;
						</span>
						<form onSubmit={handleSubmit}>
							<label>Cohort Name:</label>
							<input
								type="text"
								placeholder="mcsp-21"
								className="input-txt"
								name="cohort"
								value={cohortName}
								onChange={handleChange}
							/>
							<label>Cohort instructor:</label>
							<input
								type="text"
								className="input-txt"
								name="instructor"
								placeholder="Danny Andrews"
							/>

							<label>Start Date:</label>
							<input className="input-txt" type="date" name="start_date" />

							<label>End Date:</label>
							<input className="input-txt" type="date" name="end_date" />

							<button className="submit-btn" type="submit">
								Submit
							</button>
						</form>
					</div>
				</div>
			)}
		</div>
	);
};

export default CreateCohort;
