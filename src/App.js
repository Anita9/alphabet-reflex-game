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
      isGameInProgress: false,
      hitCount: 0,
      missCount: 0,
      leftCount: 26,
      alphabet: this.generateAlphabet('A', 'Z'),
      numbersPassed: [],
      inputValue: ''
    }
  }

  getRandomNumber = (min, max) => {
    let numbersArray = this.state.numbersPassed;
    let number =  Math.floor(Math.random() * (max - min) + min);
    if(!this.state.numbersPassed.includes(number)) {
      numbersArray.push(number);
      this.setState({
        numbersPassed: numbersArray
      });
      return number;
    } else {
      if(this.state.numbersPassed.length < max - 1) {
        return this.getRandomNumber(min, max);
      } else {
        this.setState({
          inputValue: ''
        })
        return;

      }
    }
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
      number: this.getRandomNumber(1, 27),
      timerId: null
    });

    if(this.state.isEasyGame) this.setTimer(5000);

    if(this.state.isMediumGame) this.setTimer(3500);

    if(this.state.isHardGame) this.setTimer(2000);
  }

  stopGame = () => {
    this.setState({
      isEasyGame: false,
      isMediumGame: false,
      isHardGame: false,
      number: null,
      isGameInProgress: false,
      hitCount: 0,
      missCount: 0,
      leftCount: 26,
      numbersPassed: [],
      inputValue: ''
    });

    clearInterval(this.state.timerId);
  }

  generateAlphabet = (char1, char2) => {
    let array = [];
    let i = char1.charCodeAt(0);
    let j = char2.charCodeAt(0);
    let count = 1;

    for (; i <= j; ++i) {
      array.push({letter: String.fromCharCode(i), code: count, color: 'grey'})
      count++;
    }

    return array;
  }

  validateInput = e => {
    let keyCode = e.keyCode || e.which;

    let regex = /^[a-zA-Z]+$/;

    let isValid = regex.test(String.fromCharCode(keyCode));

    return isValid;
  }

  checkInput = e => {
    const {alphabet, number, hitCount, leftCount, missCount} = this.state;
    let isValid = this.validateInput(e);
    let selectedLetter = alphabet.find(i => i.code === number);
    let inputLetter;

    if (!isValid) {
      return;
    } else {
      inputLetter = alphabet.find(i => i.letter === e.key.toUpperCase());
      this.setState({
        inputValue: e.key.toUpperCase()
      })
      if (inputLetter.code === selectedLetter.code) {
        alphabet.find(i => i.code === inputLetter.code && i.color === 'green');
        this.setState({
          hitCount: hitCount + 1,
          leftCount: leftCount - 1,
          alphabet: alphabet.map(i => i.code === inputLetter.code ? {letter: i.letter, code: i.code, color: 'green'} : {letter: i.letter, code: i.code, color: i.color})
        })
      } else {
        alphabet.find(i => i.code === inputLetter.code && i.color === 'red');
        this.setState({
          missCount: missCount + 1,
          leftCount: leftCount - 1,
          alphabet: alphabet.map(i => i.code === selectedLetter.code ? {letter: i.letter, code: i.code, color: 'red'} : {letter: i.letter, code: i.code, color: i.color})
        })
      }
    }
  }
  
  render() {

    const {isEasyGame, isMediumGame, isHardGame, isGameInProgress, hitCount, missCount, leftCount, alphabet, inputValue} = this.state;

    return (
      <div className="App">
        <GameDifficulties isEasyGame={isEasyGame} isMediumGame={isMediumGame} isHardGame={isHardGame} onClick={this.onRadioButtonClick} isGameInProgress={isGameInProgress}/>
        <Score hitCount={hitCount} missCount={missCount} leftCount={leftCount}/>
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
        <TextField autoFocus variant="outlined" label="Input Letter" color="primary" className="input-letter" onKeyPress={this.checkInput} value={inputValue}/>
        <Letters alphabet={alphabet}/>
      </div>
    );
  }
  
}

export default App;
