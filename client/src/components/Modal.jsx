import React, { useState } from "react";
import axios from "axios";

function Modal({ onClose, studentId, setStudents }) {
	const [comment, setComment] = useState("");
	console.log("from modal: ", setStudents);
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
				console.log(setStudents);
				setStudents((students) => {
					const studentToUpdate = students.find((student) => student.id === studentId);
					const commentkey = comment.split(":")[0];
					const commentValue = comment.split(":")[1];
					const commentObject = studentToUpdate.comment;
					commentObject[`${commentkey}`] = `${commentValue}`;
					studentToUpdate.comment = commentObject;
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
