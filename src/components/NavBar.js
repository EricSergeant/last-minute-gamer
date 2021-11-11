import React from 'react';
import '../styles/NavBar.css';
import { NavLink } from 'react-router-dom';
import { fetchCR } from '../ApiCalls';

const NavBar = ({ fetchCR }) => {
  return (
    <div className="nav">
      <p> nav bar goes here</p>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/creatures'>CR1 & CR2</NavLink>
    </div>
  )
}

export default NavBar;