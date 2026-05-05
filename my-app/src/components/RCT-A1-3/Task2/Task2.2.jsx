import React, { Component } from 'react';


class Baton1 extends Component {
  state = {
    num: 0
  };

  add = (val) => {
    this.setState({ num: this.state.num + val });
  }

  render() {
    return (
      <div className="container mt-4">
        <button className="btn btn-primary me-2" onClick={() => this.add(1)}>1</button>
        <button className="btn btn-primary me-2" onClick={() => this.add(10)}>10</button>
        <button className="btn btn-primary me-2" onClick={() => this.add(100)}>100</button>
        <h3 className="mt-3">Number = {this.state.num}</h3>
      </div>
    );
  }
}

export default Baton1;