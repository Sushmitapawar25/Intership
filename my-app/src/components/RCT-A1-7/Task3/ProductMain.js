import React, { Component } from "react";
import ProductForm from "./ProductForm";

class ProductMain extends Component {
    state = {
        products: [
            { name: "Pepsi", description: "Cold drink beverage", productCode: "AB1234", category: "Food", price: 50, discount: "5%" },
            { name: "Apple Mac", description: "Laptop for professionals", productCode: "CD5678", category: "Electronics", price: 120000, discount: "10%" },
            { name: "Levi Jeans", description: "Denim jeans for men", productCode: "EF9012", category: "Apparels", price: 3000, discount: "20%" },
            { name: "Maggi Noodles", description: "Instant noodles packet", productCode: "GH3456", category: "Grocery", price: 15, discount: "5%" },
            { name: "Colgate", description: "Toothpaste for teeth", productCode: "IJ7890", category: "Grocery", price: 80, discount: "10%" },
        ],
        view: 0,
        editIndex: -1,
    };

    handleSubmit = (product) => {
        let s1 = { ...this.state };
        s1.editIndex >= 0
            ? (s1.products[s1.editIndex] = product)
            : s1.products.push(product);
        s1.view = 0;
        s1.editIndex = -1;
        this.setState(s1);
    };

    showForm = () => {
        let s1 = { ...this.state };
        s1.view = 1;
        s1.editIndex = -1;
        this.setState(s1);
    };

    editProduct = (index) => {
        let s1 = { ...this.state };
        s1.view = 1;
        s1.editIndex = index;
        this.setState(s1);
    };

    deleteProduct = (index) => {
        let s1 = { ...this.state };
        s1.products.splice(index, 1);
        this.setState(s1);
    };

    showProducts = () => {
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark bg-dark mb-3">
                    <span className="navbar-brand mb-0 h1">
                        Products &nbsp;
                        <span className="badge bg-warning text-dark">
                            {this.state.products.length}
                        </span>
                    </span>
                </nav>

                <div className="row bg-dark text-white p-2 mx-0">
                    <div className="col-2">Name</div>
                    <div className="col-2">Category</div>
                    <div className="col-2">Code</div>
                    <div className="col-2">Price</div>
                    <div className="col-1">Discount</div>
                    <div className="col-3">Actions</div>
                </div>

                {this.state.products.map((p, index) => (
                    <div className="row border border-top-0 p-2 mx-0" key={index}>
                        <div className="col-2">{p.name}</div>
                        <div className="col-2">{p.category}</div>
                        <div className="col-2">{p.productCode}</div>
                        <div className="col-2">{p.price}</div>
                        <div className="col-1">{p.discount}</div>
                        <div className="col-3">
                            <button
                                className="btn btn-warning btn-sm me-2"
                                onClick={() => this.editProduct(index)}
                            >
                                Edit
                            </button>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => this.deleteProduct(index)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}

                <button
                    className="btn btn-primary mt-3"
                    onClick={this.showForm}
                >
                    Add New Product
                </button>
            </React.Fragment>
        );
    };

    render() {
        const { products, view, editIndex } = this.state;
        return (
            <div className="container mt-3">
                {view === 0 ? (
                    this.showProducts()
                ) : (
                    <ProductForm
                        product={
                            editIndex >= 0
                                ? products[editIndex]
                                : {
                                      name: "",
                                      description: "",
                                      productCode: "",
                                      category: "",
                                      price: "",
                                      discount: "",
                                  }
                        }
                        onSubmit={this.handleSubmit}
                        edit={editIndex >= 0}
                    />
                )}
            </div>
        );
    }
}

export default ProductMain;