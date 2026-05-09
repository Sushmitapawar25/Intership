import React, { Component } from "react";

class LeftPanel71 extends Component {

    handleChange = (e) => {
        let s1 = { ...this.props.optionsSel };
        let { currentTarget: input } = e;
        s1[input.name] = input.value;
        this.props.onChangeOption(s1);
    };

    render() {
        const { optionsSel, optionsArray } = this.props;
        return (
            <div className="container">
                <h6>Choose Options</h6>
                <button className="btn btn-warning btn-sm mb-2" onClick={this.props.onClear}>
                    Clear All
                </button>
                {this.showRadios("Product Names", optionsArray.productNames, "selectedProduct", optionsSel.selectedProduct)}
            </div>
        );
    }

    showRadios = (label, arr, name, selVal) => {
        return (
            <React.Fragment>
                <label className="form-check-label fw-bold">{label}</label>
                {arr.map((opt) => (
                    <div className="form-check" key={opt}>
                        <input
                            className="form-check-input"
                            type="radio"
                            name={name}
                            value={opt}
                            checked={selVal === opt}
                            onChange={this.handleChange}
                        />
                        <label className="form-check-label">{opt}</label>
                    </div>
                ))}
            </React.Fragment>
        );
    };
}

export default LeftPanel71;