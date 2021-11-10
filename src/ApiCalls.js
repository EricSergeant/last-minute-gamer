// import { Redirect } from 'react-router-dom';

export const fetchCrFive = () => {
  // return fetch("https://www.dnd5eapi.co/api/monsters/barbed-devil")
  return fetch("https://www.dnd5eapi.co/api//monsters?challenge_rating=5")
    .then(results => results.json())
};