import React,{Component} from "react";

class ProdDetail3 extends Component{
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
        const sorted = [...products].sort((a, b) => a.sales - b.sales);

        return(
            <React.Fragment>
                <h2>Sorted by Sales</h2>
                <ul>
                    {sorted.map((p,index) => (
                        <li key={index}>Name:{p.name}, Quantity:{p.quantity}, Sales:{p.sales}</li>
                    ))}
                </ul>
            </React.Fragment>
        );
    }
}

export default ProdDetail3;