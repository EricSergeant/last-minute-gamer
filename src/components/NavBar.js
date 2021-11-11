import React from 'react';
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';
import { fetchCR } from '../ApiCalls';

const NavBar = ({ fetchCR }) => {
  return (
    <div className="nav">
      <p> nav bar goes here</p>
      <button>CR5</button>
    </div>
  )
}

export default NavBar;