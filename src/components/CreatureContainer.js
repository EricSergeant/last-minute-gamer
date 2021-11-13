import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import CreatureCard from './CreatureCard';
import '../styles/CreatureContainer.css';
import { fetchCR } from '../ApiCalls';

class CreatureContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creaturesByCR: [],
      hasError: false
    }
  }

  componentDidMount() {
    // console.log('NOTE: component did mount');
    fetchCR(this.props.creatureNumber)
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

  componentDidUpdate(previousProps) {
    // console.log('NOTE: component updated');
    // console.log('previous props', previousProps);
    // console.log('this.props', this.props);
    if (this.props.creatureNumber !== previousProps.creatureNumber) {
      fetchCR(this.props.creatureNumber)
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
  }

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
          CR={this.props.creatureNumber}
        />
      );
    })
    return (
      <div className="CreatureContainer">
        <h3>These are your CR {this.props.creatureNumber} creatures:</h3>
        {cardInfo}
      </div>
    );
  }
}

export default CreatureContainer;