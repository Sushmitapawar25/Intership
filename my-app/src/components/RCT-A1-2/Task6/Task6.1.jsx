import React,{Component} from "react";

class ProdDetail extends Component{
    state = {
        products:[
            {name: "Perk", quantity:10, sales:7},
            {name: "5Star", quantity:7, sales:9},
            {name: "Pepsi", quantity:10, sales:20},
            {name: "Maggi", quantity:41, sales:22},
            {name: "Coke", quantity:18, sales:50},
        ],
    };
    render(){
        let {products} = this.state;


        return(
            <React.Fragment>
                <h2>Product Names</h2>
                <ul>
                    {products.map((p,index) => (
                        <li key={index}>{p.name}</li>
                    ))}
                </ul>
            </React.Fragment>
        );
    }
}

export default ProdDetail;