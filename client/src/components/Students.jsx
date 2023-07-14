import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./Modal";
import '../styles/Students.css'

const Student = ({ students, setStudents }) => {
  const [showModal, setShowModal] = useState(false);
  console.log("from students: ", setStudents);
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

  
    const renderStatus = (status) => {
      
      if (status === "within 6 months prior ETS") {
        return "In Process";
      } else if (status === "Seperated") {
        return "Separated";
      } else if (status === "more than 6 months prior ETS") {
        return "Skillbridge";
      } else {
        return "";
      }
    };


  return (
    <div className="students">
      {students.map((student) => (
        <div key={student.id} className="student">
            <div className="student-head">
            <h2 className="name">
            {student.first_name} {student.last_name}
            </h2>
            <p className="status">{renderStatus(student.status)}</p>
          </div>
          <br/>
          <p>{student.branch}</p>
          <p>ETS: {student.ets.split("T")[0]}</p>
          <br/>
          <p className="contact">Contact:</p>
          <p>{student.email}</p>
          <p>{student.phone}</p>


          {/* 
          <p>LinkedIn: {student.linkedin}</p>
          <p>GitHub: {student.github}</p> */}
          
          {/* <div className="comment">
            {Object.entries(student.comment)
              ? Object.entries(student.comment).map(([key, value]) => (
                  <p key={key}>
                    {key} : {value}
                  </p>
                ))
              : {}}
          </div> */}
          {/* <button onClick={openModal}>|Make a Comment|</button>
          {showModal && (
            <Modal
              onClose={closeModal}
              studentId={student.id}
              students={students}
              setStudents={setStudents}
            />
          )} */}
          <br />
        </div>
      ))}
    </div>
  );
};

export default Student;
