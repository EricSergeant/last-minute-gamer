// import { Redirect } from 'react-router-dom';

export const fetchCrFive = () => {
  // return fetch("https://www.dnd5eapi.co/api/monsters/barbed-devil")
  return fetch("https://www.dnd5eapi.co/api//monsters?challenge_rating=1")
    .then(results => results.json())
};

export const fetchCR = (selection) => {
  return fetch(`https://www.dnd5eapi.co/api//monsters?challenge_rating=${selection}`)
    .then(response => {
      if (response.status >= 500) {
        console.log('fetch error one:\n response status >=500')
      } else if (!response.ok) {
        console.log('fetch error two:\n response not ok')
      } else {
        return response.json()
      }
    })
};