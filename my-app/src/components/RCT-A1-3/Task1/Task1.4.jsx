// Given the products in a store,render the products in
// a table.Along with each product the button Add is shown.When the Add
// button is clicked,the Cart shown on top is updated
// If the item was on top is updated.If the item was already present in it ,its quantity is updated,otherwise it is 
// added to the cart.

import React,{Component} from "react";

class Mycomp4 extends Component{
    state = {
        products:[
            {name:"Pepsi",price: 20},
            {name: "Dairy Milk",price:40},
            {name:"Maggi",price: 15},
            {name:"Snickers",price: 50},
            {name:"Nescafe",price: 100},
        ],
        cart: [],
    };

    addToCart = (index) => {
        let s1 = {...this.state};
        let pr = s1.products[index];
        let x1 = s1.cart.find(c1 => c1.name === pr.name);
        x1 ? x1.qty = x1.qty+1 : s1.cart.push({...pr,qty:1});
        this.setState(s1);
    }
    showCart = () => {
        const {cart} = this.state;
        if (cart.length === 0) return <h4>Cart is Empty</h4>;
        return(
            <ul>
                {cart.map((item) => {
                    let {name,price,qty} = item;
                    return (
                        <li>
                            {name},price={price}, qty = {qty}
                        </li>
                    );
                })}
            </ul>
        )
    };

    showProduct = () => {
        const {products} = this.state;
        return (
            <React.Fragment>
                <div className="row bg-dark text-white">
                    <div className="col-4">Name</div>
                    <div className="col-4">Price</div>
                    <div className="col-4"></div>
                </div>
                {products.map((pr,index) => {
                    let {name,price} = pr;
                    return (
                        <div className="row border">
                            <div className="col-4">{name}</div>
                            <div className="col-4">{price}</div>
                            <div className="col-4"><button className="btn btn-primary btn-sm" onClick={() => this.addToCart(index)}>Add</button></div>
                        </div>
                    );
                })}
            </React.Fragment>
        );
    };

    render(){
        return (
            <React.Fragment>
                {this.showCart()}
                {this.showProduct()}
            </React.Fragment>
        )
    }
}
export default Mycomp4;