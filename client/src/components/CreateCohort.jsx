import React, { useState } from "react";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/CreateCohort.css";

const CreateCohort = ({ setCohort }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [cohortName, setCohortName] = useState("");
  const [instructor, setInstructor] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "cohort") setCohortName(value);
    else if (name === "instructor") setInstructor(value);
    else if (name === "start_date") setStartDate(value);
    else if (name === "end_date") setEndDate(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can send the POST request to your backend with the form data
    // For example, using the fetch API or axios
    // Remember to handle errors and success scenarios as needed
    axios
      .post("/api/cohort", {
        cohort_id: cohortName,
        instructor: instructor,
        start_date: startDate,
        end_date: endDate,
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
      <Button className="create-cohort-btn" onClick={openModal}>
        Create a cohort?
      </Button>

      <Modal show={isModalOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create Cohort</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Cohort Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="mcsp-21"
                name="cohort"
                value={cohortName}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Cohort instructor:</Form.Label>
              <Form.Control
                type="text"
                name="instructor"
                placeholder="Danny Andrews"
                value={instructor}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Start Date:</Form.Label>
              <Form.Control
                type="date"
                name="start_date"
                value={startDate}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>End Date:</Form.Label>
              <Form.Control
                type="date"
                name="end_date"
                value={endDate}
                onChange={handleChange}
              />
            </Form.Group>

            <Button className="custom-submit-btn" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CreateCohort;
