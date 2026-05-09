import React, { Component } from "react";

class LeftPanel61 extends Component {

    handleChange = (e) => {
        let s1 = { ...this.props.optionsSel };
        let { currentTarget: input } = e;
        s1.selectedProducts = this.updateCBs(input.checked, input.value, s1.selectedProducts);
        this.props.onChangeOption(s1);
    };

    updateCBs = (checked, value, arr) => {
        if (checked) arr.push(value);
        else {
            let index = arr.findIndex((ele) => ele === value);
            if (index >= 0) arr.splice(index, 1);
        }
        return arr;
    };

    render() {
        const { optionsSel, optionsArray } = this.props;
        return (
            <div className="container">
                <h6>Choose Options</h6>
                <button className="btn btn-warning btn-sm mb-2" onClick={this.props.onClear}>
                    Clear All
                </button>
                {this.showCheckboxes("Product Names", optionsArray.productNames, "selectedProducts", optionsSel.selectedProducts)}
            </div>
        );
    }

    showCheckboxes = (label, arr, name, selArr) => {
        return (
            <React.Fragment>
                <label className="form-check-label fw-bold">{label}</label>
                {arr.map((opt) => (
                    <div className="form-check" key={opt}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name={name}
                            value={opt}
                            checked={selArr.findIndex((sel) => sel === opt) >= 0}
                            onChange={this.handleChange}
                        />
                        <label className="form-check-label">{opt}</label>
                    </div>
                ))}
            </React.Fragment>
        );
    };
}

export default LeftPanel61;