import React, { Component } from 'react';

class Player2 extends Component {
  render() {
    const {name, score} = this.props.player;
    return (
      <div className="row m-1 text-primary">
        <div className="col-12">Name : {name}</div>
        <div className="col-12">Score : {score}</div>
      </div>
    );
  }
}

export default Player2;