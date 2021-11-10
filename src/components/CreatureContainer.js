import React from 'react';
// import '../styles/CreatureContainer.css';

const CreatureContainer = ({ creatureData }) => {
  console.log('creature data', creatureData)
  const cardInfo = creatureData.map(creature => {
    return (
      <p>I'm in creature data: {creature.name}</p>
    );
  })

  return (
    <div className="CreatureContainer">
      {cardInfo}
    </div>
  );
}

export default CreatureContainer;