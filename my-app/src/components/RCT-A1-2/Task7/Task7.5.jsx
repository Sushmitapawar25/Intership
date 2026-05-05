import React, { Component } from 'react';


class Employ3 extends Component {
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

  displayTable(arr) {
    return (
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
          {arr.map((e, index) => (
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
    );
  }

  render() {
    let {employees} = this.state;
    let employees1 = [...employees];
    const sortedByName = employees1.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    return (
      <div className="container mt-4">
        <h2 className="mb-3">Employees Sorted by Name</h2>
        {this.displayTable(sortedByName)}
      </div>
    );
  }
}

export default Employ3;