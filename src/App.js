import React, { Component } from 'react';
import './App.css';

import { fetchCrFive } from './ApiCalls.js';

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
      <div>
        <h2>Found this:</h2>
        {/* <p>{this.state.creatures}</p> */}
        {console.log('in render:', this.state.creatures)}
      </div>
    )
  }
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

      </header>
    </div>
  );
}
*/

export default App;
