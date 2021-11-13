import React, { Component } from 'react';
import '../styles/CreatureDetail.css';
import { fetchDetail } from '../ApiCalls';

class CreatureDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creatureDetail: [],
      creatureAlignment: '',
      creatureType: '',
      creatureMove: '',
      creatureActions: [],
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
            creatureAlignment: data.alignment[0].toUpperCase() + data.alignment.slice(1).toLowerCase(),
            creatureType: data.type[0].toUpperCase() + data.type.slice(1).toLowerCase(),
            // creatureMove: `${Object.values(data.speed)}`,
            creatureActions: data.actions.map(action => { return `${action.name} ⚔ ` })
          })
        }
      })
      .catch(error => {
        console.log('Error in creature container:', error);
      })
  }

  render() {
    const creatureInfo = this.state.creatureDetail;
    const actionsAll = this.state.creatureDetail.actions
    console.log('creature detail:', this.state.creatureDetail)
    console.log('type', this.state.creatureType);
    console.log('actions', actionsAll)
    // const actionsEach = this.state.creatureDetail.actions.forEach(action => { return action.name })
    // const actionsEach = this.state.creatureDetail.actions[0]
    return (
      <div className="creature-detail-view">
        <h3>{creatureInfo.name}</h3>
        <h3>CR: {creatureInfo.challenge_rating}</h3>
        <ul>
          <li>Type: {this.state.creatureType}</li>
          <li>Subtype: {creatureInfo.subtype ? creatureInfo.subtype : 'n/a'}</li>
          <li>Size: {creatureInfo.size}</li>
          <li>Alignment: {this.state.creatureAlignment}</li>
          <li>Hit Dice: {creatureInfo.hit_dice}</li>
          <li>Hit Points: {creatureInfo.hit_points}</li>
          <li>AC: {creatureInfo.armor_class}</li>
          {/* <li>Movement: {this.state.creatureMove}</li> */}
          <li>XP: {creatureInfo.xp}</li>
          <li>Actions: {this.state.creatureActions}</li>
        </ul>
      </div>
    )
  }

}

export default CreatureDetail;