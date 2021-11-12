import React, { Component, Switch } from 'react';
import '../styles/App.css';
import CreatureContainer from './CreatureContainer';
import Main from './Main';
import NavBar from './NavBar';
import Error from './Error';

import { fetchCrFive, fetchCR } from '../ApiCalls.js';

import { Route } from 'react-router-dom';


/*
class App extends Component {
  constructor() {
    super();
    this.state = {
      creatures: [],
      hasError: false
    }
  }

  componentDidMount() {
    // API is not dynamic, only pulling CR5 for now
    fetchCrFive()
      .then(data =>
        this.setState({
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
  */

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="page-title">Find A Monster</h1>
        <NavBar />
      </header>
      <main className="app-main">
        {/* {this.state.hasError && <h2>This was an error summoning a creature from the server, please try again.</h2>} */}
        {/* <h2>Found this:</h2>
          <p>{this.state.creatures}</p>
          {console.log('in render:', this.state.creatures)} */}
        {/* <Switch> */}
        <Route exact path="/" render={() =>
          <div>
            <Main />
          </div>
        }
        />

        {/* <Route exact path="/creatures/CR1" render={() =>
            < CreatureContainer />}
          />
          <Route exact path="/creatures/CR2" render={() =>
            < CreatureContainer />}
          />
          <Route exact path="/creatures/CR3" render={() =>
            < CreatureContainer fetchCR={fetchCR(3)} />}
          /> */}
        <Route exact path="/creatures/:CR" render={(routeProps) => {
          console.log('routeProps', routeProps);
          return (
            < CreatureContainer creatureNumber={routeProps.match.params.CR} />
          )
        }
        }
        />

        <Route exact path="/creatures/:CR/details" render={(routeProps) => {
          console.log('routeProps', routeProps);

        }
        }
        />

        <Route path='/error' render={() =>
          <Error />}
        />


        {/* 
          The code below works but flashes error on each page load:
          <Route path="*" render={() =>
            <Error />}
          /> */}

        {/* </Switch> */}
      </main>
    </div>
  )
}

export default App;
