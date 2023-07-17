import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./Modal";

const Student = ({ students, setStudents }) => {
  const [showModal, setShowModal] = useState(false);
  // student.branch
  // Tayla's added code with html

  const openModal = () => {
    console.log("Modal Opened");
    setShowModal(true);
  };

  const closeModal = () => {
    console.log("Modal closed");
    setShowModal(false);
  };

  return (
    <div className="students">
      {students.map((student) => (
        <div key={student.id} className="student">
          <h2>
            {student.first_name} {student.last_name}
          </h2>
          <p>Email: {student.email}</p>
          <p>Phone: {student.phone}</p>
          <p>Branch: {student.branch}</p>
          <p>ETS: {student.ets.split("T")[0]}</p>
          <p>Status: {student.status}</p>
          <p>LinkedIn: {student.linkedin}</p>
          <p>GitHub: {student.github}</p>
          <div className="comment">
            {Object.entries(student.comment)
              ? Object.entries(student.comment).map(([key, value]) => (
                  <p key={key}>
                    {key} : {value}
                  </p>
                ))
              : {}}
          </div>
          <button onClick={openModal}>|Make a Comment|</button>
          {showModal && (
            <Modal
              onClose={closeModal}
              studentId={student.id}
              students={students}
              setStudents={setStudents}
            />
          )}
          <br />
        </div>
      ))}
    </div>
  );
};

export default Student;
