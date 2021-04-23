import React, { Component } from 'react';

import {RadioGroup, FormControlLabel, Radio} from '@material-ui/core';
import './gameDiffStyles.css';

class GameDifficulties extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isEasyGame: false,
      isMediumGame: false,
      isHardGame: false
    }
  }

  render() {

    const {isEasyGame, isMediumGame, isHardGame } = this.state;

    return (
      <RadioGroup row className="game-difficulties">
        <FormControlLabel
          control={<Radio color="primary" checked={isEasyGame}/>}
          label="Easy"
          className="game-diff-element"
        />
        <FormControlLabel
          control={<Radio color="primary" checked={isMediumGame}/>}
          label="Medium"
          className="game-diff-element"
        />
        <FormControlLabel
          control={<Radio color="primary" checked={isHardGame}/>}
          label="Hard"
          className="game-diff-element"
        />
      </RadioGroup>
    );
  }
}

export default GameDifficulties;