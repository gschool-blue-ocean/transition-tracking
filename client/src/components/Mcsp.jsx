import React from "react";
import Students from "./Students";

export default function Mcsp({ students }) {
  return (
    <div>
      <Dashboard students={students} />
      <Students students={students} />
    </div>
  );
}
