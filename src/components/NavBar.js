import React from 'react';
import '../styles/NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="nav">
      <NavLink className='home-nav' to='/'>Home</NavLink>
      {/* <NavLink to='/creatures/allCR'>allCRs</NavLink> */}
      <NavLink className='fav-nav' id='favorites' to='/favorites'>Favs</NavLink>
      <NavLink className='CR1-nav' to='/creatures/1'>CR1</NavLink>
      <NavLink className='CR2-nav' to='/creatures/2'>CR2</NavLink>
      <NavLink className='CR3-nav' to='/creatures/3'>CR3</NavLink>
      <NavLink className='CR4-nav' to='/creatures/4'>CR4</NavLink>
      <NavLink className='CR5-nav' to='/creatures/5'>CR5</NavLink>
      <NavLink className='CR6-nav' to='/creatures/6'>CR6</NavLink>
      <NavLink className='CR7-nav' to='/creatures/7'>CR7</NavLink>
      <NavLink className='CR8-nav' to='/creatures/8'>CR8</NavLink>
      <NavLink className='CR9-nav' to='/creatures/9'>CR9</NavLink>
      <NavLink className='CR10-nav' to='/creatures/10'>CR10</NavLink>
    </div>
  )
}

export default NavBar;