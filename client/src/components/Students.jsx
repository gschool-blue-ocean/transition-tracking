import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./Modal";
import "../styles/Students.css";
import { BiMessageRoundedAdd } from "react-icons/bi";

const Student = ({ students, setStudents }) => {
  const [showModal, setShowModal] = useState(false);

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [expandedCardId, setExpandedCardId] = useState(null);
  // console.log("from students: ", setStudents);
  // student.branch
  // Tayla's added code with html

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
    if (status === "within 6 months prior ETS" || status === "Clearing") {
      return {
        text: "In Process",
        color: "yellow",
      };
    } else if (status === "Seperated") {
      return {
        text: "Seperated",
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

  const delComment = async (id, commentKey) => {
    try {
      await axios
        .delete(`/api/comment/${id}`, {
          data: { key: commentKey },
        })
        .then(() => {
          setStudents((students) => {
            const studentToUpdate = students.find(
              (student) => student.id === id
            );
            const commentObject = studentToUpdate.comment;
            delete commentObject[`${commentKey}`];
            studentToUpdate.comment = commentObject;
            return [...students];
          });
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={`students ${expandedCardId ? "expanded" : ""}`}>
      {students.map((student) => (
        <div key={student.id} 
        className={`student ${expandedCardId === student.id ? "expanded" : ""}`}
        onClick={() => setExpandedCardId((prevId) => (prevId === student.id ? null : student.id))}
        >
          <div className="student-head">
            <div className="status">
              <p>{renderStatus(student.status).text}</p>
              <div
                className="color-circle"
                style={{ backgroundColor: renderStatus(student.status).color }}
              ></div>
            </div>
            <h2 className="name">
              {student.first_name} {student.last_name}
            </h2>
          </div>
          <p>{student.branch}</p>
          <p>ETS: {student.ets.split("T")[0]}</p>
          <div className="comment">
            <br />
            <p className="contact">Contact:</p>
            <p>{student.email}</p>
            <p>{student.phone}</p>
            <br/>
            
          <p className="urls">LinkedIn:</p>
          <p>{student.linkedin} </p>
          <p className="urls">GitHub:</p>
          <p>{student.github} </p>
          <div className="urls">Appts & Comments
          <button className="comment-btn"onClick={() => openModal(student.id)}>
              <BiMessageRoundedAdd/>
            </button>
            </div>
            <div className="comment">
              {Object.entries(student.comment)
                ? Object.entries(student.comment).map(([key, value]) => (
                    <p key={key}>
                      {key} : {value}
                      <button className="m-[10px] fa fa-trash text-red-600"
                        onClick={() => delComment(student.id, key)
                        }>                     
                      </button>
                    </p>
                  ))
                : {}}
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
