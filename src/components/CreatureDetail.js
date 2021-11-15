import React, { Component } from 'react';
import '../styles/CreatureDetail.css';
import { fetchDetail } from '../ApiCalls';
import { addFavorite } from './Favorites';

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
    return (
      <div className="creature-detail-view">
        <h3>{creatureInfo.name}</h3>
        <h3>CR: {creatureInfo.challenge_rating}</h3>
        <p>Type: {this.state.creatureType}</p>
        <p>Subtype: {creatureInfo.subtype ? creatureInfo.subtype : 'n/a'}</p>
        <p>Size: {creatureInfo.size}</p>
        <p>Alignment: {this.state.creatureAlignment}</p>
        <p>Hit Dice: {creatureInfo.hit_dice}</p>
        <p>Hit Points: {creatureInfo.hit_points}</p>
        <p>AC: {creatureInfo.armor_class}</p>
        <p>XP: {creatureInfo.xp}</p>
        <p>Actions: <br></br>{this.state.creatureActions}</p>
        <button className="add-fav-btn" onClick={() => addFavorite(creatureInfo.name, creatureInfo.challenge_rating, `creatures/${creatureInfo.index}/details`)}>Add Favorite</button>
      </div>
    )
  }

}

export default CreatureDetail;