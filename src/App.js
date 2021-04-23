/* eslint-disable no-useless-constructor */
import { Component } from 'react';

import {Button, TextField} from '@material-ui/core';

import GameDifficulties from './components/GameDifficulties/gameDifficulties';
import Score from './components/Score/score';
import Letters from './components/Letters/letters';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isEasyGame: false,
      isMediumGame: false,
      isHardGame: false,
      number: null,
      timerId: null,
      isGameInProgress: false
    }
  }

  getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  onRadioButtonClick = difficulty => {
    if(difficulty === 'easy') {
      this.setState({
        isEasyGame: true,
        isMediumGame: false,
        isHardGame: false
      })
    } else if(difficulty === 'medium') {
      this.setState({
        isEasyGame: false,
        isMediumGame: true,
        isHardGame: false
      })
    } else {
      this.setState({
        isEasyGame: false,
        isMediumGame: false,
        isHardGame: true
      })
    }
  }

  setTimer = time => {
    let timerId = setInterval(() => {this.setState({
      number: this.getRandomNumber(1, 27)
    })}, time);

    this.setState({
      timerId
    })
  }

  startGame = () => {
    this.setState({
      isGameInProgress: true,
      number: this.getRandomNumber(1, 27)
    });

    if(this.state.isEasyGame) this.setTimer(5000);

    if(this.state.isMediumGame) this.setTimer(3500);

    if(this.state.isHardGame) this.setTimer(2000);
  }

  stopGame = () => {
    this.setState({
      isGameInProgress: false
    });

    clearInterval(this.state.timerId);
  }
  
  render() {

    const {isEasyGame, isMediumGame, isHardGame, isGameInProgress} = this.state;

    return (
      <div className="App">
        <GameDifficulties isEasyGame={isEasyGame} isMediumGame={isMediumGame} isHardGame={isHardGame} onClick={this.onRadioButtonClick}/>
        <Score />
        {!isGameInProgress && 
          <Button
            variant="outlined"
            color="primary" 
            className="game-button"
            onClick={this.startGame}
            disabled={!isEasyGame && !isMediumGame && !isHardGame}
          >
          Start Game
          </Button>}
        {isGameInProgress && <Button variant="outlined" color="secondary" className="game-button" onClick={this.stopGame}>Stop Game</Button>}
        <div className="number">
          {this.state.number}
        </div>
        <TextField variant="outlined" label="Input Letter" color="primary" className="input-letter"/>
        <Letters/>
      </div>
    );
  }
  
}

export default App;
