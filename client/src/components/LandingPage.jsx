import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <h1> Landing Page Here!</h1>
      <Link to="/mcsp">
        <button>MCSP</button>
      </Link>
    </div>
  )
}

export default LandingPage
