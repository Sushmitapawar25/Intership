import React, { Component } from "react";

class Task2_2 extends Component {
    state = {
        view: 0,
        editIndex: -1,

        customer: {
            name: "",
            gender: "",
            delivery: "",
            payment: [],
            slot: "",
        },

        customers: [],
    };

    handleChange = (e) => {
        const { currentTarget: input } = e;
        let s1 = { ...this.state };
        let cust = { ...s1.customer };
        if (input.type === "checkbox") {
            let arr = cust.payment;
            if (input.checked) arr.push(input.value);
            else {
                let index = arr.findIndex((p) => p === input.value);
                arr.splice(index, 1);
            }
            cust.payment = arr;
        } else {
            cust[input.name] = input.value;
        }
        s1.customer = cust;
        this.setState(s1);
    };

    submitForm = () => {
        let s1 = { ...this.state };
        if (s1.editIndex >= 0)
            s1.customers[s1.editIndex] = s1.customer;
        else
            s1.customers.push(s1.customer);

        s1.customer = {
            name: "",
            gender: "",
            delivery: "",
            payment: [],
            slot: "",
        };

        s1.view = 1;
        s1.editIndex = -1;

        this.setState(s1);
    };

    showForm = () => {
        this.setState({
            view: 2,
            editIndex: -1,
            customer: {
                name: "",
                gender: "",
                delivery: "",
                payment: [],
                slot: "",
            },
        });
    };

    showCustomers = () => {
        this.setState({ view: 1 });
    };

    editCustomer = (index) => {
        this.setState({
            view: 2,
            customer: this.state.customers[index],
            editIndex: index,
        });
    };

    render() {
        let { view, customer, customers } = this.state;

        return (
            <div className="container mt-4">
                <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={this.showForm}
                >
                    New Customer
                </button>

                <button
                    className="btn btn-primary btn-sm"
                    onClick={this.showCustomers}
                >
                    List of Customers
                </button>

                <div className="mt-4">
                    {view === 0 ? (
                        <h4>Welcome to the Customer System</h4>
                    ) : view === 1 ? (
                        customers.length === 0 ? (
                            <h4>There are ZERO customers</h4>
                        ) : (
                            <React.Fragment>
                                <div className="row bg-dark text-white p-2 fw-bold">
                                    <div className="col-2">Name</div>
                                    <div className="col-2">Gender</div>
                                    <div className="col-2">Delivery</div>
                                    <div className="col-3">Payments</div>
                                    <div className="col-2">Slot</div>
                                    <div className="col-1"></div>
                                </div>

                                {customers.map((c1, index) => (
                                    <div className="row border p-2" key={index}>
                                        <div className="col-2">{c1.name}</div>

                                        <div className="col-2">{c1.gender}</div>

                                        <div className="col-2">{c1.delivery}</div>

                                        <div className="col-3">
                                            {c1.payment.join(", ")}
                                        </div>

                                        <div className="col-2">{c1.slot}</div>

                                        <div className="col-1">
                                            <button
                                                className="btn btn-info btn-sm"
                                                onClick={() => this.editCustomer(index)}
                                            >
                                                Edit
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </React.Fragment>
                        )
                    ) : (
                        <div className="mt-3">
                            <div className="form-group mb-2">
                                <label>Name</label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={customer.name}
                                    onChange={this.handleChange}
                                />
                            </div>

                            <div className="mb-2">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    checked={customer.gender === "Male"}
                                    onChange={this.handleChange}
                                />
                                <label className="ms-1 me-2">Male</label>

                                <input
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    checked={customer.gender === "Female"}
                                    onChange={this.handleChange}
                                />
                                <label className="ms-1">Female</label>
                            </div>

                            <label>
                                <b>Choose your Delivery Option</b>
                            </label>

                            <div>
                                <input
                                    type="radio"
                                    name="delivery"
                                    value="Home"
                                    checked={customer.delivery === "Home"}
                                    onChange={this.handleChange}
                                />
                                <label className="ms-1 me-2">Home</label>

                                <input
                                    type="radio"
                                    name="delivery"
                                    value="Office"
                                    checked={customer.delivery === "Office"}
                                    onChange={this.handleChange}
                                />
                                <label className="ms-1 me-2">Office</label>

                                <input
                                    type="radio"
                                    name="delivery"
                                    value="Pickup"
                                    checked={customer.delivery === "Pickup"}
                                    onChange={this.handleChange}
                                />
                                <label className="ms-1">Pickup</label>
                            </div>

                            <label>
                                <b>Choose your Payment Options</b>
                            </label>

                            <div>
                                <input
                                    type="checkbox"
                                    value="CreditCard"
                                    checked={customer.payment.includes("CreditCard")}
                                    onChange={this.handleChange}
                                />
                                <label className="ms-1">Credit Card</label>
                            </div>

                            <div>
                                <input
                                    type="checkbox"
                                    value="DebitCard"
                                    checked={customer.payment.includes("DebitCard")}
                                    onChange={this.handleChange}
                                />
                                <label className="ms-1">Debit Card</label>
                            </div>

                            <div>
                                <input
                                    type="checkbox"
                                    value="NetBanking"
                                    checked={customer.payment.includes("NetBanking")}
                                    onChange={this.handleChange}
                                />
                                <label className="ms-1">Net Banking</label>
                            </div>

                            <div className="form-group mt-2">
                                <select
                                    className="form-control"
                                    name="slot"
                                    value={customer.slot}
                                    onChange={this.handleChange}
                                >
                                    <option value="">Select the Delivery Slot</option>

                                    <option>Before 10 AM</option>

                                    <option>10 AM - 2 PM</option>

                                    <option>2 PM - 6 PM</option>
                                </select>
                            </div>

                            <button
                                className="btn btn-primary btn-sm mt-3"
                                onClick={this.submitForm}
                            >
                                Submit
                            </button>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Task2_2;