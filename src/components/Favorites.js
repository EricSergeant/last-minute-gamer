import React from 'react';
import '../styles/Favorites.css';

const myFavorites = [];
export const addFavorite = (nameP, challenge_rating, indexP) => {
  if (myFavorites.length === 0) {
    myFavorites.push({ name: nameP, index: indexP, CR: challenge_rating, key: indexP })
  }
  if (!myFavorites.find(creature => creature.name.includes(nameP))) {
    myFavorites.push({ name: nameP, index: indexP, CR: challenge_rating, key: indexP })
  }
}

const Favorites = () => {
  const favoriteInfo = myFavorites.map(fav => {
    return (
      <div className='favs' key={fav.key}>
        <p className="fav-text"><a href={fav.index}> {fav.name} </a></p>
        <p>CR{fav.CR}</p>
      </div>
    )
  })
  return (
    <div className='all-favs'>
      <h3>My Favorite Monsters</h3>
      {favoriteInfo}
    </div>
  )
}


export default Favorites;