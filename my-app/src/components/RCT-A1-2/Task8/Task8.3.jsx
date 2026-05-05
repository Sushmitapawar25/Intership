import React, { Component } from 'react';


class Empp3 extends Component {
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
    const { employees } = this.state;

    const totalSalary = employees.reduce((sum, e) => sum + e.salary, 0);
    const avgSalary   = Math.round(totalSalary / employees.length);
    const maxSalary   = Math.max(...employees.map(e => e.salary));
    const minSalary   = Math.min(...employees.map(e => e.salary));
    const techCount   = employees.filter(e => e.dept === "Tech").length;
    const finCount    = employees.filter(e => e.dept === "Fin").length;
    const opsCount    = employees.filter(e => e.dept === "Ops").length;

    return(
        <div className="container border">
            <h4 className='text-center mt-2'>Welcome to the Employee Portal</h4>

            <div className="row">
                {employees.map((p1) => {
                    let {name,dept,designation} = p1;
                    return(
                        <div className="col-6 border text-center">
                            <b>{name}</b><br/>
                            Department:{dept}<br/>
                            Designation:{designation}<br/>
                        </div>
                    );
                })}
                <div className="row bg-warning m-0 p-0 ">
                    <div className="col-6 text-center">
                        <h4>Employee Details</h4>
                            Number of employees : {employees.length}
                            <br/>
                            Tech : {techCount}
                            <br/>
                            Fin : {finCount}
                            <br/>
                            Ops : {opsCount}
                            <br/>
                    </div>
                    <div className="col-6 text-center">
                        <h4>Salary Details</h4>
                            Total Salary : {totalSalary}<br/>
                            Average Salary : {avgSalary}<br/>
                            Max Salary : {maxSalary }<br/>
                            Min Salary : {minSalary }<br/>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Empp3;