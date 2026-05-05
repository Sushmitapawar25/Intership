import React, {Component} from "react";

class Display1 extends Component{
    state = {
        Name: "James Smith",
        Age : 27,
        Email : "james@myemail.com",
    };

    show = () => {
            let {Name, Age, Email} = this.state;
            return (
                <React.Fragment>
                    <h2 className="text-success">Name : {Name}</h2>
                    <h4 className="text-primary">Age : {Age}</h4>
                    <h4 className="text-primary">Email : {Email}</h4>
                </React.Fragment>
            );
        }
        render(){
            return (<React.Fragment>{this.show()}</React.Fragment>);
        }
}

export default Display1;