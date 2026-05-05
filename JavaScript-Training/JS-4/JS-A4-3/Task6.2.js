function calculateBill(price,quantity,discount=5,paymentType){
    let total = price * quantity;

    let extraCharge = (paymentType === 'Credit Card') ? 2 : (paymentType ==='Wallet') ? 1 : 0.5;
    total = total + (total * extraCharge / 100);

    console.log("Final Bill Amount:",total);
}

calculateBill(1000, 2, 10, 'Wallet');
calculateBill(500, 3);
calculateBill(200, 5, 8, 'Net Banking');