// Given list1, an array of names,
// a) Show the names in list1. CLicking on 
// any name removes it from list1 and adds it to list2
// b) SHow a x button with the names in list2.
// CLicking on the x button in list2 removes it from list2 
// and adds it back to list1

import React,{Component} from "react";

class Mycomp3 extends Component{
    state = {
        list1 : ["Bob","Tim","Julia","Steve","Edwards","George","kathy"],
        list2 : [],
    };

    list1Click = (index) => {
        let s1 = {...this.state};
        let name = s1.list1.splice(index,1);
        s1.list2.push(name);
        this.setState(s1);
    }

    list2Click = (index) => {
        let s1 = {...this.state};
        let name = s1.list2.splice(index,1);
        s1.list1.push(name);
        this.setState(s1);
    }
    render() {
        const {list1,list2} = this.state;
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-4 border">
                        <h4>List1</h4>
                        {list1.map((l1,index) => (
                            <span onClick={() => this.list1Click(index)}>
                                {l1}
                                <br/>
                            </span>
                        ))}
                    </div>
                    <div className="col-4 border">
                        <h4>List2</h4>
                        {list2.map((l1,index) => (
                            <React.Fragment>
                                {l1}<button className="btn btn-danger btn-sm" onClick={() => this.list2Click(index)}>x</button>
                                <br/>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Mycomp3;