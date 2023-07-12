import React, { useEffect } from "react";
import mockup from "/assets/mockup.png";
import { Link } from "react-router-dom";
import "../styles/Landing.css";

function LandingPage() {
  useEffect(() => {
    const typingText = document.getElementById("typing-text");
    if (typingText) {
      const words = [
        "Track with confidence",
        "Inspire for greatness",
        "Empower through action",
      ];
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
          const typingSpeed = isDeleting ? 50 : 150;
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

        <div className="btn-group">
          <button
            type="button"
            className="btn btn-danger dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            id="dropdown"
          >
            MCSP...
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" id="16" href="/mcsp">
                MCSP16
              </a>
            </li>
            <li>
              <a className="dropdown-item" id="17" href="/mcsp">
                MCSP17
              </a>
            </li>
            <li>
              <a className="dropdown-item" id="18" href="/mcsp">
                MCSP18
              </a>
            </li>
            <li>
              <a className="dropdown-item" id="19" href="/mcsp">
                MCSP19
              </a>
            </li>
            <li>
              <a className="dropdown-item" id="20" href="/mcsp">
                MCSP20
              </a>
            </li>
            <li>
              <a className="dropdown-item" id="21" href="/mcsp">
                MCSP21
              </a>
            </li>
            <li>
              <a className="dropdown-item" id="22" href="/mcsp">
                MCSP22
              </a>
            </li>
            <li>
              <a className="dropdown-item" id="23" href="/mcsp">
                MCSP23
              </a>
            </li>
            <li>
              <a className="dropdown-item" id="24" href="/mcsp">
                MCSP24
              </a>
            </li>
            <li>
              <a className="dropdown-item" id="25" href="/mcsp">
                MCSP25
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" id="createCohort" href="#">
                Create a New Cohort
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mockup-wrapper">
        <img src={mockup} alt="mockup" className="mockup" />
      </div>
    </div>
  );
}

export default LandingPage;
