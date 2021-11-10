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
          creatures: data.results[1].name
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
      <div className="app">
        <header className="app-header">
          <h1 className="page-title">Find A Monster</h1>
        </header>
        <main className="app-main">
          {this.state.hasError && <h2>This was an error summoning a creature from the server, please try again.</h2>}
          <h2>Found this:</h2>
          <p>{this.state.creatures}</p>
          {console.log('in render:', this.state.creatures)}

        </main>
      </div>
    )
  }
}

export default App;
