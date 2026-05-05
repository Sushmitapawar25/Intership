import React, { Component } from 'react';

class Append extends Component {
  state = {
    txt: ""
  };

  appendA = () => { this.setState({ txt: this.state.txt + "A" }); }
  appendB = () => { this.setState({ txt: this.state.txt + "B" }); }
  appendC = () => { this.setState({ txt: this.state.txt + "C" }); }
  appendD = () => { this.setState({ txt: this.state.txt + "D" }); }

  render() {
    return (
      <div className="container mt-4">
        <button className="btn btn-primary me-2" onClick={this.appendA}>A</button>
        <button className="btn btn-primary me-2" onClick={this.appendB}>B</button>
        <button className="btn btn-primary me-2" onClick={this.appendC}>C</button>
        <button className="btn btn-primary me-2" onClick={this.appendD}>D</button>
        <h3 className="mt-3">Text = {this.state.txt}</h3>
      </div>
    );
  }
}

export default Append;