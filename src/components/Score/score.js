import React, { Component } from 'react';

import {Typography, List, ListItem, ListItemText} from '@material-ui/core';

import './scoreStyles.css';

class Score extends Component {


  render() {

    return (
      <div className="score-wrapper">
        <Typography  variant="h6" className="score"> Score </Typography>
        <List>
          <ListItem className="score-element" id="hit">
            <ListItemText primary={"HIT: ".concat(this.props.hitCount)}/>
          </ListItem>
          <ListItem className="score-element" id="miss">
            <ListItemText primary={"MISS: ".concat(this.props.missCount)}/>
          </ListItem>
          <ListItem className="score-element" id="left">
            <ListItemText primary={"Left: ".concat(this.props.leftCount)}/>
          </ListItem>
        </List>
        </div>
    );
  }

}

export default Score;