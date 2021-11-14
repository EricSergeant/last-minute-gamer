import React, { Component } from 'react';
import '../styles/Favorites.css';


class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myFavorites: [{
        name: "Clay Golem",
        index: "http://localhost:3000/creatures/clay-golem/details"
      }]
    }
  }

  render() {
    console.log('my favorites', this.state.myFavorites)
    const favoriteInfo = this.state.myFavorites.map(fav => {
      return (
        <div className='favs'>
          <h3>My Favorite Monsters</h3>
          {/* <p>{fav.name}</p> */}
          {/* <p>{fav.index}</p> */}
          <p className="fav-text"><a href={fav.index}> {fav.name} </a></p>
        </div>
      )
    })
    return (
      <div className='all-favs'>
        {favoriteInfo}
      </div>
    )
  }

  /*
  return (
    <div className='favs'>
      <h3>My Favorite Monsters</h3>
      <p className="fav-text">Test Fav<a href="http://localhost:3000/creatures/clay-golem/details"> this.state.myFavorites.name </a></p>

    </div>
  )
}
*/

}

/*
const Favorites = () => {
  return (
        <div className='favs'>
          <h3>Favorites go here!</h3>
          <p>placeholder</p>
        </div>
  )
}
*/
export default Favorites;