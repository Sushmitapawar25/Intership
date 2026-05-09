import React, { Component } from "react";

class WorkStudyForm extends Component {
    state = {
        working: false,
        studying: false,
        companyName: "",
        designation: "",
        collegeName: "",
        course: "",
    };

    handleChange = (e) => {
        const { name, value, type, checked } = e.currentTarget;
        this.setState({ [name]: type === "checkbox" ? checked : value });
    };

    render() {
        const { working, studying, companyName, designation, collegeName, course } = this.state;

        return (
            <div className="container mt-3">
                <div className="card p-3">
                    <h5>Provide details below</h5>

                    <div className="form-check mb-2">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="working"
                            checked={working}
                            onChange={this.handleChange}
                        />
                        <label className="form-check-label">Working</label>
                    </div>

                    <div className="form-check mb-2">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="studying"
                            checked={studying}
                            onChange={this.handleChange}
                        />
                        <label className="form-check-label">Studying</label>
                    </div>

                    {working && (
                        <div className="mb-3">
                            <h6 className="fw-bold">Provide Job Details</h6>
                            <div className="form-group mb-2">
                                <label>Company Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="companyName"
                                    value={companyName}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group mb-2">
                                <label>Designation</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="designation"
                                    value={designation}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                    )}

                    {studying && (
                        <div className="mb-3">
                            <h6 className="fw-bold">Provide Course Details</h6>
                            <div className="form-group mb-2">
                                <label>College Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="collegeName"
                                    value={collegeName}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group mb-2">
                                <label>Course</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="course"
                                    value={course}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default WorkStudyForm;