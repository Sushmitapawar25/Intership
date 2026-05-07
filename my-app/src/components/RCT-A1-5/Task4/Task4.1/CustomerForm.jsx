import React, { Component } from 'react';

class CustomerForm extends Component {
    state = {
        name: "",
        age: "",
        email: ""
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = () => {
        this.props.onSubmit({ ...this.state });
    }

    render() {
        const { name, age, email } = this.state;

        return (
            <div>
                <div className="mb-2">
                    <label>Name</label>
                    <input
                        className="form-control"
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="mb-2">
                    <label>Age</label>
                    <input
                        className="form-control"
                        type="text"
                        name="age"
                        value={age}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="mb-2">
                    <label>Email ID</label>
                    <input
                        className="form-control"
                        type="text"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                </div>
                <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}

export default CustomerForm;