import React, { useState } from "react";
import axios from "axios";

function Modal({ onClose, studentId, setStudents }) {
  const [comment, setComment] = useState("");
  const handleComment = (e) => {
    console.log(e.target.value);
    setComment(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`/api/students/${studentId}`, {
        comment: comment,
      })
      .then(() => {
        setStudents((students) => {
          const studentToUpdate = students.find(
            (student) => student.id === studentId
          );
          studentToUpdate.comment = comment;
          return [...students];
        });
      });
    onClose();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="text-black"
          placeholder="Enter a comment..."
          placeholder="Appointment: (date)"
          type="text"
          onChange={handleComment}
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
}
export default Modal;
