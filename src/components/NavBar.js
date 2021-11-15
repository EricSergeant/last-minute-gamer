import React from 'react';
import '../styles/NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="nav">
      <NavLink className='home-nav' to='/'>Home</NavLink>
      {/* <NavLink to='/creatures/allCR'>allCRs</NavLink> */}
      <NavLink className='fav-nav' id='favorites' to='/favorites'>Favs</NavLink>
      <NavLink to='/creatures/1'>CR1</NavLink>
      <NavLink to='/creatures/2'>CR2</NavLink>
      <NavLink to='/creatures/3'>CR3</NavLink>
      <NavLink to='/creatures/4'>CR4</NavLink>
      <NavLink to='/creatures/5'>CR5</NavLink>
      <NavLink to='/creatures/6'>CR6</NavLink>
      <NavLink to='/creatures/7'>CR7</NavLink>
      <NavLink to='/creatures/8'>CR8</NavLink>
      <NavLink to='/creatures/9'>CR9</NavLink>
      <NavLink to='/creatures/10'>CR10</NavLink>
    </div>
  )
}

export default NavBar;