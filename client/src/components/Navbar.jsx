import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap/esm";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css";
import { MdMenu, MdMenuOpen } from "react-icons/md";
import { BsPersonPlus } from "react-icons/bs";
import Dropdown from "./Dropdown";

function Navbar({ cohort, students, setStudents, isDDOpen, setIsDDOpen }) {
	const [activeItem, setActiveItem] = useState("dashboard");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isCommentsOpen, setIsCommentsOpen] = useState(false);

	// States for adding a student
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [branch, setBranch] = useState("");
	const [ets, setETS] = useState("");
	const [status, setStatus] = useState("");
	const [linkedin, setLinkedin] = useState("");
	const [github, setGithub] = useState("");
	const [comment, setComment] = useState("");
	const [cohortID, setCohortID] = useState("");

	const handleItemClick = (item) => {
		setActiveItem(item);
	};

	const handleModalOpen = () => {
		setIsModalOpen(true);
	};

	const handleModalClose = () => {
		setIsModalOpen(false);
	};

	const handleChange = (e) => {
		console.log(e.target.value);
	};

	const handleCommentsModalOpen = () => {
		//some code to access student.comments and display them in the modal
		setIsCommentsOpen(true);
	};

	const handleCommentsModalClose = () => {
		setIsCommentsOpen(false);
	};

	// Handle the submit of the add student form
	const handleFormSubmit = (e) => {
		e.preventDefault();

		axios
			.post("/api/students", {
				first_name: firstName,
				last_name: lastName,
				email: email,
				phone: phone,
				branch: branch,
				ets: ets,
				status: status,
				linkedin: linkedin,
				github: github,
				comment: comment,
				cohort_id: cohortID,
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
	};

	const handleAddStudent = (studentData) => {
		// Implement the logic to add the student to the 'students' state here.
		// studentData contains the form input values (first name, last name, etc.).
		// You can add the studentData to the 'students' state or send it to an API, depending on your app's requirements.
		console.log("Adding student:", studentData);
		handleModalClose();
	};

	return (
		<div className="header">
			<div className="nav">
				<div className="logo"></div>
				<div className="nav-bar">
					<div className="nav-items">
						<div
							className={`nav-item1 ${activeItem === "dashboard" ? "active" : ""}`}
							onClick={() => handleItemClick("dashboard")}
						>
							Dashboard
						</div>
						<div
							className={`nav-item2 ${activeItem === "news" ? "active" : ""}`}
							onClick={handleCommentsModalOpen}
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
					<button className="classes" onClick={() => setIsDDOpen((prev) => !prev)}>
						{isDDOpen ? <MdMenuOpen /> : <MdMenu />}
					</button>
					{isDDOpen && (
						<ul className="dropdown-menu show">
							<Dropdown
								cohort={cohort}
								students={students}
								setStudents={setStudents}
								isDDOpen={isDDOpen}
								setIsDDOpen={setIsDDOpen}
							/>
						</ul>
					)}
					<button className="add-student" onClick={handleModalOpen}>
						<BsPersonPlus />
					</button>
				</div>
			</div>

			{/* Modal for adding a student */}
			<Modal show={isModalOpen} onHide={handleModalClose}>
				<Modal.Header closeButton>
					<Modal.Title>Add Student</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleFormSubmit}>
						{/* Add input fields for student information */}
						<Form.Group controlId="formFirstName">
							<Form.Label>First Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter first name"
								value={firstName}
								onChange={handleChange}
								required
							/>
						</Form.Group>

						<Form.Group controlId="formLastName">
							<Form.Label>Last Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter last name"
								value={lastName}
								onChange={handleChange}
								required
							/>
						</Form.Group>

						<Form.Group controlId="formBranch">
							<Form.Label>Branch</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter branch"
								value={branch}
								onChange={handleChange}
								required
							/>
						</Form.Group>

						<Form.Group controlId="formETSDate">
							<Form.Label>ETS Date</Form.Label>
							<Form.Control type="date" value={ets} onChange={handleChange} required />
						</Form.Group>

						<Form.Group controlId="formContactNumber">
							<Form.Label>Contact Number</Form.Label>
							<Form.Control
								type="tel"
								placeholder="Enter contact number"
								value={phone}
								onChange={handleChange}
								required
							/>
						</Form.Group>

						<Form.Group controlId="formEmail">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter email"
								value={email}
								onChange={handleChange}
								required
							/>
						</Form.Group>

						<Form.Group controlId="formLinkedIn">
							<Form.Label>LinkedIn URL</Form.Label>
							<Form.Control
								type="url"
								placeholder="Enter LinkedIn URL"
								value={linkedin}
								onChange={handleChange}
								required
							/>
						</Form.Group>

						<Form.Group controlId="formGithub">
							<Form.Label>Github URL</Form.Label>
							<Form.Control
								type="url"
								placeholder="Enter GitHub URL"
								value={github}
								onChange={handleChange}
								required
							/>
						</Form.Group>

						<Form.Group controlId="formComments">
							<Form.Label>Additional Comments</Form.Label>
							<Form.Control
								as="textarea"
								rows={4}
								placeholder="Enter additional comments"
								value={comment}
								onChange={handleChange}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleModalClose}>
						Cancel
					</Button>
					<Button
						className="custom-add-btn"
						variant="primary"
						onClick={() => handleAddStudent(/* Pass the form data here */)}
					>
						Add
					</Button>
				</Modal.Footer>
			</Modal>

			{/* Modal for comments */}
			<Modal show={isCommentsOpen} onHide={handleCommentsModalClose}>
				<Modal.Header closeButton>
					<Modal.Title>Comments</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{students.map((student) => (
						<div key={student.id}>
							<h4>{`${student.first_name} ${student.last_name}`}</h4>
							<div className="comment">
								{Object.entries(student.comment)
									? Object.entries(student.comment).map(([key, value]) => (
											<p key={key}>
												{key}: {value}
											</p>
									  ))
									: null}
							</div>
						</div>
					))}
				</Modal.Body>

				<Modal.Footer>
					<Button variant="secondary" onClick={handleCommentsModalClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default Navbar;
