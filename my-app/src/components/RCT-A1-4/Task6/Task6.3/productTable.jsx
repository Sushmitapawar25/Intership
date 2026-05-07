import React,{Component} from "react";

class ProductTable extends Component{
    render(){
        const {products,onIncrease,onDecrease} = this.props;
        return(
            <table className="table table-bordered text-center">
                <thead className="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>Code</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((prod) =>
                            <tr key={prod.id}>
                                <td>{prod.name}</td>
                                <td>{prod.id}</td>
                                <td>{prod.price}</td>
                                <td>{prod.quantity}</td>
                                <td>
                                    <button
                                        className="btn btn-success btn-sm"
                                        onClick={() => onIncrease(prod.id)}
                                    >
                                        +
                                    </button>
                                </td>

                                <td>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        disabled={prod.quantity === 0}
                                        onClick={() => onDecrease(prod.id)}
                                    >
                                        -
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        )
    }
}
export default ProductTable;