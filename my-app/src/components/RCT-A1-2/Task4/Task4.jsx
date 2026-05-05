import React, {Component} from "react";

class Display4 extends Component{
    state = {
        product:{
            code: "PRD341",
            price: 24,
            targetSales: 10,
            actualSales: 8
        }
    };

        render(){
            let {code,price,targetSales,actualSales} = this.state.product;

            let actualSalesValue = price * actualSales;
            let targetAchieved = actualSales >= targetSales;
            return(
                <React.Fragment>
                    <h4 className="text-secondary">Product Code: {code}</h4>
                    <h4 className="text-secondary">Price: {price}</h4>
                    <h4 className="text-secondary">Sales Target: {targetSales}</h4>
                    <h4 className="text-secondary">Actual Sales Value: {actualSales}</h4>
                    <h4 className="text-secondary">Target Achieved: {targetAchieved.toString()}</h4>
                </React.Fragment>
            );
        }
}

export default Display4;