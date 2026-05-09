import React,{Component} from "react";
class LeftPanelForm extends Component{

    handleChange = (e) => {
        // optionsArray, optionsSel
        let s1 = {...this.props.optionsSel};
        let {currentTarget: input} = e;
        input.name === "brand" 
            ? (s1.brand = this.updateCBs(input.checked, input.value,s1.brand))
            : input.name === "ram"
            ? (s1.ram = this.updateCBs(input.checked, input.value,s1.ram))
            : (s1[input.name] = input.value);
        this.props.onChangeOption(s1);
    };

    updateCBs = (checked, value, arr) => {
        if(checked) arr.push(value);
        else {
            let index = arr.findIndex((ele) => ele === value);
            if(index >= 0) arr.splice(index,1);
        }
        return arr;
    };
    render() {
        const {optionsSel, optionsArray} = this.props;
         return <div className="container">
            <h6>Choose Options</h6>
            <button className="btn btn-warning btn-sm" onClick={this.props.onClear}>CLear All</button><br/>
            {this.showCheckboxes("Brand", optionsArray.brand,"brand", optionsSel.brand)}
            {this.showCheckboxes("RAM",optionsArray.ram,"ram",optionsSel.ram)}
            {this.showRadios("Processor",optionsArray.processor,"processor",optionsSel.processor)}
            {this.showRadios("Ratings",optionsArray.rating,"rating",optionsSel.rating)}
         </div>
    }

    showCheckboxes = (label, arr, name, selArr) => {
        return (
            <React.Fragment>
                <label className="form-check-label font-weight-bold">{label}</label>
                {arr.map((opt, index) => (
                    <div className="form-check">
                        <input 
                            className="form-check-input"
                            value={opt}
                            type="checkbox"
                            name={name}
                            checked={selArr.findIndex((sel) => sel === opt) >= 0}
                            onChange={this.handleChange}
                        />
                        <label className="form-check-label">{opt}</label>
                    </div>
                ))}
            </React.Fragment>
        );
    };

    showRadios = (label,arr,name,selVal) => {
        return (
            <React.Fragment>
                <label className="form-check-label font-weight-bold">{label}</label>
                {arr.map((opt) => (
                    <div className="form-check">
                        <input 
                            className="form-check-input"
                            type="radio"
                            name={name}
                            value={opt}
                            checked={selVal === opt}
                            onChange = {this.handleChange}
                        />
                        <label className="form-check-label">{opt}</label>
                    </div>
                ))}
            </React.Fragment>
        )
    }
}

export default LeftPanelForm;