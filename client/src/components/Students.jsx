import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./Modal";
import "../styles/Students.css";

const Student = ({ students, setStudents }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const openModal = (studentId) => {
    console.log("Modal Opened");
    setShowModal(true);
    setSelectedStudent(studentId);
  };

  const closeModal = () => {
    console.log("Modal closed");
    setShowModal(false);
    setSelectedStudent(null);
  };

  const renderStatus = (status) => {
    if (status === "within 6 months prior ETS") {
      return {
        text: "In Process",
        color: "yellow",
      };
    } else if (status === "Seperated") {
      return {
        text: "Separated",
        color: "green",
      };
    } else if (status === "more than 6 months prior ETS") {
      return {
        text: "Skillbridge",
        color: "red",
      };
    } else {
      return {
        text: "",
        color: "",
      };
    }
  };

  return (
    <div className="students">
      {students.map((student) => (
        <div key={student.id} className="student">
          <div className="student-head">
            <div className="status">
              <p>{renderStatus(student.status).text}</p>
              <div
              <p>{renderStatus(student.status).text}</p>
              <div
                className="color-circle"
                style={{ backgroundColor: renderStatus(student.status).color }}
              ></div>
            </div>
            </div>
            <h2 className="name">
              {student.first_name} {student.last_name}
            </h2>
            </h2>
          </div>
          <br />
          <p>{student.branch}</p>
          <p>ETS: {student.ets.split("T")[0]}</p>

          <div className="comment">
            <br />
            <p>Contact:</p>
            <p>{student.email}</p>
            <p>{student.phone}</p>

            {/* Additional student details (LinkedIn, GitHub) */}
            {/* <p>LinkedIn: {student.linkedin}</p>
            <p>GitHub: {student.github}</p> */}

            <div className="comment">
              {Object.entries(student.comment)
                ? Object.entries(student.comment).map(([key, value]) => (
                    <p key={key}>
                      {key} : {value}
                    </p>
                  ))
                : {}}
            </div>
            <div className="comment">
              {Object.entries(student.comment)
                ? Object.entries(student.comment).map(([key, value]) => (
                    <p key={key}>
                      {key} : {value}
                    </p>
                  ))
                : {}}
            </div>

            <button onClick={() => openModal(student.id)}>
              |Make a Comment|
            </button>
            <button onClick={() => openModal(student.id)}>
              |Make a Comment|
            </button>

            {selectedStudent === student.id && (
              <Modal
                onClose={closeModal}
                studentId={student.id}
                students={students}
                setStudents={setStudents}
              />
            )}
            <br />
          </div>
        </div>
            {selectedStudent === student.id && (
              <Modal
                onClose={closeModal}
                studentId={student.id}
                students={students}
                setStudents={setStudents}
              />
            )}
            <br />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Student;
