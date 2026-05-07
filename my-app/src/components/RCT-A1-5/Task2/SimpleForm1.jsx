import React, { Component } from "react";

class SimpleForm1 extends Component {
  state = {
    courseName: "",
    description: "",
    duration: "",
    faculty: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  handleSubmit = () => {
    let { courseName, description, duration, faculty } = this.state;

    console.log(
      "Course Details Submitted. Name : " +
        courseName +
        ", Description : " +
        description +
        ", Duration : " +
        duration +
        " days, Faculty : " +
        faculty
    );
  };

  render() {
    let { courseName, description, duration, faculty } = this.state;

    return (
      <div className="col-5 mt-2 m-3">
        <h5>Create a simple form which has 4 input fields</h5>

        <div className="mb-3">
          <label className="form-label">Name of the Course</label>

          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            name="courseName"
            value={courseName}
            onChange={this.handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>

          <input
            type="text"
            className="form-control"
            placeholder="Enter course description"
            name="description"
            value={description}
            onChange={this.handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Duration</label>

          <input
            type="number"
            className="form-control"
            placeholder="Enter course duration"
            name="duration"
            value={duration}
            onChange={this.handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Faculty</label>

          <input
            type="text"
            className="form-control"
            placeholder="Enter faculty name"
            name="faculty"
            value={faculty}
            onChange={this.handleChange}
          />
        </div>

        <button
          className="btn btn-primary"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default SimpleForm1;