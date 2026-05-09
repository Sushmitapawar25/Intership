import React, { Component } from "react";
import LeftPanel8 from "./LeftPanel8";

const products = [
    { id: "PEP110", name: "Pepsi", category: "Food", stock: "yes" },
    { id: "CLO876", name: "Close Up", category: "Toothpaste", stock: "no" },
    { id: "PEA531", name: "Pears", category: "Soap", stock: "arriving" },
    { id: "LU7264", name: "Lux", category: "Soap", stock: "yes" },
    { id: "COL112", name: "Colgate", category: "Toothpaste", stock: "no" },
    { id: "DM881", name: "Dairy Milk", category: "Food", stock: "arriving" },
    { id: "LI130", name: "Liril", category: "Soap", stock: "yes" },
    { id: "PPS613", name: "Pepsodent", category: "Toothpaste", stock: "no" },
    { id: "MAG441", name: "Maggi", category: "Food", stock: "arriving" },
    { id: "PNT560", name: "Pantene", category: "Shampoo", stock: "no" },
    { id: "KK219", name: "KitKat", category: "Food", stock: "arriving" },
    { id: "DOV044", name: "Dove", category: "Soap", stock: "yes" },
];

class Task8 extends Component {
    state = {
        optionsArray: {
            categories: [...new Set(products.map((p) => p.category))],
            stockOptions: ["yes", "no", "arriving"],
        },
        optionsSel: {
            selectedCategories: [],
            selectedStock: "",
        },
    };

    handleChangeOption = (optionsSel) => {
        let s1 = { ...this.state };
        s1.optionsSel = optionsSel;
        this.setState(s1);
    };

    handleClear = () => {
        let s1 = { ...this.state };
        s1.optionsSel = {
            selectedCategories: [],
            selectedStock: "",
        };
        this.setState(s1);
    };

    showProducts = () => {
        const { selectedCategories, selectedStock } = this.state.optionsSel;

        const filtered = products.filter((p) => {
            const catMatch = selectedCategories.length === 0 || selectedCategories.includes(p.category);
            const stockMatch = selectedStock === "" || p.stock === selectedStock;
            return catMatch && stockMatch;
        });

        return (
            <div className="container">
                <p className="fw-bold">
                    Category : {selectedCategories.length > 0 ? selectedCategories.join(", ") : "All"}
                    &nbsp;| Stock Status : {selectedStock || "All"}
                </p>
                <div className="row border text-black p-2 mx-0">
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
                            <div className="col-3">{p.stock}</div>
                        </div>
                    ))
                ) : (
                    <div className="row border border-top-0 p-2 mx-0">
                        <div className="col-12 text-center text-muted">No Products Found</div>
                    </div>
                )}
            </div>
        );
    };

    render() {
        const { optionsArray, optionsSel } = this.state;
        return (
            <div className="container mt-4">
                <h4 className="mb-3 text-primary">Category & Stock Filter</h4>
                <div className="row">
                    <div className="col-3 border bg-light">
                        <LeftPanel8
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

export default Task8;