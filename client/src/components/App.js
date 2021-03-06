import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Flash from './Flash';
import Home from './Home';
import About from './About.jsx';
import Resume from './Resume.jsx';
import Fun from './Fun'
import Snakes from './Snake';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/resume' component={Resume} />
            <Route exact path='/fun' component={Fun} />
            <Route exact path='/snake' component={Snakes} />
            <Route component={NoMatch} />
          </Switch>
      </div>
    );
  }
}

export default App;
