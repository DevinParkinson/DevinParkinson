import React, {Component } from 'react'
var __html = require('../games/snake.html');
var template = { __html: __html };

class Snake extends Component {
  render() {
    return(
      <div dangerouslySetInnerHTML={template} />
    );
  }
}

export default Snake
