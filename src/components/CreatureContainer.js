import React from 'react';
import CreatureCard from './CreatureCard';
// import '../styles/CreatureContainer.css';

const CreatureContainer = ({ creatureData }) => {
  console.log('creature data', creatureData)
  const cardInfo = creatureData.map(creature => {
    return (
      // <p>I'm in creature data: {creature.name}</p>
      <CreatureCard
        index={creature.index}
        name={creature.name}
        url={creature.url}
        key={creature.index}
      />
    );
  })

  return (
    <div className="CreatureContainer">
      {cardInfo}
    </div>
  );
}

export default CreatureContainer;