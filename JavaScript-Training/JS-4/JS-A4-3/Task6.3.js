function calculateBill(price,quantity,discount=5,paymentType){
    let total = price * quantity;

    let extraCharge = (paymentType === 'Credit Card') ? 2 : (paymentType ==='Wallet') ? 1 : 0.5;
    total = total + (total * extraCharge / 100);

    return {...{price,quantity,discount,paymentType},
        totalAmount: total
    };
}
let obj1 = {
    price: 1000,
    quantity: 2,
    discount: 10,
    paymentType: 'Wallet'
};

let obj2 = {
    price: 500,
    quantity: 3
};

console.log(calculateBill(obj1));
console.log(calculateBill(obj2));
console.log(obj1);