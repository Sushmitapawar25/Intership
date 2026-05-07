import React,{Component} from "react";
import Product1 from "./product";

class Store1 extends Component{
    state = {
        products : [
            {
                id : "C332",
                name : "Coca Cola",
                price : 20,
                quantity : 10
            },
            {
                id : "F168",
                name : "5Star",
                price : 15,
                quantity : 7
            },
            {
                id : "M228",
                name : "Maggi",
                price : 28,
                quantity : 16
            },
            {
                id : "P288",
                name : "Pepsi",
                price : 20,
                quantity : 18
            },
            {
                id : "D311",
                name : "Dairy Milk",
                price : 40,
                quantity : 5
            },
            {
                id : "M301",
                name : "Mirinda",
                price : 25,
                quantity : 8
            },
            {
                id : "K477",
                name : "Kitkat",
                price : 16,
                quantity : 7
            },
            {
                id : "R544",
                name : "Red Bull",
                price : 90,
                quantity : 3
            }
        ]
    }

    increaseQuantity = (id) => {
        let s1 = {...this.state};
        s1.products = s1.products.map((p) =>
            p.id === id
            ? {...p , quantity : p.quantity + 1}
            : p
        );
        this.setState(s1);
    }

    decreaseQuantity = (id) => {
        let s1 = {...this.state};
        s1.products = s1.products.map((p) =>
            p.id === id
            ? {...p , quantity : p.quantity - 1}
            : p
        );
        this.setState(s1);
    }

    sortByQuantity = () => {
        let s1 = {...this.state};
        s1.products.sort((a,b) => a.quantity - b.quantity);
        this.setState(s1);
    }

    sortByPrice = () => {
        let s1 = {...this.state};
        s1.products.sort((a,b) => a.price - b.price);
        this.setState(s1);
    }

    render(){
        const {products} = this.state;

        return(
            <div className="container mt-3">
                <h5 className="text-center">
                    Products in Store
                </h5>
                <div className="text-center mb-3">
                    <button
                        className="btn btn-primary btn-sm m-1"
                        onClick={this.sortByQuantity}
                    >
                        Order by Quantity
                    </button>

                    <button
                        className="btn btn-primary btn-sm m-1"
                        onClick={this.sortByPrice}
                    >
                        Order by Price
                    </button>

                </div>

                <div className="row">
                    {
                        products.map((prod) =>
                            <div className="col-3 mb-3" key={prod.id}>
                                <Product1
                                    product={prod}
                                    onIncrease={this.increaseQuantity}
                                    onDecrease={this.decreaseQuantity}
                                />
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Store1;