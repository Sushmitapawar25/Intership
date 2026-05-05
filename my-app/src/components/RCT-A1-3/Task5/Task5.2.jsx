import React, { Component } from 'react';


class AddNum1 extends Component {
  state = {
    numbers: [1, 3, 5, 7],
    expression: "",
    calcValue: 0,
    operation: "+"
  };

  setOperation = (op) => {
    this.setState({
      operation: op,
      expression: "",
      calcValue: op === "+" ? 0 : 1
    });
  }

  addNum = (n) => {
    const { operation, expression, calcValue } = this.state;
    const newExp = expression === "" ? "" + n : expression + operation + n;
    const newVal = operation === "+" ? calcValue + n : calcValue * n;
    this.setState({ expression: newExp, calcValue: newVal });
  }

  render() {
    const { numbers, expression, calcValue, operation } = this.state;
    return (
      <div className="container mt-4">
        <div className="mb-3">
          Operator :
          <button className="btn btn-primary ms-2 me-2" onClick={() => this.setOperation("+")}>Add</button>
          <button className="btn btn-primary" onClick={() => this.setOperation("*")}>Multiply</button>
        </div>
        {numbers.map((n, index) => (
          <button key={index} className="btn btn-primary me-2" onClick={() => this.addNum(n)}>{n}</button>
        ))}
        <h4 className="mt-3">Operation = {operation}</h4>
        <h4>Expression = {expression}</h4>
        <h4>Calculated Value = {calcValue}</h4>
      </div>
    );
  }
}

export default AddNum1;