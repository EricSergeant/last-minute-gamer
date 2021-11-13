import React from 'react';
import '../styles/CreatureCard.css';
import { Link } from 'react-router-dom';

const CreatureCard = ({ index, name, url, CR }) => {
  return (
    <Link to={`/creatures/${index}/details`}>
      <p>Creature Card name: {name} <br></br>
    index: {index} <br></br>
    Challenge Rating: {CR} <br></br>
    and url: {url}<br></br></p>
    </Link>
  )
}

export default CreatureCard;