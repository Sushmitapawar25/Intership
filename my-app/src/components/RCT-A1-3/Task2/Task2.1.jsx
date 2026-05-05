import React, { Component } from 'react';

class Baton extends Component {
  state = {
    num: 0
  };

  add1 = () => {
    this.setState({ num: this.state.num + 1 });
  }

  add10 = () => {
    this.setState({ num: this.state.num + 10 });
  }

  add100 = () => {
    this.setState({ num: this.state.num + 100 });
  }

  render() {
    return (
      <div className="container mt-4">
        <button className="btn btn-primary me-2" onClick={this.add1}>1</button>
        <button className="btn btn-primary me-2" onClick={this.add10}>10</button>
        <button className="btn btn-primary me-2" onClick={this.add100}>100</button>
        <h3 className="mt-3">Number = {this.state.num}</h3>
      </div>
    );
  }
}

export default Baton;