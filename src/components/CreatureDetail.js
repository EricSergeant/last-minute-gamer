import React, { Component } from 'react';
import '../styles/CreatureDetail.css';
import { fetchDetail } from '../ApiCalls';

class CreatureDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creatureDetail: [],
      hasError: false
    }
  }

  componentDidMount() {
    console.log('component did mount here in detail', this.props.creatureDetail);
    fetchDetail(this.props.creatureDetail)
      .then(data => {
        if (data === undefined) {
          this.setState({
            hasError: true
          })
        } else {
          this.setState({
            creatureDetail: data
          })
        }
      })
      .catch(error => {
        console.log('Error in creature container:', error);
      })
  }

  render() {
    console.log('creature detail:', this.state.creatureDetail)
    const creatureInfo = this.state.creatureDetail;
    // const movement = Object.values(this.state.creatureDetail.speed);
    console.log('speed', creatureInfo.speed)
    return (
      <div className="creature-detail-view">
        <h3>{creatureInfo.name}</h3>
        <ul>
          <li>CR: {creatureInfo.challenge_rating}</li>
          <li>Alignment: {creatureInfo.alignment}</li>
          <li>Type: {creatureInfo.type}</li>
          <li>Subtype: {creatureInfo.subtype}</li>
          <li>Size: {creatureInfo.size}</li>
          {/* <li>Speed: {movement}</li> */}
          <li>AC: {creatureInfo.armor_class}</li>
          <li>Hit Dice: {creatureInfo.hit_dice}</li>
          <li>Hit Points: {creatureInfo.hit_points}</li>
          <li>XP: {creatureInfo.xp}</li>
        </ul>
      </div>
    )
  }

}

export default CreatureDetail;