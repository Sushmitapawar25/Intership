import React, { Component } from 'react';
import StudentForm from './StudentFormm';
import MarksForm from './MarksForm';

class HomeScreen2 extends Component {

    state = {
        students: [],
        currentView: "",
        selectedStudent: null,

        studentData: {
            name: "",
            course: "",
            year: ""
        },

        marks: {
            maths: "",
            english: "",
            science: ""
        }
    }

    showStudents = () => {
        this.setState({
            currentView: "LIST"
        });

    }

    showStudentForm = () => {

        this.setState({
            currentView: "STUDENT_FORM",
            studentData: {
                name: "",
                course: "",
                year: ""
            }
        });

    }

    handleStudentChange = (e) => {
        this.setState({
            studentData: {
                ...this.state.studentData,
                [e.target.name]: e.target.value
            }
        });

    }
    addStudent = () => {
        const newStudent = {
            id: Date.now(),
            ...this.state.studentData,
            totalMarks: "No Data",
            marks: null
        };

        this.setState({
            students: [...this.state.students, newStudent],
            currentView: "LIST"
        });

    }
    handleEnter = (student) => {
        this.setState({
            selectedStudent: student,
            currentView: "MARKS_FORM"
        });

    }
    handleMarksChange = (e) => {
        this.setState({
            marks: {
                ...this.state.marks,
                [e.target.name]: e.target.value
            }
        });

    }
    saveMarks = () => {
        const total =
            Number(this.state.marks.maths) +
            Number(this.state.marks.english) +
            Number(this.state.marks.science);

        const updatedStudents =
            this.state.students.map((student) => {

                if (
                    student.id ===
                    this.state.selectedStudent.id
                ) {

                    return {
                        ...student,
                        marks: this.state.marks,
                        totalMarks: total
                    }

                }

                return student;

            });

        this.setState({
            students: updatedStudents,
            currentView: "LIST"
        });

    }

    render() {

        return (
            <div>
                <button
                    className='btn btn-primary me-2'
                    onClick={this.showStudents}
                >
                    List of Students
                </button>

                <button
                    className='btn btn-success'
                    onClick={this.showStudentForm}
                >
                    New Student
                </button>
                <hr />
                {
                    this.state.currentView === "LIST" &&

                    <StudentForm
                        students={this.state.students}
                        handleEnter={this.handleEnter}
                    />
                }

                {
                    this.state.currentView === "STUDENT_FORM" &&
                    <div className='card p-3'>
                        <h4 className='mb-3'>
                            New Student
                        </h4>
                        <div className='mb-2'>
                            <label>Name</label>
                            <input
                                type='text'
                                name='name'
                                className='form-control'
                                value={this.state.studentData.name}
                                onChange={this.handleStudentChange}
                            />

                        </div>

                        <div className='mb-2'>
                            <label>Course</label>
                            <input
                                type='text'
                                name='course'
                                className='form-control'
                                value={this.state.studentData.course}
                                onChange={this.handleStudentChange}
                            />

                        </div>

                        <div className='mb-2'>
                            <label>Year</label>
                            <input
                                type='text'
                                name='year'
                                className='form-control'
                                value={this.state.studentData.year}
                                onChange={this.handleStudentChange}
                            />

                        </div>

                        <button
                            className='btn btn-primary'
                            onClick={this.addStudent}
                        >
                            Submit
                        </button>

                    </div>
                }

                {
                    this.state.currentView === "MARKS_FORM" &&

                    <MarksForm
                        selectedStudent={this.state.selectedStudent}
                        marks={this.state.marks}
                        handleMarksChange={this.handleMarksChange}
                        saveMarks={this.saveMarks}
                    />
                }

            </div>
        );
    }
}

export default HomeScreen2;