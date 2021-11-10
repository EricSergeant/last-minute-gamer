import React, { Component } from 'react';
import '../styles/App.css';

import { fetchCrFive } from '../ApiCalls.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      creatures: [],
      hasError: false
    }
  }

  componentDidMount() {
    fetchCrFive()
      .then(data =>
        this.setState({
          // creatures: data.name
          creatures: data.results
        })
      )
      .catch(error => {
        console.log('Error getting creature:', error)
        this.setState({
          hasError: true
        })
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Found this:</h2>
          {/* <p>{this.state.creatures.name}</p> */}
          {console.log('in render:', this.state.creatures)}
        </header>
        <main className="App-main">

        </main>
      </div>
    )
  }
}

export default App;
