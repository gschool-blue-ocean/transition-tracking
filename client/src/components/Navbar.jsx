import React from 'react'
import '../styles/Navbar.css'
import Dropdown from './Dropdown'

function Navbar({ cohort, students, setStudents, isDDOpen, setIsDDOpen }) {
  return (
    <div>
      <div className="header">
        <div className='logo'></div>
        <div className="nav-bar">
            <div className="nav-items">
             <div className="nav-item1">
                Dashboard
             </div>   
             <div className="nav-item2">
                News 
             </div>   
             <div className="nav-item3">
                Help
             </div>   
            </div>
        </div>
        <div className="btn-group">
          <button
            onClick={() => setIsDDOpen((prev) => !prev)}
          >
          MCSP.. 
          </button>

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
              <hr className="dropdown-divider" />
             </li>
             <li>
               <a className="dropdown-item" id="createCohort" href="#">
                 Create a New Cohort
               </a>
              </li>
            </ul>
            )
          }
            </div>
    </div>
        
            <div>
              <button className='mx-12'>Modal</button>
            </div>
    </div>
  );
}

export default Navbar;