import React,{Component} from "react";

class Task13 extends Component{

    state ={

        person:{
            name:"",
            age:"",
            manager:"",
        },

        managers:[
            "Meg Smith",
            "Bill Watson",
            "Tim Gates",
            "George Cook",
            "Larry Gomes",
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

        let {name,age,manager} = this.state.person;

        let {managers} = this.state;

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

                <div className="mb-3">

                    <label className="fw-bold">
                        Choose Manager
                    </label>

                    <br/>

                    {
                        managers.map((m1,index) => (

                            <div
                                className="form-check"
                                key={index}
                            >

                                <input
                                    type="radio"
                                    className="form-check-input"
                                    name="manager"
                                    value={m1}
                                    checked={manager === m1}
                                    onChange={this.handleChange}
                                />

                                <label className="form-check-label">
                                    {m1}
                                </label>

                            </div>
                        ))
                    }

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

export default Task13;