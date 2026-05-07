import React, { Component } from 'react';
import Mobile from './Mobile';

class MobileSystem extends Component {
  state = {
    mobiles: [
      {id: 1, name: "Redmi 6",    spec: "Upto 64GB",  desc: "Dual Rear Cam|3000mAh",        price: 7499  },
      {id: 2, name: "Realme 3",   spec: "Upto 4GB",   desc: "Dual Rear Cam|4230mAh",        price: 8999  },
      {id: 3, name: "Honor 7S",   spec: "2GB|16GB",   desc: "Face Unlock|3020mAh",          price: 5499  },
      {id: 4, name: "Samsung J6", spec: "4GB|64GB",   desc: "14.22cm HD | Face Unlock",     price: 9490  },
      {id: 5, name: "Moto One",   spec: "4GB|64GB",   desc: "Extra 2000 off on Exchange",   price: 13999 },
      {id: 6, name: "Nokia 6.1",  spec: "3GB|32GB",   desc: "Full HD Display|SD 630",       price: 6999  }
    ],
    cart: []
  };

  addToCart = (id) => {
    let s1 = { ...this.state };
    let cartItem = s1.cart.find(c => c.id === id);
    if (cartItem) {
      cartItem.quantity = cartItem.quantity + 1;
    } else {
      let mobile = s1.mobiles.find(m => m.id === id);
      s1.cart.push({ ...mobile, quantity: 1 });
    }
    this.setState(s1);
  }

  removeFromCart = (id) => {
    let s1 = { ...this.state };
    let cartItem = s1.cart.find(c => c.id === id);
    if (cartItem.quantity > 1) {
      cartItem.quantity = cartItem.quantity - 1;
    } else {
      s1.cart = s1.cart.filter(c => c.id !== id);
    }
    this.setState(s1);
  }

  getTotalItems = () => {
    return this.state.cart.reduce((sum, c) => sum + c.quantity, 0);
  }

  getTotalValue = () => {
    return this.state.cart.reduce((sum, c) => sum + c.price * c.quantity, 0);
  }

  render() {
    const { mobiles, cart } = this.state;

    return (
      <div className="container mt-4">
        <h3 className="text-center mb-4">Exciting Deals on Mobiles</h3>
        <div className="row">
          {mobiles.map(m => (
            <div key={m.id} className="col-md-4 mb-3">
              <Mobile
                mobile={m}
                onAddToCart={this.addToCart}
              />
            </div>
          ))}
        </div>
        <h4 className="mt-4">Cart</h4>

        {cart.length === 0
          ? <p>Cart is Empty</p>
          : <div>
              <ul>
                {cart.map(c => (
                  <li key={c.id}>
                    {c.name}, quantity: {c.quantity}&nbsp;
                    <button
                      className="btn btn-secondary btn-sm ms-2"
                      onClick={() => this.removeFromCart(c.id)}
                    >
                      Remove from Cart
                    </button>
                  </li>
                ))}
              </ul>
              <p>{"Number of items in cart =" + this.getTotalItems()}</p>
              <p>{"Value of cart =" + this.getTotalValue()}</p>
            </div>
        }
      </div>
    );
  }
}

export default MobileSystem;