// Define a component whose state has an array of numbers.
// a) It renders the array of numbers as a list
// b) It sorts the numbers in ascending order and renders them as a list.


import React,{Component} from "react";
class ArrNum extends Component{
    state = {
        nums : [10,7,18,12,25]
    };

    render(){
        let {nums} = this.state;
        let nums1 = [...nums];
        nums1.sort((n1,n2) => n1 - n2); //Ascending the array element
        return(
            <React.Fragment>
                <ul>
                    {nums1.map(n1 => <li>{n1}</li>)}
                </ul>
            </React.Fragment>
        );
    }
}

export default ArrNum;