// define a component that renders 2 buttons ABC and 123
// a) Clicking on the button with ABC shows ABC on the screen,while
// while clicking on 123 shows 123
// b) Also keep a count of the number of times
// each button is clicked and display it.

import React ,{Component} from "react";

class MyComp1 extends Component {
    state = {
        txt : "No button clicked",
        count : 0,
    };

    // clickedABC = () => {
    //     console.log("Clicked ABC");
    //     let s1 = {...this.state};
    //     s1.txt = "ABC";
    //     this.setState(s1);
    // }
    // clicked123 = () => {
    //     console.log("Clicked 123");
    //     let s1  = {...this.state};
    //     s1.txt = "123";
    //     this.setState(s1);
    // }

    clickedBtn = (str) => {
        console.log("Clicked",str);
        let s1 = {...this.state};
        s1.txt = str;
        s1.count = s1.count + 1;
        this.setState(s1);
    }

    render() {
        console.log("In render method");

        const {txt,count} = this.state;
        return (
            <React.Fragment>
                <button className="btn btn-primary" onClick={() => this.clickedBtn("ABC")}>ABC</button>&nbsp;
                <button className="btn btn-primary" onClick={() => this.clickedBtn("123")}>123</button>
                <br/>
                txt : {txt}
                <br/>
                count : {count}
            </React.Fragment>
        );
    }
}

export default MyComp1;