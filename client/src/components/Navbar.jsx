import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap/esm";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css";
import { MdMenu, MdMenuOpen } from "react-icons/md";
import { BsPersonPlus } from "react-icons/bs";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";


function Navbar({ cohort, students, setStudents, isDDOpen, setIsDDOpen }) {
  const [activeItem, setActiveItem] = useState("dashboard");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };


  const handleAddStudent = (studentData) => {
    // Implement the logic to add the student to the 'students' state here.
    // studentData contains the form input values (first name, last name, etc.).
    // You can add the studentData to the 'students' state or send it to an API, depending on your app's requirements.
    console.log("Adding student:", studentData);
    handleModalClose();
  };

  const exampleCohorts = [
    'Cohort A',
    'Cohort B',
    'Cohort C',
    'Cohort D',
    // Add more cohorts as needed
  ];
  
  const status = [
    'more than 6 months prior ETS',
    'within 6 months prior ETS',
    'Separated',
    // Add more cohorts as needed
  ];
  

  return (
    <div className="header">
      <div className="nav">
        <div className="logo"></div>
        <div className="nav-bar">
          <div className="nav-items">
            <div
              className={`nav-item1 ${
                activeItem === "dashboard" ? "active" : ""
              }`}
              onClick={() => handleItemClick("dashboard")}
            >
              Dashboard
            </div>
            <div className={`nav-item2 ${activeItem === "news" ? "active" : ""}`}>
              <Link className="nav-item2"to="/news">News</Link>

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
            <Form.Control as="select" required>
              <option value="">-- Select Cohort --</option>
              {exampleCohorts.map((cohort, index) => (
                <option key={index} value={cohort}>
                  {cohort}
                </option>
              ))}
            </Form.Control>
            </Form.Group>

            <Form.Group controlId="status">
            <Form.Label>Student Status</Form.Label>
            <Form.Control as="select" required>
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
                required
              />
            </Form.Group>

            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                required
              />
            </Form.Group>

            <Form.Group controlId="formBranch">
              <Form.Label>Branch</Form.Label>
              <Form.Control type="text" placeholder="Enter branch" required />
            </Form.Group>

            <Form.Group controlId="formETSDate">
              <Form.Label>ETS Date</Form.Label>
              <Form.Control type="date" required />
            </Form.Group>

            <Form.Group controlId="formContactNumber">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter contact number"
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group controlId="formLinkedIn">
              <Form.Label>LinkedIn URL</Form.Label>
              <Form.Control
                type="url"
                placeholder="Enter LinkedIn URL"
                required
              />
            </Form.Group>

            <Form.Group controlId="formGithub">
              <Form.Label>Github URL</Form.Label>
              <Form.Control
                type="url"
                placeholder="Enter GitHub URL"
                required
              />
            </Form.Group>

            <Form.Group controlId="formComments">
              <Form.Label>Additional Comments</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter additional comments"
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
    </div>
  );
}

export default Navbar;