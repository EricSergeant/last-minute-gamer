import React from 'react';

const Main = () => {
  return (
    <div className='main-text'>
      <h3>Welcome to the monster finder!</h3>
      <p>Running late to your D&D game? Need a last-minute encounter for your players?  Just feeling lazy? Click on a Challenge Rating(CR) from the menu above to grab a monster.</p>
      <br></br>
      <br></br>
      <h4>What exactly is a CR and how do I use it?</h4>
      <p>As of the 5th edition of Dungeons and Dragons, CR is a rating system that estimates the threat level of enemies. As a rule of thumb, a party of four characters can defeat an enemy of CR equal to their level without significant trouble.</p>
      <p>CR is also used to track experience and can be used to guide leveling up of characters.</p>
      <p className="main-text">For a more detailed description, grab a copy of the <a href="https://dnd.wizards.com/products/dungeon-masters-guide" id='DMG' target="_blank" rel="noreferrer">Dungeon Master's Guide</a> or check out official information <a href="https://www.dndbeyond.com/sources/basic-rules/monsters#Challenge" id="DNDB" target="_blank" rel="noreferrer">from DNDBeyond</a> regarding CR.</p>
      <p>This page utilizes the open API from https://www.dnd5eapi.co/api/</p>
    </div>
  )
}

export default Main;