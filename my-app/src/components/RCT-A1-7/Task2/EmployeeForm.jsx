import React, { Component } from "react";

class EmployeeForm extends Component {
    state = {
        employee: this.props.employee,
        errors: {},
    };

    handleChange = (e) => {
        const { currentTarget: input } = e;
        let s1 = { ...this.state };
        s1.employee[input.name] = input.value;
        s1.errors[input.name] = this.validateField(input.name, input.value);
        this.setState(s1);
    };

    handleBlur = (e) => {
        const { currentTarget: input } = e;
        let s1 = { ...this.state };
        s1.errors[input.name] = this.validateField(input.name, input.value);
        this.setState(s1);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let errors = this.validateAll();
        if (this.isValid(errors)) {
            alert("Successfully Submitted");
            this.props.onSubmit(this.state.employee);
        } else {
            let s1 = { ...this.state };
            s1.errors = errors;
            this.setState(s1);
        }
    };

    validateField = (name, value) => {
        switch (name) {
            case "name":
                return this.validateName(value);
            case "age":
                return this.validateAge(value);
            case "email":
                return this.validateEmail(value);
            case "city":
                return this.validateCity(value);
            default:
                return "";
        }
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
            : age <= 20
            ? "Age should be greater than 20"
            : "";

    validateEmail = (email) =>
        !email
            ? "Email must be entered"
            : !email.includes("@")
            ? "Email should have @ character"
            : "";

    validateCity = (city) =>
        !city
            ? "City must be entered"
            : city.length < 3
            ? "City should have minimum 3 characters"
            : "";

    validateAll = () => {
        const { name, age, email, city } = this.state.employee;
        let errors = {};
        errors.name = this.validateName(name);
        errors.age = this.validateAge(age);
        errors.email = this.validateEmail(email);
        errors.city = this.validateCity(city);
        return errors;
    };

    isValid = (errors) => {
        let keys = Object.keys(errors);
        let count = keys.reduce(
            (acc, curr) => (errors[curr] ? acc + 1 : acc),
            0
        );
        return count === 0;
    };

    isFormValid = () => {
        let errors = this.validateAll();
        return this.isValid(errors);
    };

    render() {
        const { name, age, email, city, address } = this.state.employee;
        const { errors } = this.state;

        return (
            <div className="container">
                <h5>Employee Form</h5>

                <div className="form-group mb-2">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Enter Name"
                        value={name}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                    />
                    {errors.name && (
                        <span className="text-danger">{errors.name}</span>
                    )}
                </div>

                <div className="form-group mb-2">
                    <label>Age</label>
                    <input
                        type="number"
                        className="form-control"
                        name="age"
                        placeholder="Enter Age"
                        value={age}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                    />
                    {errors.age && (
                        <span className="text-danger">{errors.age}</span>
                    )}
                </div>

                <div className="form-group mb-2">
                    <label>Email</label>
                    <input
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                    />
                    {errors.email && (
                        <span className="text-danger">{errors.email}</span>
                    )}
                </div>

                <div className="form-group mb-2">
                    <label>City</label>
                    <input
                        type="text"
                        className="form-control"
                        name="city"
                        placeholder="Enter City"
                        value={city}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                    />
                    {errors.city && (
                        <span className="text-danger">{errors.city}</span>
                    )}
                </div>

                <div className="form-group mb-2">
                    <label>Address</label>
                    <input
                        type="text"
                        className="form-control"
                        name="address"
                        placeholder="Enter Address (Optional)"
                        value={address}
                        onChange={this.handleChange}
                    />
                </div>

                <button
                    className="btn btn-primary mt-2"
                    onClick={this.handleSubmit}
                    disabled={!this.isFormValid()}
                >
                    Submit
                </button>
            </div>
        );
    }
}

export default EmployeeForm;