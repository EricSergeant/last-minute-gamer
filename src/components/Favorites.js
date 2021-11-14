import React from 'react';
import '../styles/Favorites.css';

const myFavorites = [];
export const addFavorite = (nameP, indexP) => {
  if (myFavorites.length === 0) {
    myFavorites.push({ name: nameP, index: indexP, key: indexP })
  }
  if (!myFavorites[0].index.includes(indexP)) {
    myFavorites.push({ name: nameP, index: indexP, key: indexP })
  }
  // console.log('updated favs', myFavorites)
  // console.log('myfavs', myFavorites[0].index)
}

const Favorites = () => {
  const favoriteInfo = myFavorites.map(fav => {
    return (
      <div className='favs' key={fav.key}>
        <p className="fav-text"><a href={fav.index}> {fav.name} </a></p>
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