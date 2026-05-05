import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Produ extends Component {
  state = {
    products: [
      { name: "Perk", quantity: 10, sales: 7 },
      { name: "5Star", quantity: 7, sales: 9 },
      { name: "Pepsi", quantity: 10, sales: 20 },
      { name: "Maggi", quantity: 41, sales: 22 },
      { name: "Coke", quantity: 18, sales: 50 }
    ]
  };

  render() {
    return (
      <div className="container mt-4">
        <h2 className="mb-3">Table with Row Colors</h2>
        <table className="table table-bordered table-hover">
          <colgroup>
            <col className="w-25" />
            <col className="w-25" />
            <col className="w-25" />
          </colgroup>
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Sales</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((p, index) => (
              <tr
                key={index}
                className={p.quantity >= p.sales ? 'table-success' : 'table-danger'}
              >
                <td>{p.name}</td>
                <td>{p.quantity}</td>
                <td>{p.sales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Produ;