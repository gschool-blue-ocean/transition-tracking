import React from "react";
import Student from "../Student.jsx";

export default function Mcsp({ students }) {
  return (
    <div>
      MCSP
      <Student students={students} />
    </div>
  );
}
