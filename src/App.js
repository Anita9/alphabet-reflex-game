/* eslint-disable no-useless-constructor */
import { Component } from 'react';

import {Button, TextField} from '@material-ui/core';

import GameDifficulties from './components/GameDifficulties/gameDifficulties';
import Score from './components/Score/score';
import Letters from './components/Letters/letters';

import './App.css';

class App extends Component {
  
  render() {

    return (
      <div className="App">
        <GameDifficulties />
        <Score />
        <Button variant="outlined" color="primary" className="game-button">Start Game</Button>
        <div className="number">
          {Math.floor(Math.random() * 26)}
        </div>
        <TextField variant="outlined" label="Input Letter" color="primary" className="input-letter"/>
        <Letters/>
      </div>
    );
  }
  
}

export default App;
