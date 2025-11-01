import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const role = localStorage.getItem('role');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <h3>JanSeva Portal</h3>
      <div className="nav-links">
        {role === 'citizen' && <Link to="/report">Report Issue</Link>}
        {(role === 'officer' || role === 'admin') && <Link to="/view-issues">View Issues</Link>}
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;