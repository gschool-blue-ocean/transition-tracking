import React from "react";
import Students from "./Students";


export default function Mcsp({ students }) {
  return (
    <div>
      MCSP
      <div>
        <Students students={students} />
      </div>

    </div>
  );
}
