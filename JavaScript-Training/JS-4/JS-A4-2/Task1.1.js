/* Given an array of numbers, find the first even 
   in the array. Use arrow functions. 
*/

let arr = [1,5,7,12,6,10];
let x = arr.find(val => val % 2 === 0);
console.log(x);


/* Given an array of numbers, using map create an array
   where 1 has been added to all the odd numbers.
   Use arrow functions.
*/

let arr1 = [1,5,7,12,6,10];
const ans = arr1.map(val => val%2 === 0 ? val : val + 1);
console.log(ans);

/* given an array of numbers, use reduce to calculate the
   sum of all the even numbers in the array.
   Use arrow functions.
*/

let arr2 = [1,5,7,12,6,10];
let sum1 = arr2.reduce((acc,curr) => curr%2 === 0 ? acc + curr : acc,0);
console.log(sum1);


