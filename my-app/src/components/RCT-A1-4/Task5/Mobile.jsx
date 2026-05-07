import React, { Component } from 'react';

class Mobile extends Component {
  render() {
    const { mobile, onAddToCart } = this.props;
    const { id, name, spec, desc, price } = mobile;

    return (
      <div className="bg-success text-white p-3 text-center rounded">
        <div className="fw-bold fs-5">{name + "(" + spec + ")"}</div>
        <div className="mb-2">{desc}</div>
        <button
          className="btn btn-light"
          onClick={() => onAddToCart(id)}
        >
          {"Just " + price}
        </button>
      </div>
    );
  }
}

export default Mobile;