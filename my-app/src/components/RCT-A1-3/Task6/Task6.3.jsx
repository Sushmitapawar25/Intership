import React, { Component } from 'react';

class SellSold2 extends Component {
  state = {
    products: [
      { name: "Pepsi", sales: 10 },
      { name: "Coke",  sales: 7  },
      { name: "Maggi", sales: 0  },
      { name: "Gems",  sales: 15 },
      { name: "5Star", sales: 0  }
    ],
    message: ""
  };

  sell = (name) => { alert(name + " Sold"); }
  ret  = (name) => { alert(name + " Returned"); }

  totalSales = () => {
    let {products} = this.state;
    const total = products.reduce((sum, p) => sum + p.sales, 0);
    this.setState({ message: "Total Sales = " + total });
  }

  bestSeller = () => {
    let {products} = this.state;
    const best = products.reduce((max, p) => p.sales > max.sales ? p : max);
    this.setState({ message: "Best Sales = " + best.sales });
  }

  render() {
    let {products} = this.state;
    return (
      <div className="container mt-4">
        <h4>Sales Details</h4>
        <button className="btn btn-primary me-2 mb-3" onClick={this.totalSales}>Total Sales</button>
        <button className="btn btn-primary mb-3" onClick={this.bestSeller}>Best Seller</button>
        <ul className="list-group">
          {products.map((p, index) => (
            <li key={index} className="mt-2">
              Name : {p.name}, Sales : {p.sales}
              <button className="btn btn-primary btn-sm ms-2" onClick={() => this.sell(p.name)}>Sell</button>
              {p.sales > 0 &&
                <button className="btn btn-danger btn-sm ms-2" onClick={() => this.ret(p.name)}>Return</button>
              }
            </li>
          ))}
        </ul>
        {this.state.message && <h4 className="mt-3">{this.state.message}</h4>}
      </div>
    );
  }
}

export default SellSold2;