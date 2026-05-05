import React, {Component} from "react";

class Display3 extends Component{
    state = {
        employee:{
           name : "Steve Martin",
           company : "Google",
           department : "Technology",
           designation : "Senior Developer"
        }
    };

    show = () => {
            let {name,company,department,designation} = this.state.employee;
            return (
                <React.Fragment>
                    <h4 className="text-secondary">Name: {name}</h4>
                    <h4 className="text-secondary">Company: {company}</h4>
                    <h4 className="text-secondary">Department: {department}</h4>
                    <h4 className="text-secondary">Designation: {designation}</h4>
                </React.Fragment>
            );
        }
        render(){
            return (<React.Fragment>{this.show()}</React.Fragment>);
        }
}

export default Display3;