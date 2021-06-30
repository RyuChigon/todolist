import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainScreen from './MainScreen.js';
import ViewScreen from './ViewScreen.js';
import WriteScreen from './WriteScreen.js';
import PWCheckScreen from './PWCheckScreen.js';
import Header from '../components/Header/Header.js';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Route exact path="/" component={MainScreen} />
        <Route path="/write" component={WriteScreen} />
        <Route path="/view" component={ViewScreen} />
        <Route path="/check" component={PWCheckScreen}/>
      </Router>
    ) 
  }
}

export default App;