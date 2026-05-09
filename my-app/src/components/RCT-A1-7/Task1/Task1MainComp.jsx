import React,{Component} from "react";
import SimpleForm from "./task1Simpleforms";

class MainCOmponent3 extends Component {
    state ={
        persons: [
            {
            name: "Williams",
            age: 27,
            gender: "Male",
            passport: true,
            license: "",
            city: "",
            country: "India",
            passportNumber: "FGRRT54234",
            designation: "",
            techsKnown: [],
            },
            {
            name: "Anna",
            age: 31,
            gender: "Female",
            country: "Canada",
            },
        ],
        view: 0,
        editPersonIndex: -1,
    };

    handleSubmit = (person) => {
        console.log(person);
        let s1 = {...this.state};
        s1.editPersonIndex >= 0
            ? (s1.persons[s1.editPersonIndex] = person)
            : s1.persons.push(person);
        s1.view = 0;
        s1.editPersonIndex = -1;
        this.setState(s1);
    }
    
    showForm = () => {
        let s1 = {...this.state};
        s1.view = 1;
        s1.editPersonIndex = -1;
        this.setState(s1);
    }
    editPerson = (index) => {
        let s1 = {...this.state};
        s1.view = 1;
        s1.editPersonIndex = index;
        this.setState(s1);
    }
    deletePerson = (index) => {
        let s1 = {...this.state};
        s1.persons.splice(index,1);
        this.setState(s1);
    }
    
    showPersons = () => {
        return (
            <React.Fragment>
                <h4>Details of persons</h4>
                {this.state.persons.map((p1,index) => (
                    <div className="row border" key={index}>
                        <div className="col-3 border">{p1.name}</div>
                        <div className="col-3 border">{p1.age}</div>
                        <div className="col-3 border">{p1.country}</div>
                        <div className="col-3 border">
                            <button className="btn btn-warning btn-sm mr-2" onClick={() => this.editPerson(index)}>Edit</button>&nbsp;&nbsp;
                            <button className="btn btn-danger btn-sm " onClick={() => this.deletePerson(index)}>Delete</button>
                        </div>
                    </div>
                ))}
                <button className="btn btn-primary" onClick={() => this.showForm()}>Add New Person</button>
            </React.Fragment>
        );
    };
    render() {
        let {persons, view, editPersonIndex } = this.state;
        return (
            <div className="container">
                {view === 0 ? (
                    this.showPersons()
                ) : (
                    <SimpleForm person={editPersonIndex >=0 ? persons[editPersonIndex] : {
                        name: "", age: "" , country: ""
                    }} 
                        onSubmit={this.handleSubmit}
                        edit={editPersonIndex >= 0}
                    />
                )}
            </div>
        );
    }


}
export default MainCOmponent3;