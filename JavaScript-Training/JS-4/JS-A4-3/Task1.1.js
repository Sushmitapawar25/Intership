/* Define a function to multiply 5 numbers.
   It takes 5 parameters n1, n2,n3, n4 and n5 and 
   returns their product. Give default values to the 
   parameters so that the same function can be used to 
   multiply 2,3,4 or 5 numbers.
*/

function multiply(n1,n2=1,n3=1,n4=1,n5=1){
    console.log(n1,n2,n3,n4,n5);
    return n1*n2*n3*n4*n5;
}
console.log(multiply(1,2,3,4,5));
console.log(multiply(1,2,3,4));
console.log(multiply(1,2,3));
console.log(multiply(1,2));


/* Define a function which takes 4 parameters, target 
   s1,s2 and s3 and returns true if the sum of s1, s2 and s3
   is greater than the target.
   It is known that s1, s2 and s3 will not be provided always
   GIve appropriate default values.
*/

let Checkequal = (s1=0,s2=0,s3=0,target) => {
    let summ = s1 + s2 + s3;
    return summ > target;
}
console.log(Checkequal(10,2,5,17));


/* Given a JSON with the fields as product,price, and quantity
   create another JSON with product ,price and quantity
   along with discount and finalAmount.
   If quantity is less than 8, discount is 10% otherwise
   it is 15%
   Use spread operator and object destructuring.
*/

let productDetail = {
    product: 'Maggie',
    price: 14,
    quantity: 15,
};
let {price,quantity} = productDetail;
let discPercent = quantity > 8 ? 0.15 : 0.10;
let discount = discPercent*price*quantity;
let finalAmount = price * quantity - discount;
let productDetail1 = {...productDetail,discount:discount,finalAmount:finalAmount};

console.log(productDetail);
console.log(productDetail1);

/* Given an array of JSON. Each JSON has the Fields
   name,marks1,marks2, and marks3. Create an array of JSON
   with each JSON having the fields marks1, marks2,
   marks3 and totalMArks. Note that if any of the marks is missing
   in the original JSON,take it to be 0.
   Use spread operator and object destructuring.
*/

const arr = [
    {name:'Mary',marks1:25,marks2:30,marks3:40},
    {name:'Bob',marks2:22,marks3:33},
    {name:'Dave',marks3:19},
    {name:'Tim',marks1:11},
    {name:'Jack'}
];
const arr1 = arr.map(st => {
    let {marks1=0,marks2=0,marks3=0} = st;
    let totMarks = marks1 + marks2 + marks3;
    let obj = {...st, totalMarks: totMarks};
    return obj;
});
console.log(arr1);
console.log(arr);