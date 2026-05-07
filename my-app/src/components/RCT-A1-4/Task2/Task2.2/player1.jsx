import React, { Component } from 'react';

class Player1 extends Component {
  render() {
    const {name} = this.props;
    return (
      <div className="row border m-1 bg-dark text-white">
        <div className="col-12 p-2">{name}</div>
      </div>
    );
  }
}

export default Player1;