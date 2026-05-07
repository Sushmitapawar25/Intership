import React,{Component} from "react";
import SimpleForm from "./SimpleForm";

class MainCOmponent extends Component {

    handlePerson = (person) => {
        console.log("In Handle person",person);
    }
    render() {
        let person = {name: "", age: ""};
        return (
            <SimpleForm person={person} onSubmit={this.handlePerson}/>
        )
    }
}

export default MainCOmponent;