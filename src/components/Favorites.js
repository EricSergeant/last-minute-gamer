import React, { Component } from 'react';
import '../styles/Favorites.css';

export const addFavorite = (name, index) => {
  // this.setState.myFavorites.push(name, index)
  myFavorites.push({ name: name, index: index })
  console.log('updated favs', myFavorites)
}

const myFavorites = [
  {
    name: "Clay Golem",
    index: "http://localhost:3000/creatures/clay-golem/details"
  },
  {
    name: "Barbed Devil",
    index: "http://localhost:3000/creatures/barbed-devil/details"
  }];

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myFavorites: [{
        name: "Clay Golem",
        index: "http://localhost:3000/creatures/clay-golem/details"
      },
      {
        name: "Barbed Devil",
        index: "http://localhost:3000/creatures/barbed-devil/details"
      }]
    }
  }

  // addFavorite = (name, index) => {
  //   // this.setState.myFavorites.push(name, index)
  //   console.log('updated favs', this.state.myFavorites)
  // }

  render() {
    // console.log('my favorites', this.state.myFavorites)
    const favoriteInfo = myFavorites.map(fav => {
      return (
        <div className='favs'>
          {/* <h3>My Favorite Monsters</h3> */}
          {/* <p>{fav.name}</p> */}
          {/* <p>{fav.index}</p> */}
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