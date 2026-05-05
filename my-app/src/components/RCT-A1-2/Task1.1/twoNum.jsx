// Define a component whose state has 2 numbers x and y
// a) Render the two numbers, their sum and the larger numberr
// b) Also render, whether the numbers are prime or not.

import React,{Component} from "react";
class TwoNum extends Component{
    state = {
        x:20,
        y:17,
    };

    isPrime = (num) => {
        for(let i=2; i<num; i++){
            if(num % i === 0) return false;
        }
        return true;
    };
    //numbers, sum, larger number
    render(){
        let {x, y} = this.state;
        return(
            <React.Fragment>
                Number 1 is {x}  Prime is {""+this.isPrime(x)} <br/>
                Number 2 is {y}  Prime is {""+this.isPrime(y)} <br/>
                Sum is {x+y}    <br/>
                Larger is {x > y ? x : y}

            </React.Fragment>
        );
    }
}

export default TwoNum;