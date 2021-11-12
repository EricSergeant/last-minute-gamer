import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <h2>There has been an error.</h2>
      <Link to='/'>Return Home</Link>
    </div>
  )
}

export default Error;