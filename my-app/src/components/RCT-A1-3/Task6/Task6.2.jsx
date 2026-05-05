import React, { Component } from 'react';


class SellSold1 extends Component {
  state = {
    products: [
      { name: "Pepsi", sales: 10 },
      { name: "Coke",  sales: 7  },
      { name: "Maggi", sales: 0  },
      { name: "Gems",  sales: 15 },
      { name: "5Star", sales: 0  }
    ]
  };

  sell = (name) => { alert(name + " Sold"); }
  ret  = (name) => { alert(name + " Returned"); }

  render() {
    let {products} = this.state;
    return (
      <div className="container mt-4">
        <h4>Sales Details</h4>
        <ul>
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
      </div>
    );
  }
}

export default SellSold1;