import React, { useState } from "react";

const AddStudentModal = ({ isOpen, onClose, addStudent }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [branch, setBranch] = useState("");
  const [etsDate, setEtsDate] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [additionalComments, setAdditionalComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      first_name: firstName,
      last_name: lastName,
      branch,
      ets: etsDate,
      email,
      phone,
      linkedin,
      github,
      comment: {
        additional: additionalComments,
      },
    };
    addStudent(newStudent);
    setFirstName("");
    setLastName("");
    setBranch("");
    setEtsDate("");
    setEmail("");
    setPhone("");
    setLinkedin("");
    setGithub("");
    setAdditionalComments("");
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "show" : ""}`}>
      <div className="modal-content">
        <h2>Add Student</h2>
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
          <label>
            Branch:
            <input
              type="text"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              required
            />
          </label>
          <label>
            ETS Date:
            <input
              type="date"
              value={etsDate}
              onChange={(e) => setEtsDate(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Phone:
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </label>
          <label>
            LinkedIn URL:
            <input
              type="text"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
            />
          </label>
          <label>
            GitHub URL:
            <input
              type="text"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
            />
          </label>
          <label>
            Additional Comments:
            <textarea
              value={additionalComments}
              onChange={(e) => setAdditionalComments(e.target.value)}
            />
          </label>
          <button type="submit">Add Student</button>
        </form>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default AddStudentModal;
