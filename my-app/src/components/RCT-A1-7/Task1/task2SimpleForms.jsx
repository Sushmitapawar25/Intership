import React,{Component} from "react";

class SimpleForm extends Component {
    state = {
        person: this.props.person,
        errors: {},

        countries: [
            "United States of America",
            "Canada",
            "India",
            "united Kingdom",
        ],
    };

    handleChange = (e) => {
        const {currentTarget: input} = e;
        let s1 = {...this.state};
        s1.person[input.name] = input.value;
        this.setState(s1); 
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let errors = this.validateAll();
        if(this.isValid(errors)) this.props.onSubmit(this.state.person);
        else {
            let s1 = {...this.state};
            s1.errors = errors;
            this.setState(s1);
        }
    };

    handleValidate = (e) => {
        // only the field which the event has been fired
        let {currentTarget: input} = e;
        let s1 = {...this.state};
        switch(input.name){
            case "name":
                s1.errors.name = this.validateName(input.value);
                break;
            case "age":
                s1.errors.age = this.validateAge(input.value);
                break;
            case "country":
                s1.errors.country = this.validateCountry(input.value);
                break;
            default:
                break;
        }
        this.setState(s1);
    }

    isValid = (errors) => {
        // errors would have keys with non empty strings as values
        let keys = Object.keys(errors);
        let count = keys.reduce((acc,curr) => (errors[curr] ? acc + 1 : acc),0);
        return count === 0;
    };

    validateAll = () => {
        let {name,age,country} = this.state.person;
        let errors = {};
        errors.name = this.validateName(name);
        errors.age = this.validateAge(age);
        errors.country = this.validateCountry(country);
        // if(!name) errors.name = "Name must be entered";
        // if(!age) errors.age = "Age must be entered";
        // if(!country) errors.country = "Country must be selected";
        return errors;
    };

    validateName = (name) => 
        !name
            ? "Name must be entered"
            : name.length < 5
            ? "Name should have minimum 5 characters"
            : "";
    
    validateAge = (age) => 
        !age
            ? "Age must be entered"
            : age < 21 || age > 75
            ? "Age should be between 21 and 75"
            : "";

    validateCountry = (country) => 
        (!country
            ? "Country must be selected"
            :  "");
    
    isFormValid = () => {
        let errors = this.validateAll();
        return this.isValid(errors);
    }


    render() {
        let {name,age,country} = this.state.person;
        let {countries,errors} =this.state;

        return(
            <div className="container">
                <h5>Enter New Details</h5>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Enter Name"
                        value={name}
                        onChange={this.handleChange}
                        onBlur={this.handleValidate}
                    />
                    {errors.name ? (
                        <span className="text-danger">{errors.name}</span>
                    ) : (
                        ""
                    )}
                </div><br/>
                <div className="form-group">
                    <label>Age</label>
                    <input
                        type="number"
                        className="form-control"
                        id="age"
                        name="age"
                        placeholder="Enter Age"
                        value={age}
                        onChange={this.handleChange}
                        onBlur={this.handleValidate}
                    />
                    {errors.age ? (
                        <span className="text-danger">{errors.age}</span>
                    ) : (
                        ""
                    )}
                </div><br/>
                <div className="form-group">
                    <label>Country</label>
                    <select
                        className="form-control"
                        name="country"
                        value={country}
                        onChange={this.handleChange}
                        onBlur={this.handleValidate}
                    >
                        <option disabled value="">
                            Select the Country
                        </option>
                        {countries.map((c1) => (
                            <option>{c1}</option>
                        ))}
                    </select>
                    {errors.country ? (
                        <span className="text-danger">{errors.country}</span>
                    ) : (
                        ""
                    )}
                </div><br/>
                <button className="btn  btn-primary" onClick={this.handleSubmit} disabled={!this.isFormValid()}>Submit</button>
            </div>
        )
    }
}
export default SimpleForm;