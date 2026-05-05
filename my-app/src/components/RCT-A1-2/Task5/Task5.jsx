import React, {Component} from "react";

class Display5 extends Component{
    state = {
        student:{
            name: "Bill Johnson",
            english : 61,
            maths : 55,
            computers : 100,
        }
    };

        render(){
            let {name,english,maths,computers} = this.state.student;

            let totalMarks = english + maths + computers;
            let grade = "";
            if(totalMarks >= 225){
                grade = "A";
            }else if(totalMarks >= 180){
                grade = "B";
            }else if(totalMarks >= 150){
                grade = "C";
            }else {
                grade = "D";
            }

            return(
                <React.Fragment>
                    <h4 className="text-secondary">Name: {name}</h4>
                    <h4 className="text-secondary">Marks in English: {english}</h4>
                    <h4 className="text-secondary">Marks in Maths: {maths}</h4>
                    <h4 className="text-secondary">Marks in Computers: {computers}</h4>
                    <h4 className="text-secondary">Total Marks: {totalMarks}</h4>
                    <h4 className="text-secondary">Grade: {grade}</h4>
                </React.Fragment>
            );
        }
}

export default Display5;