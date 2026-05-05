// Define a component whose state has 3 strings - s1, s2, and s3
// a) Render the 3 strings
// b) Define a function that returns a jsx expression rendering the strings and use it to render the strings
 
import React,{Component} from "react";
class DefState extends Component{
    state = {
        s1 : "React",
        s2 : "Javascript",
        s3 : "Node.js",
    };

    showStrings = () => {
        let {s1, s2, s3} = this.state;
        return (
            <React.Fragment>
                <h1>{s1}</h1>
                <h1>{s2}</h1>
                <h1>{s3}</h1>
            </React.Fragment>
        );
    }
    render(){
        // a)
        // let {s1, s2, s3} = this.state;
        // return (
        //     <React.Fragment>
        //         {/* <h1>{this.state.s1}</h1>
        //         <h1>{this.state.s2}</h1>
        //         <h1>{this.state.s3}</h1> */}
        //         {/* or */}
        //         <h1>{s1}</h1>
        //         <h1>{s2}</h1>
        //         <h1>{s3}</h1>
        //     </React.Fragment>
        // );

        // b)
        return (<React.Fragment>{this.showStrings()}</React.Fragment>);
    }
}

export default DefState;