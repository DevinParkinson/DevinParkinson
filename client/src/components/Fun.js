import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Fun extends Component {

  render() {

    return(
      <div>
      Here are some fun things I have done.
      <Link to="/snake">Snake</Link>
      </div>
    )
  }
}

export default Fun
