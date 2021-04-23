import React, { Component } from 'react';

import {RadioGroup, FormControlLabel, Radio} from '@material-ui/core';
import './gameDiffStyles.css';

class GameDifficulties extends Component {

  render() {

    return (
      <RadioGroup row className="game-difficulties">
        <FormControlLabel
          control={<Radio color="primary" checked={this.props.isEasyGame} onClick={() => this.props.onClick('easy')}/>}
          label="Easy"
          className="game-diff-element"
        />
        <FormControlLabel
          control={<Radio color="primary" checked={this.props.isMediumGame} onClick={() => this.props.onClick('medium')}/>}
          label="Medium"
          className="game-diff-element"
        />
        <FormControlLabel
          control={<Radio color="primary" checked={this.props.isHardGame} onClick={() => this.props.onClick('hard')}/>}
          label="Hard"
          className="game-diff-element"
        />
      </RadioGroup>
    );
  }
}

export default GameDifficulties;