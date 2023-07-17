import React, { useState } from "react";
import axios from "axios";

function Modal({ onClose, studentId, setStudents }) {
  const [newComment, setNewComment] = useState("");
  const [detail, setDetail] = useState("");

  const handleComment = (e) => {
    setNewComment(e.target.value);
  };

  const handleDetail = (e) => {
    setDetail(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(newComment, detail);
    e.preventDefault();
    axios
      .patch(`/api/students/${studentId}`, {
        comment: `${newComment}:${detail}`,
      })
      .then(() => {
        setStudents((students) => {
          const studentToUpdate = students.find(
            (student) => student.id === studentId
          );
          // const commentkey = comment.split(":")[0];
          // const commentValue = comment.split(":")[1];
          const commentObject = studentToUpdate.comment;
          console.log(commentObject);
          commentObject[`${newComment}`] = `${detail}`;
          studentToUpdate.comment = commentObject;
          return [...students];
        });
      });
    onClose();
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
      <form
        className="max-w-[30%] w-full mx-auto p-10 px-10 rounded-lg"
        style={{
          background:
            "linear-gradient(135deg, #0D0F47 0%, #DE7451 50%, #0D0F47 25%, #DE7451 75%)",
        }}
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="comment">Comment:</label>
          <input
            id="comment"
            className="w-full my-5 py-2"
            value={newComment}
            type="text"
            onChange={handleComment}
            style={{
              height: "50px",
              marginTop: "auto",
              marginBottom: "auto",
              borderRadius: "5px",
              color: "black",
            }}
          />
        </div>
        <div>
          <label htmlFor="detail">Details:</label>
          <input
            id="detail"
            className="w-full my-5 py-2"
            value={detail}
            type="text"
            onChange={handleDetail}
            style={{
              height: "50px",
              marginTop: "auto",
              marginBottom: "auto",
              borderRadius: "5px",
              color: "black",
            }}
          />
        </div>
        <button
          className="w-full my-5 py-2 bg-orange-500 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/40 text-white font-semibold rounded-lg"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
    // <>
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       className="text-black"
    //       placeholder="Appointment: (date)"
    //       type="text"
    //       onChange={handleComment}
    //     />
    //     <button type="submit">Send</button>
    //   </form>
    // </>
  );
}
export default Modal;
