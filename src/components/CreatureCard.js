import React from 'react';
// import '../styles/CreatureCard.css';

const CreatureCard = ({ index, name, url, key }) => {
  return (
    <p>Creature Card name: {name} <br></br>
    index: {index} <br></br>
    and url: {url}<br></br></p>
  )
}

export default CreatureCard;