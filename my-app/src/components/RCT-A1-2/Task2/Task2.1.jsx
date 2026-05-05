import React, {Component} from "react";

class Display extends Component{
    state = {
        Name: "James Smith",
        Age : 27,
        Email : "james@myemail.com",
    };

        render(){
            let {Name, Age, Email} = this.state;
            return(
                <React.Fragment>
                    <h2 className="text-success">{Name}</h2>
                    <h4 className="text-primary">{Age}</h4>
                    <h4 className="text-primary">{Email}</h4>
                </React.Fragment>
            );
        }
}

export default Display;

