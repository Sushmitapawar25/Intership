import React, { Component } from "react";

class CourseSystem extends Component {
    state = {
        courses: [],
        courseName: "",
        view: false,
    };

    handleChange = (e) => {
        this.setState({
            courseName: e.currentTarget.value,
        });
    };

    showForm = () => {
        this.setState({
            view: true,
        });
    };

    addCourse = () => {
        let s1 = { ...this.state };
        s1.courses.push(s1.courseName);
        s1.courseName = "";
        s1.view = false;
        this.setState(s1);
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
                            <li key={index}>{c1}</li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }
}

export default CourseSystem;