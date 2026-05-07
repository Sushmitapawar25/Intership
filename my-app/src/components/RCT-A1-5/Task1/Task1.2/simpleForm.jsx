import React,{Component} from "react";

class SimpleForm1 extends Component{
    state = {
        person: this.props.person,
    }

    handleChange = (e) => {
        console.log(e.currentTarget);
        let s1 = {...this.state};
        // if(e.currentTarget.name === "name") s1.person.name = e.currentTarget.value;
        // if(e.currentTarget.name === "age") s1.person.age = e.currentTarget.value;
        s1.person[e.currentTarget.name]= e.currentTarget.value;
        this.setState(s1);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Handle Submit",this.state.person);
        this.props.onSubmit(this.state.person)
    }
    render(){
        let {name,age} = this.state.person;
        return(
            <div className="container">
                <h5>{this.props.edit ? "Edit Details" : "Enter Details of Person"}</h5>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Enter Name"
                        onChange={this.handleChange}
                    />
                </div><br/>
                <div className="form-group">
                    <label>Age</label>
                    <input
                        type="text"
                        className="form-control"
                        id="age"
                        name="age"
                        placeholder="Enter Age"
                        onChange={this.handleChange}
                    />
                </div><br/>
                <button className="btn btn-primary" onClick={this.handleSubmit}>{this.props.edit ? "update" : "Submit"}</button>
            </div>
        );
    }
}

export default SimpleForm1;