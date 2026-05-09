import React, { Component } from "react";

class CountryCityDropdown extends Component {
    state = {
        locs: [
            { country: "India", cities: ["New Delhi", "Mumbai", "Bangalore", "Chennai", "Pune"] },
            { country: "USA", cities: ["Los Angeles", "Chicago", "New York", "Seattle", "Washington DC"] },
            { country: "France", cities: ["Paris", "Nice", "Lyon", "Cannes"] },
            { country: "Japan", cities: ["Tokyo", "Kyoto"] },
            { country: "China", cities: ["Shanghai", "Beijing", "Shenzen"] },
        ],
        selectedCountry: "",
        selectedCity: "",
    };

    handleCountry = (e) => {
        this.setState({ selectedCountry: e.target.value, selectedCity: "" });
    };

    handleCity = (e) => {
        this.setState({ selectedCity: e.target.value });
    };

    handleSubmit = () => {
        const { selectedCountry, selectedCity } = this.state;
        alert(`Country: ${selectedCountry}  City: ${selectedCity}`);
    };

    render() {
        const { locs, selectedCountry, selectedCity } = this.state;
        const cities = selectedCountry
            ? locs.find((l) => l.country === selectedCountry).cities
            : [];

        return (
            <div className="container mt-3">
                <h5>Country and City Dropdown</h5>
                <div className="row mt-3">
                    <div className="col-md-4">
                        <select
                            className="form-control mb-2"
                            value={selectedCountry}
                            onChange={this.handleCountry}
                        >
                            <option value="">Choose Country</option>
                            {locs.map((l) => (
                                <option key={l.country} value={l.country}>{l.country}</option>
                            ))}
                        </select>
                        <select
                            className="form-control mb-2"
                            value={selectedCity}
                            onChange={this.handleCity}
                            disabled={!selectedCountry}
                        >
                            <option value="">Choose City</option>
                            {cities.map((c) => (
                                <option key={c} value={c}>{c}</option>
                            ))}
                        </select>
                        <button className="btn btn-primary" onClick={this.handleSubmit}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CountryCityDropdown;