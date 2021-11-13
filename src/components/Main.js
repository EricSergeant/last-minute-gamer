import React from 'react';
import '../styles/Main.css';

const Main = () => {
  return (
    <div className='main'>
      <h3>Welcome to the monster finder!</h3>
      <p>Please choose a Challenge Rating(CR) from the drop-dowm menu.</p>
      <br></br>
      <h4>What exactly is a CR and how do I use it?</h4>
      <p>As of the 5th edition of Dungeons and Dragons, CR is a rating system that estimates the threat level of enemies. As a rule of thumb, a party of four characters can defeat an enemy of CR equal to their level without significant trouble.</p>
      <p>CR is also used to track experience and can be used to guide leveling up of characters.</p>
      <p>For a more detailed description, grab a copy of the <a href="https://dnd.wizards.com/products/dungeon-masters-guide" target="_blank" rel="noreferrer">Dungeon Master's Guide</a> or check out official information <a href="https://www.dndbeyond.com/sources/basic-rules/monsters#Challenge" target="_blank" rel="noreferrer">from DNDBeyond</a> regarding CR.</p>
    </div>
  )
}

export default Main;