// define a component whose state has an array of students where each student is a JSOn.
// a) Render the array as a table
// b) Show the row in green if the total is at least 60, otherwise red
// c) Filter the array and show only those whose total is at least 60

import React,{Component} from "react";
class StudentArr extends Component{
    state = {
        students : [
            {name: "Williams", maths:34, english: 36},
            {name: "George", maths:24, english: 31},
            {name: "Katherine", maths:36, english: 41},
            {name: "Sophia", maths:45, english: 37},
            {name: "Timothy", maths:22, english: 19},
        ],
    };

    getRowStyle = (m1,m2) => (m1 + m2 >=60 ? "bg-success" : "bg-danger");
    render(){
        let {students} = this.state;

        const sts = students.filter((s1) => s1.maths + s1.english >= 50);

        return(
            <div className="container">
                <div className="row border bg-dark text-white">
                        <div className="col-6 border">Name</div>
                        <div className="col-3 border text-center">Maths</div>
                        <div className="col-3 border text-center">English</div>
                </div>

            {/* //a    {students.map((st) => { */}
                {sts.map((st) => {
                    let {name, maths, english} = st;
                    return (
                        <div className={"row border " + this.getRowStyle(maths,english)}>
                            <div className="col-6 border">{name}</div>
                            <div className="col-3 border text-center">{maths}</div>
                            <div className="col-3 border text-center">{english}</div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default StudentArr;