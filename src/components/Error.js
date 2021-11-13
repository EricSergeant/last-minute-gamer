import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <h2>Sorry, there has been a server error.</h2>
      <Link to='/'>Return Home</Link>
    </div>
  )
}

export default Error;