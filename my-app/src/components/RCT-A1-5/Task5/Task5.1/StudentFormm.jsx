import React, { Component } from 'react';

class StudentForm extends Component {

    render() {

        return (
            <div>

                {
                    this.props.students.length === 0 ?

                        <div className='alert alert-danger'>
                            There are 0 students
                        </div>

                        :

                        <div>

                            <div className='row bg-dark text-white p-2 fw-bold'>

                                <div className='col'>Name</div>
                                <div className='col'>Course</div>
                                <div className='col'>Year</div>
                                <div className='col'>Total</div>
                                <div className='col'>Action</div>

                            </div>

                            {
                                this.props.students.map((student) => (

                                    <div
                                        className='row border p-2'
                                        key={student.id}
                                    >

                                        <div className='col'>
                                            {student.name}
                                        </div>

                                        <div className='col'>
                                            {student.course}
                                        </div>

                                        <div className='col'>
                                            {student.year}
                                        </div>

                                        <div className='col'>
                                            {student.totalMarks}
                                        </div>

                                        <div className='col'>

                                            {
                                                student.marks ?

                                                    <button className='btn btn-success btn-sm'>
                                                        Done
                                                    </button>

                                                    :

                                                    <button
                                                        className='btn btn-primary btn-sm'
                                                        onClick={() =>
                                                            this.props.handleEnter(student)
                                                        }
                                                    >
                                                        Enter
                                                    </button>
                                            }

                                        </div>

                                    </div>

                                ))
                            }

                        </div>
                }

            </div>
        );
    }
}

export default StudentForm;