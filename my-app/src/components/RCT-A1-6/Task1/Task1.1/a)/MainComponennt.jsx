/* Integrate the form with the main component.The main
   component shows a table of persons with the functionality to edit and delete and a
   button to enter the details of the new person.
*/

/* given an array of laptops
 . on the left show options to filter the laptops 
 . on the right show the filtered list of laptops
*/

import React,{Component} from "react";
import Show1 from "./inputForm";

class MainCOmponent1 extends Component {
    state ={
        persons: [
            {
            name: "Williams",
            age: 27,
            gender: "Male",
            passport: true,
            license: "",
            city: "",
            country: "",
            passportNumber: "FGRRT54234",
            designation: "",
            techsKnown: [],
            },
            {
            name: "Anna",
            age: 31,
            gender: "Female",
            passport: false,
            license: "",
            city: "",
            country: "",
            passportNumber: "",
            designation: "",
            techsKnown: [],
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
                        <div className="col-4 border">{p1.name}</div>
                        <div className="col-4 border">{p1.age}</div>
                        <div className="col-4 border">
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
                    <Show1 person={editPersonIndex >=0 ? persons[editPersonIndex] : {
                        name: "", age: "" ,gender: "", passport: false,
                        license:false, city: "", country: "",
                        passportNumber:"", designation: "", techsKnown: []
                    }} 
                        onSubmit={this.handleSubmit}
                        edit={editPersonIndex >= 0}
                    />
                )}
            </div>
        );
    }


}
export default MainCOmponent1;