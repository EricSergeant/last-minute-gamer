import React, { Component } from 'react';
import '../styles/CreatureDetail.css';
import { fetchDetail } from '../ApiCalls';

class CreatureDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creatureDetail: [],
      creatureType: '',
      hasError: false
    }
  }

  componentDidMount() {
    // console.log('component did mount here in detail', this.props.creatureDetail);
    fetchDetail(this.props.creatureDetail)
      .then(data => {
        if (data === undefined) {
          this.setState({
            hasError: true
          })
        } else {
          this.setState({
            creatureDetail: data,
            creatureType: data.type[0].toUpperCase() + data.type.slice(1).toLowerCase(),
            creatureMove: [Object.keys(data.speed)],
            creatureActions: data.actions.map(action => { return action.name })
          })
        }
      })
      .catch(error => {
        console.log('Error in creature container:', error);
      })
  }

  // creatureTypeUpper = (string) => {
  //   return string[0].toUpperCase() + string.slice(1).toLowerCase()
  // }

  render() {
    console.log('creature detail:', this.state.creatureDetail)
    const creatureInfo = this.state.creatureDetail;
    console.log('type', this.state.creatureType);
    console.log('move', this.state.creatureMove);
    // const movement = this.state.creatureDetail.speed;
    const actionsAll = this.state.creatureDetail.actions
    // const actionsEach = this.state.creatureDetail.actions.forEach(action => { return action.name })
    // const actionsEach = this.state.creatureDetail.actions[0]
    // console.log('speed', movement)
    console.log('actions', actionsAll)
    // console.log('actions', actionsEach)
    return (
      <div className="creature-detail-view">
        <h3>{creatureInfo.name}</h3>
        <ul>
          <li>CR: {creatureInfo.challenge_rating}</li>
          <li>Alignment: {creatureInfo.alignment}</li>
          <li>Type: {this.state.creatureType}</li>
          <li>Subtype: {creatureInfo.subtype ? creatureInfo.subtype : 'n/a'}</li>
          <li>Size: {creatureInfo.size}</li>
          {/* <li>Speed: {movement}</li> */}
          <li>Hit Dice: {creatureInfo.hit_dice}</li>
          <li>Hit Points: {creatureInfo.hit_points}</li>
          <li>AC: {creatureInfo.armor_class}</li>
          <li>Movement: {this.state.creatureMove}</li>
          <li>Actions: {this.state.creatureActions}</li>
          <li>XP: {creatureInfo.xp}</li>
        </ul>
      </div>
    )
  }

}

export default CreatureDetail;