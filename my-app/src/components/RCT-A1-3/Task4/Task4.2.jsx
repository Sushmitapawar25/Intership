import React, { Component } from 'react';

class BasketBall1 extends Component {
  state = {
    scoreA: 0,
    scoreB: 0
  };

  scoreA = (pts) => { this.setState({ scoreA: this.state.scoreA + pts }); }
  scoreB = (pts) => { this.setState({ scoreB: this.state.scoreB + pts }); }
  reset  = ()    => { this.setState({ scoreA: 0, scoreB: 0 }); }

  render() {
    let {scoreA,scoreB} = this.state;
    return (
      <div className="container mt-4 text-center">
        <div className="row mb-3">
          <div className="col-6">
            <h5>Team A</h5>
            <h1>{scoreA}</h1>
            <button className="btn btn-warning w-75 mb-2" onClick={() => this.scoreA(3)}>+3 POINTS</button><br />
            <button className="btn btn-warning w-75 mb-2" onClick={() => this.scoreA(2)}>+2 POINTS</button><br />
            <button className="btn btn-warning w-75 mb-2" onClick={() => this.scoreA(1)}>FREE THROW</button>
          </div>
          <div className="col-6">
            <h5>Team B</h5>
            <h1>{scoreB}</h1>
            <button className="btn btn-warning w-75 mb-2" onClick={() => this.scoreB(3)}>+3 POINTS</button><br />
            <button className="btn btn-warning w-75 mb-2" onClick={() => this.scoreB(2)}>+2 POINTS</button><br />
            <button className="btn btn-warning w-75 mb-2" onClick={() => this.scoreB(1)}>FREE THROW</button>
          </div>
        </div>
        <button className="btn btn-warning px-4" onClick={this.reset}>RESET</button>
      </div>
    );
  }
}

export default BasketBall1;