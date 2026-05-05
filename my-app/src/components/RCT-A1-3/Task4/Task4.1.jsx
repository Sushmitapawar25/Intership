import React, { Component } from 'react';

class BasketBall extends Component {
  state = {
    scoreA: 0,
    scoreB: 0
  };

  addA3 = () => { this.setState({ scoreA: this.state.scoreA + 3 }); }
  addA2 = () => { this.setState({ scoreA: this.state.scoreA + 2 }); }
  addA1 = () => { this.setState({ scoreA: this.state.scoreA + 1 }); }

  addB3 = () => { this.setState({ scoreB: this.state.scoreB + 3 }); }
  addB2 = () => { this.setState({ scoreB: this.state.scoreB + 2 }); }
  addB1 = () => { this.setState({ scoreB: this.state.scoreB + 1 }); }

  reset = () => { this.setState({ scoreA: 0, scoreB: 0 }); }

  render() {
    let {scoreA,scoreB} = this.state;
    return (
      <div className="container mt-4 text-center bg-light">
        <div className="row mb-3">
          <div className="col-6">
            <h5>Team A</h5>
            <h1>{scoreA}</h1>
            <button className="btn btn-warning w-75 mb-2" onClick={this.addA3}>+3 POINTS</button><br />
            <button className="btn btn-warning w-75 mb-2" onClick={this.addA2}>+2 POINTS</button><br />
            <button className="btn btn-warning w-75 mb-2" onClick={this.addA1}>FREE THROW</button>
          </div>
          <div className="col-6">
            <h5>Team B</h5>
            <h1>{scoreB}</h1>
            <button className="btn btn-warning w-75 mb-2" onClick={this.addB3}>+3 POINTS</button><br />
            <button className="btn btn-warning w-75 mb-2" onClick={this.addB2}>+2 POINTS</button><br />
            <button className="btn btn-warning w-75 mb-2" onClick={this.addB1}>FREE THROW</button>
          </div>
        </div>
        <button className="btn btn-warning px-4" onClick={this.reset}>RESET</button>
      </div>
    );
  }
}

export default BasketBall;