import React, { Component } from 'react';


class Employ1 extends Component {
  state = {
    employees: [
      { name: "Jack Smith", level: 2, dept: "Tech", designation: "Manager", salary: 24000 },
      { name: "Mary Robbins", level: 3, dept: "Fin", designation: "Manager", salary: 28000 },
      { name: "Steve Williams", level: 4, dept: "Ops", designation: "President", salary: 35000 },
      { name: "Bob Andrews", level: 1, dept: "Fin", designation: "Trainee", salary: 16500 },
      { name: "Dave Martin", level: 2, dept: "Fin", designation: "Manager", salary: 21700 },
      { name: "Julia Clarke", level: 3, dept: "Ops", designation: "Manager", salary: 26900 },
      { name: "Kathy Jones", level: 4, dept: "Tech", designation: "President", salary: 42500 },
      { name: "Tom Bresnan", level: 2, dept: "Tech", designation: "Manager", salary: 22200 }
    ]
  };

  render() {
    return (
      <div className="container mt-4">
        <h2 className="mb-3">Employee Table</h2>
        <table className="table table-bordered table-hover table-striped">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Level</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map((e, index) => (
              <tr key={index}>
                <td>{e.name}</td>
                <td>{e.level}</td>
                <td>{e.dept}</td>
                <td>{e.designation}</td>
                <td>{e.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Employ1;