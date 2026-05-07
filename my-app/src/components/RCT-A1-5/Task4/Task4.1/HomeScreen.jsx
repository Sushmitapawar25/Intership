import React, { Component } from 'react';
import CustomerForm from './CustomerForm';

class HomeScreen extends Component {
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

    submitCustomer = (customer) => {
        const customers = [...this.state.customers];
        customers.push({...customer, id: Date.now() });
        this.setState({ customers, view: "list" });
    }

    render() {
        const { view, customers } = this.state;

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
                    <CustomerForm
                        onSubmit={this.submitCustomer}
                    />
                )}


                {view === "list" && (
                    <div>
                        {customers.length === 0
                            ? <p>There are ZERO customers</p>
                            : <div>
                                <div className="row border m-1 bg-dark text-white">
                                    <div className="col-4 p-2 fw-bold">Name</div>
                                    <div className="col-3 p-2 fw-bold">Age</div>
                                    <div className="col-5 p-2 fw-bold">Email</div>
                                </div>
                                {customers.map((c) => (
                                    <div key={c.id} className="row border m-1 bg-light">
                                        <div className="col-4 p-2">{c.name}</div>
                                        <div className="col-3 p-2">{c.age}</div>
                                        <div className="col-5 p-2">{c.email}</div>
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

export default HomeScreen;