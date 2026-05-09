import React, { Component } from "react";

class LeftPanel9 extends Component {

    handleChange = (e) => {
        let s1 = { ...this.props.optionsSel };
        let { currentTarget: input } = e;
        input.name === "selectedCategories"
            ? (s1.selectedCategories = this.updateCBs(input.checked, input.value, s1.selectedCategories))
            : (s1[input.name] = input.value);
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
                {this.showCheckboxes("Category", optionsArray.categories, "selectedCategories", optionsSel.selectedCategories)}
                {this.showRadios("Stock Status", optionsArray.stockOptions, "selectedStock", optionsSel.selectedStock)}
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

export default LeftPanel9;

/* An app takes the details of a person and displsys them in a
   table. The details are entered in a form with 3 fields, name, age and country.
   a) When the submit button is clicked, validate the form
   Name and age should not be empty and country should have been selected.
   b) If there are any errors,display them below the fields.
*/
