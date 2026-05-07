import React, { Component } from 'react';

class Player3 extends Component {
  render() {
    const {name, score} = this.props.player;
    const {onAddPoint} = this.props;
    return (
      <div className="row m-1 text-primary">
        <div className="col-12">Name : {name}</div>
        <div className="col-12">Score : {score}</div>
        <div className="col-12">
          <button className="btn btn-success btn-sm" onClick={onAddPoint}>1 Point</button>
        </div>
      </div>
    );
  }
}

export default Player3;