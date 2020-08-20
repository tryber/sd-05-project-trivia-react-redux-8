import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Player from './components/Player';
import Game from './components/Game';
import Score from './components/Score';
import Ranking from './components/Ranking';
import Settings from './components/Settings';
// import logo from './trivia.png';

import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Player} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/score" component={Score} />
        <Route exact path="/ranking" component={Ranking} />
        <Route exact path="/settings" component={Settings} />
      </Switch>
    </BrowserRouter>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //   </header>
      // </div>
  );
}
