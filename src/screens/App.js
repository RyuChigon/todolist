import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainScreen from './MainScreen.js';
import WriteScreen from './WriteScreen.js';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={MainScreen} />
        <Route path="/write" component={WriteScreen} />
      </Router>
    ) 
  }
}

export default App;