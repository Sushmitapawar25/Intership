import React,{Component} from "react";
import Product from "./product";

class Store extends Component{
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

    render(){
        const {products} = this.state;
        return(
            <div className="container mt-3">
                <h5 className="text-center mb-3">
                    Products in Store
                </h5>
                <div className="row">
                    {
                        products.map((prod) =>
                            <div className="col-3 mb-3" key={prod.id}>
                                <Product
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

export default Store;