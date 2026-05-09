import React, { Component } from "react";
import LeftPanel61 from "./task6_1";

const products = [
    { id: "PEP110", name: "Pepsi", category: "Food", stock: true },
    { id: "CLO876", name: "Close Up", category: "Toothpaste", stock: false },
    { id: "PEA531", name: "Pears", category: "Soap", stock: true },
    { id: "LU7264", name: "Lux", category: "Soap", stock: false },
    { id: "COL112", name: "Colgate", category: "Toothpaste", stock: true },
    { id: "DM881", name: "Dairy Milk", category: "Food", stock: false },
    { id: "LI130", name: "Liril", category: "Soap", stock: true },
    { id: "PPS613", name: "Pepsodent", category: "Toothpaste", stock: false },
    { id: "MAG441", name: "Maggi", category: "Food", stock: true },
];

class Task61 extends Component {
    state = {
        optionsArray: {
            productNames: products.map((p) => p.name),
        },
        optionsSel: {
            selectedProducts: [],
        },
    };

    handleChangeOption = (optionsSel) => {
        let s1 = { ...this.state };
        s1.optionsSel = optionsSel;
        this.setState(s1);
    };

    handleClear = () => {
        let s1 = { ...this.state };
        s1.optionsSel = { selectedProducts: [] };
        this.setState(s1);
    };

    showProducts = () => {
        const { selectedProducts } = this.state.optionsSel;
        const filtered = selectedProducts.length > 0
            ? products.filter((p) => selectedProducts.includes(p.name))
            : [];

        return (
            <div className="container">
                <p className="fw-bold">
                    Selected Products : {selectedProducts.join(", ")}
                </p>
                <div className="row text-black p-2 mx-0 border">
                    <div className="col-3">Name</div>
                    <div className="col-3">Category</div>
                    <div className="col-3">ID</div>
                    <div className="col-3">Stock</div>
                </div>
                {filtered.length > 0 ? (
                    filtered.map((p) => (
                        <div className="row border border-top-0 p-2 mx-0" key={p.id}>
                            <div className="col-3">{p.name}</div>
                            <div className="col-3">{p.category}</div>
                            <div className="col-3">{p.id}</div>
                            <div className="col-3">{p.stock ? "true" : "false"}</div>
                        </div>
                    ))
                ) : (
                    <div className="row border border-top-0 p-2 mx-0">
                        <div className="col-12 text-center text-muted">No Products Selected</div>
                    </div>
                )}
            </div>
        );
    };

    render() {
        const { optionsArray, optionsSel } = this.state;
        return (
            <div className="container mt-4">
                <h4 className="mb-3 text-primary">Product Names</h4>
                <div className="row">
                    <div className="col-3 border bg-light">
                        <LeftPanel61
                            optionsSel={optionsSel}
                            optionsArray={optionsArray}
                            onChangeOption={this.handleChangeOption}
                            onClear={this.handleClear}
                        />
                    </div>
                    <div className="col-9 border">
                        {this.showProducts()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Task61;