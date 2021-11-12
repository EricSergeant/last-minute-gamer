import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import CreatureCard from './CreatureCard';
import '../styles/CreatureContainer.css';
import { fetchCR, fetchCrFive } from '../ApiCalls';

class CreatureContainer extends Component {
  constructor() {
    super();
    this.state = {
      creaturesByCR: [],
      hasError: false
    }
  }

  componentDidMount() {
    fetchCR(3)
      // fetchCrFive()
      .then(data => {
        if (data === undefined) {
          this.setState({
            hasError: true
          })
        } else {
          this.setState({
            creaturesByCR: data.results
          })
        }
      })
      .catch(error => {
        console.log('Error in creature container:', error);
      })
  }

  // returnHome = () => {
  //   this.setState({
  //     creaturesByCR: [],
  //     hasError: false
  //   })
  // }

  render() {
    if (this.state.hasError) {
      return <Redirect to='/Error' />
    }
    console.log(this.state.creaturesByCR)
    const creatureData = this.state.creaturesByCR;
    const cardInfo = creatureData.map(creature => {
      return (
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
        <h3>These are your CR 1 creatures:</h3>
        {cardInfo}
      </div>
    );
  }
}
/*
const CreatureContainer = ({ creatureData }) => {
  console.log('creature data', creatureData)
  const cardInfo = creatureData.map(creature => {
    return (
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
      <h3>These are your CR 1 creatures:</h3>
      {cardInfo}
    </div>
  );
}
*/

export default CreatureContainer;