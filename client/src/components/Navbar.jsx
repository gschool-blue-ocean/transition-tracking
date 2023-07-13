import React from 'react'
import Dropdown from './Dropdown'

function Navbar({ cohort, students, setStudents, isDDOpen, setIsDDOpen }) {
  return (
    <div className='flex'>
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
            <div>
              <button className='mx-12'>Modal</button>
            </div>
    </div>
  );
}

export default Navbar;
