// Given an array of designations, show radio buttons
// to input the designation.

/* Given an array of technologies, show checkboxes to input the technologies 
   that the person is comfortable with.
*/

import React,{Component} from "react";

class Show1 extends Component{
    state ={
        person: this.props.person,
        countries: [
            "United States of America",
            "Canada",
            "India",
            "United Kingdom",
        ],
        countryList: [
            {
                country: "United States of America",
                cities: ["New York","Los Angeles", "Seattle","San Francisco"],
            },
            {
                country: "Canada",
                cities: ["Toronto","Montreal","Vancouver"],
            },
            {
                country: "India",
                cities: ["New Delhi","Bengaluru","Pune","Chennai"],
            },
            {
                country: "United Kingdom",
                cities: ["London","Bristol","Manchester"],
            },
        ],
        designations: [
            "Developer",
            "Senior Developer",
            "Team Lead",
            "Architect",
            "Delivery Manager",
        ],
        techs: ["React","Javascript","JQuery","AngularJS"],
    };

    handleChange = (e) => {
        const {currentTarget: input} = e;
        let s1 = {...this.state};
        input.type === "checkbox"
          ? input.name === "techsKnown"
            ? (s1.person.techsKnown = this.updateCBs(input.checked,input.value, s1.person.techsKnown))
            : (s1.person[input.name] = input.checked)
          : (s1.person[input.name] = input.value);
        if (input.name === "country") s1.person.city = "";
        if (!s1.person.passport) s1.person.passportNumber = "";
        // s1.person[input.name] = input.value;
        this.setState(s1);
    };

    updateCBs = (checked, value, arr) => {
        if(checked) arr.push(value);
        else {
            let index = arr.findIndex((ele) => ele === value);
            if(index >= 0) arr.splice(index,1);
        }
        return arr;
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Handle Submit",this.state.person);
        this.props.onSubmit(this.state.person);
    }

    render() {
        let {name,age, country,gender,passport,license,city,passportNumber,designation,techsKnown=[]} = this.state.person;
        const {countries, countryList,designations,techs} = this.state;
        const cities = country ? countryList.find(c1 => c1.country===country).cities : [];
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
                {country ? <div className="form-group mb-2">
                            <label>City</label>
                            <select className="form-control" name="city" value={city} onChange={this.handleChange}>
                                <option disabled value="">
                                    Select the City
                                </option>
                                {cities.map((c1) => (
                                    <option>{c1}</option>
                                ))}
                            </select>
                        </div> : ""
                }
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
                        checked={passport}
                        onChange={this.handleChange}
                    />
                    <label className="form-check-label">Passport</label>
                </div>
                {passport ? (
                    <div className="form-group mb-2">
                        <label>Passport Number</label>
                        <input
                            type="text"
                            className="form-control"
                            id="passportNumber"
                            name="passportNumber"
                            placeholder="Enter Passport Number"
                            value = {passportNumber}
                            onChange={this.handleChange}
                        />
                    </div>
                ) : (
                    ""
                )}
                <div className="form-check mb-2">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="license"
                        checked={license}
                        onChange={this.handleChange}
                    />
                    <label className="form-check-label">License</label>
                </div>
                <label className="form-check-label font-weight-bold">Choose the Designation</label><br/>
                {designations.map((d1) => (
                    <div className="form-check form-check-inline mb-2">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="designation"
                        value= {d1}
                        checked={designation === d1}
                        onChange={this.handleChange}
                    />
                    <label className="form-check-label">{d1}</label>
                </div>
                ))}<br/>
                <label className="form-check-label font-weight-bold">Choose the Technologies</label>
                {techs.map((t1) => (
                    <div className="form-check mb-2">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="techsKnown"
                        value={t1}
                        checked={techsKnown.findIndex((tech) => tech === t1) >= 0}
                        onChange={this.handleChange}
                    />
                    <label className="form-check-label">{t1}</label>
                </div>
                ))}
                <br/>
                <button className="btn btn-primary" onClick={this.handleSubmit}>
                    Submit
                </button>
                
            </div>
        )
    }
}

export default Show1;