import React, { Component } from 'react';

class PriceD extends Component {
  state = {
    priceData: [
      { name: "Perk",    category: "Food",  oldPrice: 10, newPrice: 10 },
      { name: "5Star",   category: "Food",  oldPrice: 15, newPrice: 12 },
      { name: "Pepsi",   category: "Drink", oldPrice: 20, newPrice: 22 },
      { name: "Maggi",   category: "Food",  oldPrice: 12, newPrice: 15 },
      { name: "Coke",    category: "Drink", oldPrice: 20, newPrice: 20 },
      { name: "Gems",    category: "Food",  oldPrice: 10, newPrice: 10 },
      { name: "7Up",     category: "Drink", oldPrice: 15, newPrice: 17 },
      { name: "Lindt",   category: "Food",  oldPrice: 80, newPrice: 90 },
      { name: "Nutties", category: "Food",  oldPrice: 20, newPrice: 18 },
      { name: "Slice",   category: "Drink", oldPrice: 18, newPrice: 16 }
    ],
    filterKey: ""
  };

  filterBy = (key) => { this.setState({ filterKey: key }); }

  render() {
    const { priceData, filterKey } = this.state;

    let filtered = [...priceData];
    if (filterKey === "Food")     filtered = filtered.filter(p => p.category === "Food");
    if (filterKey === "Drink")    filtered = filtered.filter(p => p.category === "Drink");
    if (filterKey === "Increase") filtered = filtered.filter(p => p.newPrice > p.oldPrice);
    if (filterKey === "Decrease") filtered = filtered.filter(p => p.newPrice < p.oldPrice);
    if (filterKey === "Same")     filtered = filtered.filter(p => p.newPrice === p.oldPrice);

    const filterLabel = filterKey === "" ? "Sorted By Name" : "Category : " + filterKey;

    return (
      <div className="container mt-4">
        <h5>{filterLabel}</h5>
        <div className="mb-3">
          <button className="btn btn-primary me-2" onClick={() => this.filterBy("Food")}>Food</button>
          <button className="btn btn-primary me-2" onClick={() => this.filterBy("Drink")}>Drink</button>
          <button className="btn btn-primary me-2" onClick={() => this.filterBy("Increase")}>Increase</button>
          <button className="btn btn-primary me-2" onClick={() => this.filterBy("Decrease")}>Decrease</button>
          <button className="btn btn-primary"      onClick={() => this.filterBy("Same")}>Same</button>
        </div>
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Old Price</th>
              <th>New Price</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p, index) => (
              <tr key={index}>
                <td>{p.name}</td>
                <td>{p.category}</td>
                <td>{p.oldPrice}</td>
                <td>{p.newPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PriceD;