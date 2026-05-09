import React,{Component} from "react";

class Task12 extends Component{

    state ={

        person:{
            name:"",
            age:"",
            workExp:"",
        },

        workExps:[
            "Fresher",
            "0-1 years",
            "1-3 years",
            "3-5 years",
            "5+ years",
        ],
    };

    handleChange = (e) => {

        const {currentTarget:input} = e;

        let s1 = {...this.state};

        s1.person[input.name] = input.value;

        this.setState(s1);
    };

    handleSubmit = (e) => {

        e.preventDefault();

        console.log(this.state.person);
    }

    render(){

        let {name,age,workExp} = this.state.person;

        let {workExps} = this.state;

        return(

            <div className="container mt-4">

                <h4 className="mb-3">
                    Enter Details
                </h4>

                <div className="form-group mb-3">

                    <label>
                        Name
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                        placeholder="Enter Name"
                    />

                </div>

                <div className="form-group mb-3">

                    <label>
                        Age
                    </label>

                    <input
                        type="number"
                        className="form-control"
                        name="age"
                        value={age}
                        onChange={this.handleChange}
                        placeholder="Enter Age"
                    />

                </div>

                <div className="form-group mb-3">

                    <label>
                        Years of Work Experience
                    </label>

                    <select
                        className="form-control"
                        name="workExp"
                        value={workExp}
                        onChange={this.handleChange}
                    >

                        <option value="">
                            Select Experience
                        </option>

                        {
                            workExps.map((w1,index) => (

                                <option key={index}>
                                    {w1}
                                </option>
                            ))
                        }

                    </select>

                </div>

                <button
                    className="btn btn-primary"
                    onClick={this.handleSubmit}
                >
                    Submit
                </button>

            </div>
        )
    }
}

export default Task12;