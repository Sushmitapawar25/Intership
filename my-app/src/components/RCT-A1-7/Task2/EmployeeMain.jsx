import React, { Component } from "react";
import EmployeeForm from "./EmployeeForm";

class EmployeeMain extends Component {
    state = {
        employees: [
            { name: "Williams", age: 27, email: "williams@gmail.com", city: "Pune", address: "" },
            { name: "Anna", age: 31, email: "anna@gmail.com", city: "Mumbai", address: "" },
        ],
        view: 0,
        editIndex: -1,
    };

    handleSubmit = (employee) => {
        let s1 = { ...this.state };
        s1.editIndex >= 0
            ? (s1.employees[s1.editIndex] = employee)
            : s1.employees.push(employee);
        s1.view = 0;
        s1.editIndex = -1;
        this.setState(s1);
    };

    showForm = () => {
        let s1 = { ...this.state };
        s1.view = 1;
        s1.editIndex = -1;
        this.setState(s1);
    };

    editEmployee = (index) => {
        let s1 = { ...this.state };
        s1.view = 1;
        s1.editIndex = index;
        this.setState(s1);
    };

    deleteEmployee = (index) => {
        let s1 = { ...this.state };
        s1.employees.splice(index, 1);
        this.setState(s1);
    };

    showEmployees = () => {
        return (
            <React.Fragment>
                <h4>Details of Employees</h4>
                <div className="row bg-dark text-white p-2 mx-0">
                    <div className="col-2">Name</div>
                    <div className="col-2">Age</div>
                    <div className="col-3">Email</div>
                    <div className="col-2">City</div>
                    <div className="col-3">Actions</div>
                </div>
                {this.state.employees.map((e1, index) => (
                    <div className="row border border-top-0 p-2 mx-0" key={index}>
                        <div className="col-2">{e1.name}</div>
                        <div className="col-2">{e1.age}</div>
                        <div className="col-3">{e1.email}</div>
                        <div className="col-2">{e1.city}</div>
                        <div className="col-3">
                            <button
                                className="btn btn-warning btn-sm me-2"
                                onClick={() => this.editEmployee(index)}
                            >
                                Edit
                            </button>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => this.deleteEmployee(index)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
                <button
                    className="btn btn-primary mt-3"
                    onClick={this.showForm}
                >
                    Add New Employee
                </button>
            </React.Fragment>
        );
    };

    render() {
        const { employees, view, editIndex } = this.state;
        return (
            <div className="container mt-3">
                {view === 0 ? (
                    this.showEmployees()
                ) : (
                    <EmployeeForm
                        employee={
                            editIndex >= 0
                                ? employees[editIndex]
                                : { name: "", age: "", email: "", city: "", address: "" }
                        }
                        onSubmit={this.handleSubmit}
                        edit={editIndex >= 0}
                    />
                )}
            </div>
        );
    }
}

export default EmployeeMain;