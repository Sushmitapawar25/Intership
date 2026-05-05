// Given an array of names and their contact details
// a) Show the names on buttons. On button clcik show their details with a
// button for Contact Info.
// b) On clicking contact info,show their contact details.

import React,{Component} from "react";

class Mycomp2 extends Component{
    state = {
        persons:[
            { name: "Jack",
              age: 25,
              skills: "Javascript ,React",
              email : "jack@email.com",
              mobile: "2345441414",
            },
            { name: "Anna",
              age: 29,
              skills: "Node.js, MongoDB",
              email : "Anna@email.com",
              mobile: "781120053",
            },
            { name: "Steve",
              age: 31,
              skills: "Android App Development",
              email : "steve@email.com",
              mobile: "9678124493",
            },
        ],
        indexPerson: -1,
        showContact: false,
    };

    setIndex = (index) => {
        let s1 = {...this.state}
        s1.indexPerson = index;
        s1.showContact = false; 
        this.setState(s1);
    };

    showPerson = () => {
        const {persons,indexPerson,showContact} = this.state;
        return (
            <React.Fragment>
                Name : {persons[indexPerson].name};
                <br/>
                Age : {persons[indexPerson].age};
                <br/>
                Skills : {persons[indexPerson].skills};
                <br/>
                <button className="btn btn-primary" onClick={() => this.showContactDetails()}>Contact Info</button><br/>
                {showContact ? (
                    <React.Fragment>
                        Email : {persons[indexPerson].email} <br/>
                        Mobile : {persons[indexPerson].mobike} <br/>
                    </React.Fragment>
                    ) : ("")}
            </React.Fragment>
        );
    };

    showContactDetails = () => { 
        let s1 = {...this.state};
        s1.showContact = true;
        this.setState(s1);
    };

    render(){
        const {persons,indexPerson} = this.state;
        return (
            <React.Fragment>
                {persons.map((p1,index) => (
                    <button className="btn btn-primary m-2" onClick={() => this.setIndex(index)}>{p1.name}</button>
                ))}
                <br/>
                {indexPerson >= 0 ? this.showPerson() : ""}
            </React.Fragment>
        );
    }
}

export default Mycomp2;