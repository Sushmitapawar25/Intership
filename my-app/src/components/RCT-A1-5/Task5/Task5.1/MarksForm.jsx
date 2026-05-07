import React, { Component } from 'react';

class MarksForm extends Component {

    render() {

        return (
            <div className='card p-3'>

                <h4 className='mb-3'>

                    Enter marks for {" "}
                    {this.props.selectedStudent.name}

                </h4>

                <div className='mb-2'>

                    <label>Maths</label>

                    <input
                        type='number'
                        name='maths'
                        className='form-control'
                        value={this.props.marks.maths}
                        onChange={this.props.handleMarksChange}
                    />

                </div>

                <div className='mb-2'>

                    <label>English</label>

                    <input
                        type='number'
                        name='english'
                        className='form-control'
                        value={this.props.marks.english}
                        onChange={this.props.handleMarksChange}
                    />

                </div>

                <div className='mb-2'>

                    <label>Science</label>

                    <input
                        type='number'
                        name='science'
                        className='form-control'
                        value={this.props.marks.science}
                        onChange={this.props.handleMarksChange}
                    />

                </div>

                <button
                    className='btn btn-primary'
                    onClick={this.props.saveMarks}
                >
                    Submit
                </button>

            </div>
        );
    }
}

export default MarksForm;