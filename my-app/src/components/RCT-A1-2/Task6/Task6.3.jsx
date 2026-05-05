import React,{Component} from "react";

class ProdDetail2 extends Component{
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
        const filtered = products.filter(p => p.sales >= p.quantity);

        return(
            <React.Fragment>
                <h2>Sales &gt;= Quantity</h2>
                <ul>
                    {filtered.map((p,index) => (
                        <li key={index}>Name:{p.name}, Quantity:{p.quantity}, Sales:{p.sales}</li>
                    ))}
                </ul>
            </React.Fragment>
        );
    }
}

export default ProdDetail2;