import React from 'react';
import '../styles/App.css';
import CreatureContainer from './CreatureContainer';
import CreatureDetail from './CreatureDetail';
import Main from './Main';
import NavBar from './NavBar';
import Error from './Error';
import Favorites from './Favorites';
import '../styles/castle.jpg';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="page-title">Find A Monster</h1>
        <NavBar />
      </header>
      <main className="app-main">
        <Switch>
          <Route exact path="/" render={() =>
            <div>
              <Main />
            </div>
          }
          />

          <Route exact path="/creatures/:CR" render={(routeProps) => {
            return (
              < CreatureContainer creatureNumber={routeProps.match.params.CR} />
            )
          }
          }
          />

          <Route exact path="/creatures/:Creature/details" render={(detailProps) => {
            return (
              < CreatureDetail creatureDetail={detailProps.match.params.Creature} />
            )
          }
          }
          />

          <Route exact path="/favorites" render={() =>
            <Favorites />}
          />

          <Route component={Error} />

        </Switch>
      </main>
    </div>
  )
}

export default App;
