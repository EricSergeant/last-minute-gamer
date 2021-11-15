import { Redirect } from 'react-router-dom';

export const fetchDetail = (index) => {
  return fetch(`https://www.dnd5eapi.co/api/monsters/${index}`)
    .then(response => {
      if (response.status >= 500) {
        console.log('fetch error one:\n response status >=500')
        return <Redirect to='/Error' />
      } else if (response.state >= 400) {
        console.log('fetch error two:\n status >=400')
        return <Redirect to='/Error' />
      } else if (!response.ok) {
        console.log('fetch error three:\n response not ok')
        return <Redirect to='/Error' />
      } else {
        return response.json()
      }
    })
};

export const fetchCR = (selection) => {
  return fetch(`https://www.dnd5eapi.co/api/monsters?challenge_rating=${selection}`)
    .then(response => {
      if (response.status >= 500) {
        console.log('fetch error one:\n response status >=500')
      } else if (response.state >= 400) {
        console.log('fetch error two:\n status >=400')
        return <Redirect to='/Error' />
      } else if (!response.ok) {
        console.log('fetch error three:\n response not ok')
        return <Redirect to='/Error' />
      } else {
        return response.json()
      }
    })
};