import React,{Component} from "react";

class Task14 extends Component{

    state ={

        person:{
            name:"",
            serversAccess:[],
        },

        servers:[
            "Development",
            "Deployment",
            "Alpha Test",
            "Beta Test",
            "BackUp",
        ],
    };

    updateCBs = (checked,value,arr) => {

        let newArr = [...arr];

        if(checked)
            newArr.push(value);

        else{

            let index =
                newArr.findIndex(
                    (ele) => ele === value
                );

            if(index >= 0)
                newArr.splice(index,1);
        }

        return newArr;
    };

    handleChange = (e) => {

        const {currentTarget:input} = e;

        let s1 = {...this.state};

        if(input.type === "checkbox"){

            s1.person.serversAccess =
                this.updateCBs(
                    input.checked,
                    input.value,
                    s1.person.serversAccess
                );
        }

        else{
            s1.person[input.name] = input.value;
        }

        this.setState(s1);
    };

    handleSubmit = (e) => {

        e.preventDefault();

        console.log(this.state.person);
    }

    render(){

        let {name,serversAccess} = this.state.person;

        let {servers} = this.state;

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

                <label className="fw-bold">
                    Choose Servers Access
                </label>

                {
                    servers.map((s1,index) => (

                        <div
                            className="form-check"
                            key={index}
                        >

                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="serversAccess"
                                value={s1}
                                checked={
                                    serversAccess.findIndex(
                                        (s2) => s2 === s1
                                    ) >= 0
                                }
                                onChange={this.handleChange}
                            />

                            <label className="form-check-label">
                                {s1}
                            </label>

                        </div>
                    ))
                }

                <br/>

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

export default Task14;