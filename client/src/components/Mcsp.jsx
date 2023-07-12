import React from "react";
import Students from "./Students";
import Dropdown from "./Dropdown";

export default function Mcsp({ cohort, students, setStudents, isDDOpen, setIsDDOpen }) {
	return (
		<div>
			<div className="btn-group">
				<button onClick={() => setIsDDOpen((prev) => !prev)}>MCSP..</button>

				{isDDOpen && (
					<ul className="dropdown-menu">
						<Dropdown
							cohort={cohort}
							students={students}
							setStudents={setStudents}
							isDDOpen={isDDOpen}
							setIsDDOpen={setIsDDOpen}
						/>
						<li>
							<a className="dropdown-item" id="createCohort" href="#">
								Create a New Cohort
							</a>
						</li>
						<li>
							<hr className="dropdown-divider" />
						</li>
					</ul>
				)}
				<Students students={students} setStudents={setStudents} />
			</div>
		</div>
	);
}
