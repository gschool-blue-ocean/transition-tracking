import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap/esm";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css";
import { MdMenu, MdMenuOpen } from "react-icons/md";
import { BsPersonPlus } from "react-icons/bs";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import axios from "axios";

function Navbar({
  cohort,
  setCohort,
  students,
  setStudents,
  isDDOpen,
  setIsDDOpen,
  activeItem,
  setActiveItem,
  handleItemClick,
}) {
  const isActive = (item) => {
    return activeItem === item ? "active" : "";
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  const [studentCohort, setStudentCohort] = useState("");
  const handleStudentCohort = (e) => {
    setStudentCohort(e.target.value);
  };

  const [studentStatus, setStudentStatus] = useState("");
  const handleStudentStatus = (e) => {
    setStudentStatus(e.target.value);
  };

  const [firstName, setFirstName] = useState("");
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const [lastName, setLastName] = useState("");
  const handlelastName = (e) => {
    setLastName(e.target.value);
  };

  const [branch, setBranch] = useState("");
  const handleBranch = (e) => {
    setBranch(e.target.value);
  };

  const [ets, setEts] = useState("");
  const handleEts = (e) => {
    setEts(e.target.value);
  };

  const [phoneNumber, setPhoneNumber] = useState("");
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const [email, setEmail] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const [linkedin, setLinkedin] = useState("");
  const handleLinkedin = (e) => {
    setLinkedin(e.target.value);
  };

  const [github, setGithub] = useState("");
  const handleGithub = (e) => {
    setGithub(e.target.value);
  };

  const [commentKey, setCommentKey] = useState("");
  const handleCommentKey = (e) => {
    setCommentKey(e.target.value);
  };

  const [commentValue, setCommentValue] = useState("");
  const handleCommentValue = (e) => {
    setCommentValue(e.target.value);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleAddStudent = () => {
    const commentCopy = {};
    commentCopy[`${commentKey}`] = `${commentValue}`;
    const comment = JSON.stringify(commentCopy);
    console.log(
      "Adding student:",
      studentCohort,
      studentStatus,
      firstName,
      lastName,
      branch,
      ets,
      phoneNumber,
      email,
      linkedin,
      github,
      `${commentKey}:${commentValue}`
    );
    const result = axios
      .post(`/api/students`, {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phoneNumber,
        branch: branch,
        status: studentStatus,
        ets: ets,
        linkedin: linkedin,
        github: github,
        comment: comment,
        cohort_id: studentCohort,
      })
      .then((res) => {
        console.log("Student created!", res.data);
        fetch(`/api/cohort/${studentCohort}`)
          .then((res) => res.json())
          .then((students) => {
            console.log(students);
            setStudents(students);
          });
      })
      .catch((error) => {
        console.error(error);
      });

    handleModalClose();
  };

  const exampleBranchs = ["Army", "Navy", "Air Force", "Marine", "Coast Guard"];

  const exampleComments = [
    "Medical Appointment",
    "Clearing Appointment",
    "Office Hour Requested",
    "Family Emergency",
    "Other",
  ];

  const status = [
    "more than 6 months prior ETS",
    "within 6 months prior ETS",
    "Clearing",
    "Separated",
    // Add more cohorts as needed
  ];

  return (
    <div className="header">
      <div className="nav">
        <div className="logo"></div>
        <div className="nav-bar">
          <div className="nav-items">
            <Link
              to="/mcsp"
              className={`nav-item1 ${
                activeItem === "dashboard" ? "active" : ""
              }`}
              onClick={() => handleItemClick("dashboard")}
            >
              Dashboard
            </Link>
            <Link
              to="/news"
              className={`nav-item2 ${activeItem === "news" ? "active" : ""}`}
              onClick={() => handleItemClick("news")}
            >
              News
            </Link>
            <div
              className={`nav-item3 ${activeItem === "help" ? "active" : ""}`}
              onClick={() => handleItemClick("help")}
            >
              Help
            </div>
          </div>
        </div>
        <div className="btn-group">
          <button
            className="classes"
            onClick={() => setIsDDOpen((prev) => !prev)}
          >
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

              <li>
                <a className="dropdown-item" id="createCohort" href="#">
                  Create New +
                </a>
              </li>
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
          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            {/* Add input fields for student information */}
            <Form.Group controlId="formCohort">
              <Form.Label>Select Cohort</Form.Label>

              <Form.Control
                as="select"
                value={studentCohort}
                onChange={handleStudentCohort}
                required
              >
                <option value="">-- Select Cohort --</option>
                {cohort.map((cohorts) => (
                  <option key={cohorts.cohort_id} value={cohorts.cohort_id}>
                    {cohorts.cohort_id}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="status">
              <Form.Label>Student Status</Form.Label>

              <Form.Control
                as="select"
                value={studentStatus}
                onChange={handleStudentStatus}
                required
              >
                <option value="">-- Select Status --</option>
                {status.map((status, index) => (
                  <option key={index} value={status}>
                    {status}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                value={firstName}
                onChange={handleFirstName}
                required
              />
            </Form.Group>

            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                value={lastName}
                onChange={handlelastName}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBranch">
              <Form.Label>Branch</Form.Label>
              <Form.Control
                as="select"
                value={branch}
                onChange={handleBranch}
                required
              >
                <option value="">-- Select Branch --</option>
                {exampleBranchs.map((branch, index) => (
                  <option key={index} value={branch}>
                    {branch}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formETSDate">
              <Form.Label>ETS Date</Form.Label>
              <Form.Control
                type="date"
                value={ets}
                onChange={handleEts}
                required
              />
            </Form.Group>

            <Form.Group controlId="formContactNumber">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter contact number"
                value={phoneNumber}
                onChange={handlePhoneNumber}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmail}
                required
              />
            </Form.Group>

            <Form.Group controlId="formLinkedIn">
              <Form.Label>LinkedIn URL</Form.Label>
              <Form.Control
                type="url"
                placeholder="Enter LinkedIn URL"
                value={linkedin}
                onChange={handleLinkedin}
                required
              />
            </Form.Group>

            <Form.Group controlId="formGithub">
              <Form.Label>Github URL</Form.Label>
              <Form.Control
                type="url"
                placeholder="Enter GitHub URL"
                value={github}
                onChange={handleGithub}
                required
              />
            </Form.Group>

            <Form.Group controlId="formComments">
              <Form.Label>Additional Comments</Form.Label>
              <Form.Control
                as="select"
                value={commentKey}
                onChange={handleCommentKey}
                required
              >
                <option value="">-- Select Comment --</option>
                {exampleComments.map((branch, index) => (
                  <option key={index} value={branch}>
                    {branch}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formComments">
              <Form.Label>Comment Details</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter additional comments"
                value={commentValue}
                onChange={handleCommentValue}
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
            variant="secondary"
            onClick={() => handleAddStudent()}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Navbar;
