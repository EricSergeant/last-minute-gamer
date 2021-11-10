import React, { Component } from 'react';
import '../styles/App.css';
import CreatureContainer from './CreatureContainer';
import Main from './Main';

import { fetchCrFive } from '../ApiCalls.js';

import { Route, Switch } from 'react-router-dom';

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
          // API is not dynamic, only pulling CR5 for now
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
      <div className="app">
        <header className="app-header">
          <h1 className="page-title">Find A Monster</h1>
        </header>
        <main className="app-main">
          {this.state.hasError && <h2>This was an error summoning a creature from the server, please try again.</h2>}
          {/* <h2>Found this:</h2>
          <p>{this.state.creatures}</p>
          {console.log('in render:', this.state.creatures)} */}
          <Switch>
            <Route exact path="/" render={() =>
              <Main />
            }
            />
            {/* this is still using hardcoded info below */}
            <Route exact path="/CR5" render={() =>
              <CreatureContainer
                creatureData={this.state.creatures}
              />
            }
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;
