import React, { Component } from 'react';

import './lettersStyle.css'

class Letters extends Component {

  generateAlphabet = (char1, char2) => {
    let array = [];
    let i = char1.charCodeAt(0);
    let j = char2.charCodeAt(0);
    let count = 1;

    for (; i <= j; ++i) {
      array.push({letter: String.fromCharCode(i), code: count})
      count++;
    }

    return array;
  }
  render () {

    const alphabet = this.generateAlphabet('A', 'Z');
    
    return (
      <div className="alphabet-wrapper">
        {alphabet.map(i => <div className="letter">{i.letter} ({i.code})</div>)}
      </div>
    );
  }
}

export default Letters;