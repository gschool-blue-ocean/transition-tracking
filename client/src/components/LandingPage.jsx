import React, { useEffect } from "react";
import mockup from "/assets/mockup.png";
import { Link } from "react-router-dom";
import "../styles/Landing.css";
import Dropdown from "./Dropdown";
import CreateCohort from "./CreateCohort";

function LandingPage({ cohort, students, setStudents, isDDOpen, setIsDDOpen, setCohort }) {
	// const [isModalOpen, setModalOpen] = useState(false);

	// const openModal = () => {
	// 	setModalOpen(true);
	// };

	const handleClick = (id) => {
		fetch(`api/cohort/${id}`)
		  .then((res) => res.json())
		  .then((students) => {
			setStudents(students);
		  });
	
		setIsDDOpen(false);
	  };
	

	useEffect(() => {
		const typingText = document.getElementById("typing-text");
		if (typingText) {
			const words = ["Track with confidence", "Inspire for greatness", "Empower through action"];
			let currentWordIndex = 0;
			let isDeleting = false;
			let currentText = "";

			const type = () => {
				const word = words[currentWordIndex];
				currentText = isDeleting
					? word.substring(0, currentText.length - 1)
					: word.substring(0, currentText.length + 1);

				typingText.textContent = currentText;

				if (!isDeleting && currentText === word) {
					isDeleting = true;
					setTimeout(type, 1500);
				} else if (isDeleting && currentText === "") {
					isDeleting = false;
					currentWordIndex = (currentWordIndex + 1) % words.length;
					setTimeout(type, 500);
				} else {
					const typingSpeed = isDeleting ? 50 : 90;
					setTimeout(type, typingSpeed);
				}
			};

			type();
		}
	}, []);

	return (
		<div className="landing">
			<div className="hero">
				<h1 className="title">
					<span id="static-text">Transform Student Success:</span>
					<br />
					<span id="typing-text"></span>
				</h1>
				<h2 className="desc">
					Effortlessly track and support student progress with
					<br />
					Galvanize's user-friendly platform. Stay informed on
					<br />
					ETS dates, transition status, appointments, and more,
					<br />
					empowering you to make informed decisions
					<br />
					and drive student success.
				</h2>
			</div>

			<div className="mcsp">
				<h1 className="get-started">Get Started by selecting a cohort</h1>

				<ul className="menu1">
					<li>
						<a className="important"href="#">MCSP...</a>
						<ul>
						<div className="cohort-land">
					{cohort.map((cohorts) => (
						<Link key={cohorts.cohort_id} to="/mcsp">
						<div className="cohorts-land">
							<button
							className="cohortBtn1"
							onClick={() => handleClick(cohorts.cohort_id)}
							>
							{cohorts.cohort_id}
							</button>
						</div>
						</Link>
					))}
					</div>
							{/* <li>
								<a className="dropdown-item" id="createCohort">
									<CreateCohort />
								</a>
							</li> */}
						</ul>
					</li>
				</ul>

				<div className="btn-group"></div>
				<div>
					<CreateCohort setCohort={setCohort} />
				</div>
			</div>

			<div className="mockup-wrapper">
				<img src={mockup} alt="mockup" className="mockup" />
			</div>
		</div>
	);
}

export default LandingPage;