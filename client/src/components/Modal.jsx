import React, { useState } from "react";
import axios from "axios";
import "../styles/modal.css";

function Modal({ onClose, studentId, setStudents }) {
  const [newComment, setComment] = useState("");
  const [detail, setDetail] = useState("");

  const handleComment = (e) => {
    console.log(e.target.value);
    setComment(e.target.value);
  };

  const handleDetail = (e) => {
    setDetail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = axios
      .patch(`/api/students/${studentId}`, {
        comment: `${newComment}:${detail}`,
      })
      .then(() => {
        setStudents((students) => {
          const studentToUpdate = students.find(
            (student) => student.id === studentId
          );
          const commentObject = studentToUpdate.comment;
          commentObject[`${newComment}`] = `${detail}`;
          console.log("frontend: ", commentObject);
          studentToUpdate.comment = commentObject;
          return [...students];
        });
      });
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="fixed-modal">
      <form className="modal-form" onSubmit={handleSubmit}>
        <div>
          <label className="label" htmlFor="comment">
            Comment:
          </label>
          <input
            id="comment"
            className="input"
            value={newComment}
            type="text"
            onChange={handleComment}
          />
        </div>
        <div>
          <label className="label" htmlFor="detail">
            Details:
          </label>
          <input
            id="detail"
            className="input"
            value={detail}
            type="text"
            onChange={handleDetail}
          />
        </div>
        <div className="buttons">
          <button className="cancel-btn" type="button" onClick={handleCancel}>
            Cancel
          </button>
          <button className="submit-btn" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Modal;
