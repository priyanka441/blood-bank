import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navbarStyle = {
    background: '#f9eced',
    color: 'black',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '2px solid black', // Add a white border line
  };

  const linkStyle = {
    color: 'black',
    textDecoration: 'none',
    margin: '0 10px',
  };

  return (
    <div style={navbarStyle}>
      <div>Blood Bank</div>
      <div>
        
      <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/login" style={linkStyle}>Login</Link>
        <Link to="/register" style={linkStyle}>Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
