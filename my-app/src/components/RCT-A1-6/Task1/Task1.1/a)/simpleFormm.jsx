import React,{Component} from "react";

class SimpleForm5 extends Component{
    state = {
        person: {
            name: "",
            age: "",
            country: "",
            gender: "",
            passport: "",
            license: "",
        },
        countries: [
            "United States of America",
            "Canada",
            "India",
            "United Kingdom",
        ],
    };

    handleChange = (e) => {
        const {currentTarget: input} = e;
        let s1 = {...this.state};
        input.type === "checkbox"
          ? (s1.person[input.name] = input.checked)
          : (s1.person[input.name] = input.value);
        s1.person[input.name] = input.value;
        this.setState(s1);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Handle Submit",this.state.person);
    }

    render() {
        let {name,age, country,gender,passport,license} = this.state.person;
        const {countries} = this.state;
        return (
            <div className="container mt-2">
                <h5>Enter New Details</h5>
                <div className="form-group mb-2">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Enter Name"
                        value = {name}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group mb-2">
                    <label>Age</label>
                    <input
                        type="number"
                        className="form-control"
                        id="age"
                        name="age"
                        placeholder="Enter Age"
                        value = {age}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group mb-2">
                    <label>Country</label>
                    <select className="form-control" name="country" value={country} onChange={this.handleChange}>
                        <option disabled value="">
                            Select the Country
                        </option>
                        {countries.map((c1) => (
                            <option>{c1}</option>
                        ))}
                    </select>
                </div>
                <div className="form-check form-check-inline mb-2">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        value= "Male"
                        checked={gender === "Male"}
                        onChange={this.handleChange}
                    />
                    <label className="form-check-label">Male</label>
                </div>
                <div className="form-check form-check-inline mb-2">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        value= "Female"
                        checked={gender === "Female"}
                        onChange={this.handleChange}
                    />
                    <label className="form-check-label">Female</label>
                </div>
                <div className="form-check mb-2">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="passport"
                        value = {passport}
                        checked={passport}
                        onChange={this.handleChange}
                    />
                    <label className="form-check-label">Passport</label>
                </div>
                <div className="form-check mb-2">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="license"
                        value = {license}
                        checked={license}
                        onChange={this.handleChange}
                    />
                    <label className="form-check-label">License</label>
                </div>
                <br/>
                <button className="btn btn-primary" onClick={this.handleSubmit}>
                    Submit
                </button>
                
            </div>
        )
    }
}

export default SimpleForm5;