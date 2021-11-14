import React from 'react';
import '../styles/Error.css';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='error-text'>
      <h2>Sorry, there has been a server error!  Please try again in a moment.</h2>
      <Link to='/'>Return Home</Link>
    </div>
  )
}

export default Error;