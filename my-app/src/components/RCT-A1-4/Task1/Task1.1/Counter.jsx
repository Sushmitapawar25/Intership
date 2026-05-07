import React,{Component} from "react";

class Counter extends Component {
    // state = {
    //     value : this.props.counter.count,
    // };

    // handleIncrement = () => {
    //     let s1 = {...this.state};
    //     s1.value++;
    //     this.setState(s1);
    // };
    render() {
        console.log("Props",this.props);
        const {counter,onDelete,onIncrement} = this.props;
        const {alphabet,count,id} = counter;
        return(
            <h5>
                Counter {alphabet} Count = {count}
                <button className="btn btn-primary btn-sm m-2" onClick={() => onIncrement(id)}>Increment</button>
                <button className="btn btn-danger btn-sm m-2" onClick={() => onDelete(id)}>Delete</button>
            </h5>
        );
    }
}

export default Counter;