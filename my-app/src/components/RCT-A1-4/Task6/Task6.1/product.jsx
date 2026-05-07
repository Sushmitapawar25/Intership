import React,{Component} from "react";

class Product extends Component{

    render(){
        const {product,onIncrease,onDecrease} = this.props;
        return(
            <div
                className="text-center p-3"
                style={{
                    backgroundColor:"#27e1e6",
                    minHeight:"170px"
                }}
            >
                <b>{product.name}</b>

                <div>
                    Code : {product.id}
                </div>

                <div>
                    Price : {product.price}
                </div>

                <div>
                    Quantity : {product.quantity}
                </div>

                <button
                    className="btn btn-light btn-sm m-1"
                    onClick={() => onIncrease(product.id)}
                >
                    Increase
                </button>

                <button
                    className="btn btn-light btn-sm m-1"
                    disabled={product.quantity === 0}
                    onClick={() => onDecrease(product.id)}
                >
                    Decrease
                </button>
            </div>
        )
    }
}

export default Product;