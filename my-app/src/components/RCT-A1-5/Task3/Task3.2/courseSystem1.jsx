import React, { Component } from "react";

class CourseSystem1 extends Component {
  state = {
    courses: ["React", "Angular"],
    courseName: "",
    view: false,
    editIndex: -1,
  };

  handleChange = (e) => {
    this.setState({
      courseName: e.currentTarget.value,
    });
  };

  showForm = () => {
    this.setState({
      view: true,
      courseName: "",
      editIndex: -1,
    });
  };

  addCourse = () => {
    let s1 = { ...this.state };

    if (s1.editIndex >= 0) {
      s1.courses[s1.editIndex] = s1.courseName;
    } else {
      s1.courses.push(s1.courseName);
    }

    s1.courseName = "";
    s1.view = false;
    s1.editIndex = -1;

    this.setState(s1);
  };

  editCourse = (index) => {
    this.setState({
      courseName: this.state.courses[index],
      view: true,
      editIndex: index,
    });
  };

  render() {
    let { courses, courseName, view } = this.state;

    return (
      <div className="container mt-5">
        <button
          className="btn btn-primary btn-sm"
          onClick={this.showForm}
        >
          Add Course
        </button>

        {view ? (
          <div className="mt-3 col-4">
            <label className="form-label">Add a Course</label>

            <input
              type="text"
              className="form-control"
              value={courseName}
              onChange={this.handleChange}
            />
            <button
              className="btn btn-primary btn-sm mt-2"
              onClick={this.addCourse}
            >
              Submit
            </button>
          </div>
        ) : (
          ""
        )}

        <h4 className="mt-3">List of Courses</h4>

        {courses.length === 0 ? (
          <p>There are ZERO Courses</p>
        ) : (
          <ul>
            {courses.map((c1, index) => (
              <li key={index}>
                {c1}

                <button
                  className="btn btn-warning btn-sm ms-2 mb-2"
                  onClick={() => this.editCourse(index)}
                >
                  Edit
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default CourseSystem1;