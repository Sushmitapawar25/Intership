import React, { Component } from 'react';


class AddNum extends Component {
  state = {
    numbers: [1, 3, 5, 7],
    expression: "",
    calcValue: 0
  };

  addNum = (n) => {
    const { expression, calcValue } = this.state;
    const newExp = expression === "" ? "" + n : expression + "+" + n;
    this.setState({
      expression: newExp,
      calcValue: calcValue + n
    });
  }

  render() {
    const { numbers, expression, calcValue } = this.state;
    return (
      <div className="container mt-4">
        {numbers.map((n, index) => (
          <button key={index} className="btn btn-primary me-2" onClick={() => this.addNum(n)}>{n}</button>
        ))}
        <h4 className="mt-3">Expression = {expression}</h4>
        <h4>Calculated Value = {calcValue}</h4>
      </div>
    );
  }
}

export default AddNum;