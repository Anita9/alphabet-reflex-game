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
            <ListItemText primary="HIT: "/>
          </ListItem>
          <ListItem className="score-element" id="miss">
            <ListItemText primary="Miss: "/>
          </ListItem>
          <ListItem className="score-element" id="left">
            <ListItemText primary="Left: "/>
          </ListItem>
        </List>
        </div>
    );
  }

}

export default Score;