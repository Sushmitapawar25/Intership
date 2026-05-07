import React, { Component } from 'react';
import CustomerForm1 from './CustomerForm1';

class HomeScreen1 extends Component {
    state = {
        view: "welcome",
        customers: [],
        editCustomer: null
    };

    showNewCustomer = () => {
        this.setState({ view: "form", editCustomer: null });
    }

    showList = () => {
        this.setState({ view: "list" });
    }

    showEdit = (customer) => {
        this.setState({ view: "form", editCustomer: { ...customer } });
    }

    submitCustomer = (customer) => {
        const { editCustomer, customers } = this.state;

        if (editCustomer) {
            const updated = customers.map(c =>
                c.id === editCustomer.id ? { ...customer, id: c.id } : c
            );
            this.setState({ customers: updated, view: "list", editCustomer: null });
        } else {
            const updated = [...customers];
            updated.push({ ...customer, id: Date.now() });
            this.setState({ customers: updated, view: "list" });
        }
    }

    render() {
        const { view, customers, editCustomer } = this.state;

        return (
            <div className="container mt-3">
                <div className="mb-3">
                    <button className="btn btn-primary me-2" onClick={this.showNewCustomer}>New Customer</button>
                    <button className="btn btn-primary" onClick={this.showList}>List of Customers</button>
                </div>
                {view === "welcome" && (
                    <p>Welcome to the Customer System</p>
                )}

                {view === "form" && (
                    <CustomerForm1
                        editCustomer={editCustomer}
                        onSubmit={this.submitCustomer}
                    />
                )}

                {view === "list" && (
                    <div>
                        {customers.length === 0
                            ? <p>There are ZERO customers</p>
                            : <div>
                                <div className="row border m-1 bg-dark text-white">
                                    <div className="col-3 p-2 fw-bold">Name</div>
                                    <div className="col-3 p-2 fw-bold">Age</div>
                                    <div className="col-4 p-2 fw-bold">Email</div>
                                    <div className="col-2 p-2 fw-bold"></div>
                                </div>
                                {customers.map((c) => (
                                    <div key={c.id} className="row border m-1 bg-light">
                                        <div className="col-3 p-2">{c.name}</div>
                                        <div className="col-3 p-2">{c.age}</div>
                                        <div className="col-4 p-2">{c.email}</div>
                                        <div className="col-2 p-2">
                                            <button
                                                className="btn btn-info btn-sm"
                                                onClick={() => this.showEdit(c)}
                                            >
                                                Edit
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                )}

            </div>
        );
    }
}

export default HomeScreen1;