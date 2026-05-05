import React, { Component } from 'react';


class SortH extends Component {
  state = {
    products: [
      { name: "Perk",  price: 10, sales: 7  },
      { name: "5Star", price: 15, sales: 9  },
      { name: "Pepsi", price: 20, sales: 20 },
      { name: "Maggi", price: 12, sales: 15 },
      { name: "Coke",  price: 20, sales: 50 },
      { name: "Lindt", price: 80, sales: 4  }
    ],
    sortKey: ""
  };

  sortBy = (key) => { this.setState({ sortKey: key }); }

  render() {
    const { products, sortKey } = this.state;
    const sorted = [...products].sort((a, b) => {
      if (sortKey === "name")  return a.name.localeCompare(b.name);
      if (sortKey === "value") return (a.price * a.sales) - (b.price * b.sales);
      if (sortKey === "")      return 0;
      return a[sortKey] - b[sortKey];
    });

    return (
      <div className="container mt-4">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th onClick={() => this.sortBy("name")}  style={{cursor:"pointer"}}>Name</th>
              <th onClick={() => this.sortBy("price")} style={{cursor:"pointer"}}>Price</th>
              <th onClick={() => this.sortBy("sales")} style={{cursor:"pointer"}}>Sales</th>
              <th onClick={() => this.sortBy("value")} style={{cursor:"pointer"}}>Value</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((p, index) => (
              <tr key={index}>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.sales}</td>
                <td>{p.price * p.sales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SortH;