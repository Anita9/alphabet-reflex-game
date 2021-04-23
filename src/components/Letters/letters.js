import React, { Component } from 'react';

import './lettersStyle.css'

class Letters extends Component {

  render () {

    return (
      <div className="alphabet-wrapper">
        {this.props.alphabet.map(i => <div className={i.color === 'grey' ? "letter-grey" : (i.color === 'green' ? "letter-green" : "letter-red")}>{i.letter} ({i.code})</div>)}
      </div>
    );
  }
}

export default Letters;